"use client";
import { createContext, ReactNode, useState } from "react";

interface ContextoMensagensProps {
  mensagem: string | null;
  mostrarMensagem: (msg: string) => void;
  limparMensagem: () => void;
}

const ContextoMensagens = createContext<ContextoMensagensProps>({
  mensagem: null,
  mostrarMensagem: () => {},
  limparMensagem: () => {},
});

export function ProvedorMensagens({ children }: { children: ReactNode }) {
  const [mensagem, setMensagem] = useState<string | null>(null);

  function mostrarMensagem(msg: string) {
    setMensagem(msg);
    setTimeout(() => setMensagem(null), 3000);
  }

  function limparMensagem() {
    setMensagem(null);
  }

  return (
    <ContextoMensagens.Provider value={{ mensagem, mostrarMensagem, limparMensagem }}>
      {children}
    </ContextoMensagens.Provider>
  );
}

export default ContextoMensagens;