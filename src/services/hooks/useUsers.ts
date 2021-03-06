import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

type GetUsersResponse = {
  totalCount: number;
  users: User[],
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
    const { data, headers } = await api.get("/users", {
      params: {
        page,
      }
    });

    const totalCount = Number(headers['x-total-count'])

    const users = data.users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
      };
    });

    return { users, totalCount };
} 

export function useUsers(page: number, options?: UseQueryOptions) {
  // esse primeiro parametro é a chave que vai identificar o dado na cache
  return useQuery(["users", page], () => getUsers(page), { 
      staleTime: 1000 * 60 * 10, // 10 minutos
      /**
       * Possui um parametro que é o initialData (vai dizer com que valor quero inicializar o "users").
       * Se eu passo ele, a primeira requisição não será feita pelo lado do cliente, apenas
       * pelo lado do SSR (SERVIDOR)
       */
      // ...options, 
    }
  ) as UseQueryResult<GetUsersResponse, unknown>; 
}