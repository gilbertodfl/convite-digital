"use client";
import DashboardEvento from "@/components/evento/DashboardEvento";
import FormSenhaEvento from "@/components/evento/FormSenhaEvento";
import { Convidado, Evento } from "core";
import { use, useCallback, useEffect, useState } from "react";
import { acessarEvento } from "@/services/api";
import useAPI from "@/data/hooks/useAPI";

export default function PaginaAdminEvento(props: any) {
  const  { httpPost } = useAPI()
  const params: any = use(props.params);

  const id = params.todos[0];
  const [evento, setEvento] = useState<Evento | null>(null);
  const [senha, setSenha] = useState<string | null>(params.todos[1] ?? null);
  const [erro, setErro] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(false);

  const presentes = evento?.convidados.filter((c) => c.confirmado) ?? [];
  const ausentes = evento?.convidados.filter((c) => !c.confirmado) ?? [];

  const totalGeral =
    presentes?.reduce((total: number, convidado: Convidado) => {
      return total + convidado.qtdeAcompanhantes + 1;
    }, 0) ?? 0;

  async function carregarEvento() {
    if (!id || !senha) return;

    setCarregando(true);
    setErro(null);
    try {
      const evento = await acessarEvento(id, senha);
      setEvento(evento);
    } catch (error: any) {
      setErro(error.message);
      setEvento(null);
    } finally {
      setCarregando(false);
    }
  }

  const obterEvento = useCallback(async () => {
    if (!id || !senha) return;
    const evento = await httpPost("/eventos/acessar", { id, senha });
    setEvento(evento);
  }, [httpPost, id, senha]);

  useEffect(() => {
    carregarEvento();
  }, [id, senha]);

  // useEffect( ()=> {
  //   obterEvento()
  // }, [obterEvento])

  if (carregando) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-xl text-zinc-400">Carregando...</div>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-xl text-red-500">{erro}</div>
        <FormSenhaEvento   acessarEvento={obterEvento} senha={senha} setSenha={setSenha}/>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      {evento ? (
        <DashboardEvento
          evento={evento}
          presentes={presentes}
          ausentes={ausentes}
          totalGeral={totalGeral}
          onAtualizar={carregarEvento}
        />
      ) : (
        <FormSenhaEvento
          acessarEvento={obterEvento}
          senha={senha}
          setSenha={setSenha}
        />
      )}
    </div>
  );
}
