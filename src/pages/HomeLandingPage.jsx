import "./HomeLandingPage.css";
import Cards from "../components/CardHome.jsx";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeLandingPage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const continuacaoRef = useRef(null);
  const carsRef = useRef(null);
  const modeloCarrosRef = useRef(null);

  useEffect(() => {
    // Set initial width for typing effect
    gsap.set(titleRef.current, { width: 0 });

    // Hero animations
    const tl = gsap.timeline();
    tl.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
      .to(titleRef.current, { width: '100%', duration: 3, ease: "power2.out" }, "-=0.5")
      .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });

    // Scroll-triggered animations
    gsap.fromTo(continuacaoRef.current, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 1, ease: "power2.out",
      scrollTrigger: {
        trigger: continuacaoRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.fromTo(carsRef.current, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 1, ease: "power2.out",
      scrollTrigger: {
        trigger: carsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.fromTo(modeloCarrosRef.current.children, { opacity: 0, y: 30, scale: 0.9 }, {
      opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)", stagger: 0.2,
      scrollTrigger: {
        trigger: modeloCarrosRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="home-container">
      <section className="home-header">
        <div className="overlay">
          <h1 ref={titleRef} className="typing">Bem-vindo ao EliteCar!</h1>
          <p ref={subtitleRef} className="fade-in">Explore nossa coleção de veículos e encontre o carro dos seus sonhos.</p>
        </div>
      </section>

      <section ref={continuacaoRef} className="continuacao fade-in">
        <h2 className="fade-in">Por que escolher nossos carros?</h2>
        <p className="fade-in texto1">
          Oferecemos uma ampla variedade de modelos, desde carros econômicos até veículos de luxo,
          todos inspecionados para garantir qualidade e segurança. Nossa equipe está pronta para
          ajudar você a encontrar o carro perfeito que atenda às suas necessidades e estilo de vida.
        </p>
        <Cards />
      </section>

      <section ref={carsRef} className="cars fade-in">
        <div className="cars-info">
          <h2 className="fade-in">Confira nossos modelos mais populares</h2>
          <p className="fade-in">
            Navegue pela nossa seleção de carros populares, cuidadosamente escolhidos por sua
            performance, design e valor. Temos certeza de que você encontrará algo que vai adorar!
          </p>
        </div>

        <section ref={modeloCarrosRef} className="modeloCarros fade-in">
          <div className="carroModelo">
            <img src="/src/assets/esportivo.png" alt="Carro Modelo 1" />
            <h3 style={{color: 'red'}}>Modelo Esportivo X</h3>
            <p>Desempenho excepcional com design aerodinâmico.</p>
          </div>
          <div className="carroModelo">
            <img src="/src/assets/familiar.png" alt="Carro Modelo 2" />
            <h3 style={{color: 'red'}}>Modelo Familiar Y</h3>
            <p>Espaço e conforto para toda a família.</p>
          </div>
          <div className="carroModelo">
            <img src="/src/assets/byd.webp" alt="Carro Modelo 3" />
            <h3 style={{color: 'red'}}>Modelo Elétrico Z</h3>
            <p>Tecnologia avançada com sustentabilidade.</p>
          </div>
        </section>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>EliteCar</h3>
            <p>Seu destino para veículos de qualidade. Encontre o carro dos seus sonhos conosco.</p>
          </div>
          <div className="footer-section">
            <h4>Contato</h4>
            <p>Email: contato@elitecar.com</p>
            <p>Telefone: (11) 1234-5678</p>
            <p>Endereço: Rua dos Carros, 123 - São Paulo, SP</p>
          </div>
          <div className="footer-section">
            <h4>Redes Sociais</h4>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 EliteCar. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
