import { createServer, Factory, Model } from 'miragejs';
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
      server.createList('user', 10) // vai criar 10 usuarios
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750; // toda a chamada que fizer, vai demorar 750ms (para testar os carreamentos, spinners)

      this.get('/users'); // sabe que automaticamente deve retornar a lista completa de usuarios
      this.post('/users'); // sabe que precisa criar um usuario de forma automatizada

      this.namespace = '';
      this.passthrough(); // todas as chamadas que tiverem 'api', passarao pelo mirage. Caso nao sejam detectadas, passarao adiante 
    }
  })

  return server;
}