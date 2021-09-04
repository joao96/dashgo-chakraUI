import { createServer, Model } from 'miragejs';


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