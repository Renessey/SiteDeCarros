import "./HomeLandingPage.css";
import Cards from "../components/CardHome.jsx";

export default function HomeLandingPage() {
  return (
    <div className="home-container">
      <section className="home-header">
        <div className="overlay">
          <h1>🚗 Bem-vindo ao Site de Carros!</h1>
          <p>Explore nossa coleção de veículos e encontre o carro dos seus sonhos.</p>
        </div>
      </section>

      <section className="continuacao">
        
        <h2>Por que escolher nossos carros?</h2>
        <p>
          Oferecemos uma ampla variedade de modelos, desde carros econômicos até veículos de luxo,
          todos inspecionados para garantir qualidade e segurança. Nossa equipe está pronta para
          ajudar você a encontrar o carro perfeito que atenda às suas necessidades e estilo de vida.
        </p>
        <Cards />
      </section>

      <section className="cars">
        <div className="cars-info">
          <h2>Confira nossos modelos mais populares</h2>
          <p>
            Navegue pela nossa seleção de carros populares, cuidadosamente escolhidos por sua
            performance, design e valor. Temos certeza de que você encontrará algo que vai adorar!
          </p>  
        </div>
        
        <section className="modeloCarros">
          <div className="carroModelo">
            <img src="/src/assets/mercedez.jpg" alt="Carro Modelo 1" />
            <h3>Modelo Esportivo X</h3>
            <p>Desempenho excepcional com design aerodinâmico.</p>
          </div>
          <div className="carroModelo">
            <img src="/src/assets/mercedez.jpg" alt="Carro Modelo 2" />
            <h3>Modelo Familiar Y</h3>
            <p>Espaço e conforto para toda a família.</p>
          </div>
          <div className="carroModelo">
            <img src="/src/assets/car3.jpg" alt="Carro Modelo 3" />
            <h3>Modelo Elétrico Z</h3>
            <p>Tecnologia avançada com sustentabilidade.</p>
          </div>
        </section>
      </section>
    </div>
  );
}
