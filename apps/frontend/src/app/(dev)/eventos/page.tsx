"use client";
import {  Evento } from "core";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";
import { use, useEffect, useState } from "react";
import { acessarEventos } from "@/services/api";


export default function PaginaEventos() {
  const [eventos, setEvento] = useState<Evento[] | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(false);

  async function carregarEventos() {
  
    setCarregando(true);
    setErro(null);
    try {
      const eventos = await acessarEventos();
      setEvento(eventos);
    } catch (error: any) {
      setErro(error.message);
      setEvento(null);
    } finally {
      setCarregando(false);
    }
  }
  
  useEffect(() => {
    carregarEventos();
  }, []);

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
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-3">
      {eventos?.map((evento) => (
        <div
          key={evento.id}
          className="
            flex flex-col w-full overflow-hidden
            bg-zinc-800 rounded-lg
          "
        >
          <div className="relative w-full h-52">
            <Image
              src={evento.imagem}
              fill
              alt={evento.nome}
              className="object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col items-center p-7 gap-5 text-center">
            <span className="text-lg font-black">{evento.nome}</span>
            <p className="flex-1 text-sm text-zinc-400">{evento.descricao}</p>
            <QRCode
              value={JSON.stringify({ id: evento.id, senha: evento.senha })}
              className="w-44 h-44 border"
            />
            <div className="flex gap-5">
              <Link
                href={`/evento/admin/${evento.id}/${evento.senha}`}
                className="flex-1 botao vermelho"
              >
                Admin
              </Link>
              <Link
                href={`/convite/${evento.alias}`}
                className="flex-1 botao verde"
              >
                Convite
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
