export default function Plataformas() {
  return (
    <section>
      <h2>Plataformas disponíveis</h2>
      <PlataformasDisponiveis plataforma="Nintendo Switch" />
      <PlataformasDisponiveis plataforma="Xbox" />
      <PlataformasDisponiveis plataforma="PC" />
      <PlataformasDisponiveis plataforma="Playstation" />
    </section>
  );
}

export function PlataformasDisponiveis(props) {
  return <h3>{props.plataforma}</h3>;
}
