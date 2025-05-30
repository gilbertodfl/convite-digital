"use client";

import AcessarViaQrCode from "@/components/evento/AcessarViaQrCode";
import InformacoesEvento from "@/components/evento/InformacoesEvento";
import CopiarClipboard from "@/components/shared/CopiarClipboard";
import Janela from "@/components/shared/Janela";
import useEvento from "@/data/hooks/useEvento";
import { IconFingerprint,  IconLink, IconLinkMinus } from "@tabler/icons-react";
import { Evento } from "core";
import { useState , useEffect} from "react";
import { useFocusEffect } from "expo-router";

export default function EventoSucesso() {
  const { evento } = useEvento();

  const  [ urlAtual, setUrlAtual ] = useState("")
  useEffect( () => {
    setUrlAtual ( window.location.origin)
  }, []  )

  return evento ? (
    <div>
      <Janela
        label="Seu evento foi criado com sucesso!"
        titulo={evento?.nome ? evento?.nome : "Novo Evento"}
        imagem={evento?.imagem}
        background={evento?.imagemBackground}
      >
        <InformacoesEvento evento={evento as Evento} 
        />
        <div className="flex gap-5 items-center">
          <div className="flex-1 flex flex-col gap-5">
            <CopiarClipboard
              icone={IconLink}
              label="Link para convidar"
              texto={`${urlAtual}/evento/${evento?.id}`} />
              <CopiarClipboard
              icone={IconLinkMinus}
              label="Link do Administrador"
              texto={`${urlAtual}/evento/admin/${evento?.id}`} />  
              <CopiarClipboard
              icone={IconFingerprint}
              label="Senha Administrador"
              texto={evento.senha ?? "" } 
              observacao="Guarde essa senha com cuidado!!! Ela não será mais mostrada. "/>  

          </div>
          <AcessarViaQrCode evento={evento as Evento}/>
        </div>
      </Janela>
    </div>
  ) : null;
}