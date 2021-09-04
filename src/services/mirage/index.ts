import { createServer, Factory, Model, Response } from 'miragejs';
import faker from 'faker';

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    models: { // quais os dados que serao armazenados (como se fossem as tabelas)
      user: Model.extend<Partial<User>>({})
    },

    factories: { // preencher com dados ficticios quando o servidor for inicializado
      user: Factory.extend({
        name(i) {
          return `User ${i + 1}`
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      })
    },

    seeds(server) { // preencher com dados ficticios quando o servidor for inicializado
      server.createList('user', 200) // vai criar 200 usuarios
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750; // toda a chamada que fizer, vai demorar 750ms (para testar os carreamentos, spinners)

      // sabe que automaticamente deve retornar a lista completa de usuarios
      this.get('/users', function (schema, request) { 
        const { page = 1, per_page = 10 }  = request.queryParams;

        const total = schema.all('user').length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd);

        return new Response(
          200, 
          { 'x-total-count': String(total) },
          { users }
        );
      }); 
      this.post('/users'); // sabe que precisa criar um usuario de forma automatizada

      this.namespace = '';
      this.passthrough(); // todas as chamadas que tiverem 'api', passarao pelo mirage. Caso nao sejam detectadas, passarao adiante 
    }
  })

  return server;
}