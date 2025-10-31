import "./CardHome.css";

export default function Cards() {
  const infos = [
    {
      titulo: "Segurança Garantida",
      texto: "Todos os nossos veículos passam por rigorosas inspeções para garantir sua segurança.",
      icon: "🛡️",
    },
    {
      titulo: "Conforto Premium",
      texto: "Modelos equipados com tecnologia e conforto de última geração para sua viagem.",
      icon: "💺",
    },
    {
      titulo: "Sustentabilidade",
      texto: "Comprometidos com o meio ambiente, oferecemos opções híbridas e elétricas.",
      icon: "🌱",
    },
    {
      titulo: "Atendimento 24h",
      texto: "Nossa equipe está sempre pronta para te atender a qualquer hora do dia.",
      icon: "📞",
    },
  ];

  return (
    <div className="cards-container">
      {infos.map((info, index) => (
        <div className="card-info" key={index}>
          <span className="card-icon">{info.icon}</span>
          <h3>{info.titulo}</h3>
          <p>{info.texto}</p>
        </div>
      ))}
    </div>
  );
}
