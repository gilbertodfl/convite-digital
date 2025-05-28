const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';

export async function acessarEvento(id: string, senha: string) {
  const response = await fetch(`${API_URL}/eventos/acessar`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, senha }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.messagem ?? 'Erro ao acessar evento');
  }

  return response.json();
} 