
/*
A lógica aqui é que dentro de cada pacote, por exemplo, o pacote de evento,
você pode ter várias funções, classes, etc. E você pode querer exportar tudo isso
de uma vez só, para que outros pacotes possam usar essas funções/classes.
Então, você cria um arquivo index.ts dentro de cada pacote e exporta tudo que
você quer que seja acessível a partir de fora do pacote.
Isso é útil porque permite que você organize seu código em pacotes e ainda assim
tenha uma interface limpa e fácil de usar para quem está consumindo esses pacotes.

Agora veja que neste arquivo eu exporto tudo para tornar o código mais limpo.
Isso é uma prática comum em TypeScript e JavaScript. Na prática preciso só exportar
este arquivo atual. E nos outros locais que vão chamar, no máximo importar este index.ts.

*/

export * from "./constants";
export * from "./evento";
export * from "./shared";

