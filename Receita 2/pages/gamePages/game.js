import Plataformas from "./FranquiaGame";

export default function Jogo() {
  return (
    <>
      <section>
        <h2>Minecraft</h2>
        <Conteudo />
      </section>
      <Plataformas />
    </>
  );
}

export function Conteudo() {
  return (
    <p>
      Minecraft é um jogo eletrônico sandbox de sobrevivência criado pelo
      desenvolvedor sueco Markus "Notch" Persson e posteriormente desenvolvido e
      publicado pela Mojang Studios, cuja propriedade intelectual foi obtida
      pela Microsoft em 2014.
    </p>
  );
}
