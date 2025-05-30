"use client";
import Pagina from "@/components/template/Pagina";
import { ProvedorContextoEvento } from "@/data/contexts/ContextoEvento";

export default function Layout(props: any) {
  return (
    <Pagina>
      <ProvedorContextoEvento>
        {props.children}
      </ProvedorContextoEvento>
    </Pagina>
  );
}
