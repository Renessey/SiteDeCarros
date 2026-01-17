import "./Sobre.css";

export default function Sobre() {
  return (
    <div className="sobre-container">
      <section className="hero-sobre">
        <div className="hero-overlay">
          <h1>Sobre a EliteCar</h1>
          <p>Conheça nossa história e compromisso com a excelência automotiva</p>
        </div>
      </section>

      <section className="missao">
        <div className="container">
          <h2>Nossa Missão</h2>
          <p>
            Na EliteCar, nossa missão é proporcionar aos nossos clientes uma experiência excepcional na compra e venda de veículos.
            Oferecemos uma ampla gama de carros de alta qualidade, desde modelos econômicos até luxuosos, sempre com transparência,
            integridade e compromisso com a satisfação do cliente.
          </p>
        </div>
      </section>

      <section className="historia">
        <div className="container">
          <h2>Nossa História</h2>
          <p>
            Fundada em 2010, a EliteCar começou como um pequeno negócio familiar apaixonado por carros. Ao longo dos anos,
            crescemos para nos tornarmos uma das principais concessionárias da região, sempre mantendo nossos valores fundamentais:
            qualidade, confiança e atendimento personalizado.
          </p>
          <p>
            Hoje, contamos com uma equipe experiente de profissionais dedicados a ajudar você a encontrar o veículo perfeito
            para suas necessidades, seja para uso pessoal ou comercial.
          </p>
        </div>
      </section>

      <section className="valores">
        <div className="container">
          <h2>Nossos Valores</h2>
          <div className="valores-grid">
            <div className="valor-item">
              <h3>Qualidade</h3>
              <p>Oferecemos apenas veículos inspecionados e de alta qualidade.</p>
            </div>
            <div className="valor-item">
              <h3>Transparência</h3>
              <p>Sempre claros e honestos em todas as nossas negociações.</p>
            </div>
            <div className="valor-item">
              <h3>Atendimento</h3>
              <p>Dedicados a proporcionar a melhor experiência possível aos nossos clientes.</p>
            </div>
            <div className="valor-item">
              <h3>Inovação</h3>
              <p>Buscamos constantemente novas maneiras de melhorar nossos serviços.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="servicos">
        <div className="container">
          <h2>Nossos Serviços</h2>
          <div className="servicos-grid">
            <div className="servico-item">
              <h3>Venda de Veículos</h3>
              <p>Ampla seleção de carros novos e usados, nacionais e importados.</p>
            </div>
            <div className="servico-item">
              <h3>Financiamento</h3>
              <p>Parceria com as melhores instituições financeiras para facilitar sua compra.</p>
            </div>
            <div className="servico-item">
              <h3>Inspeção Técnica</h3>
              <p>Todos os nossos veículos passam por rigorosa inspeção antes da venda.</p>
            </div>
            <div className="servico-item">
              <h3>Consultoria</h3>
              <p>Orientação especializada para ajudá-lo a escolher o carro ideal.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="equipe">
        <div className="container">
          <h2>Nossa Equipe</h2>
          <p>
            Nossa equipe é composta por profissionais experientes e apaixonados por carros. Cada membro da EliteCar
            está comprometido em oferecer o melhor atendimento e garantir sua satisfação total.
          </p>
        </div>
      </section>

      <section className="contato-sobre">
        <div className="container">
          <h2>Entre em Contato</h2>
          <p>
            Tem dúvidas ou quer saber mais sobre nossos serviços? Entre em contato conosco!
            Estamos sempre prontos para ajudar.
          </p>
          <div className="contato-info">
            <p><strong>Email:</strong> contato@elitecar.com</p>
            <p><strong>Telefone:</strong> (11) 1234-5678</p>
            <p><strong>Endereço:</strong> Rua dos Carros, 123 - São Paulo, SP</p>
          </div>
        </div>
      </section>
    </div>
  );
}
