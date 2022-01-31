import { Container } from "./style";

export default function HomePage() {
  return (
    <Container id="home">
      <div className="margins" data-aos="fade-up">
        <h1>Precisando de Advogado?</h1>
        <p>
          Somos especialistas em direito Civil, Consumidor,
          Trabalhista, Tributário e Criminal.
        </p>
        <a 
          href="https://linktr.ee/almendraemota"
          target="_blank"
          rel="noopener noreferrer"
        >
        <button>
          Fale com um especialista
          <i className="bi bi-whatsapp"></i>
        </button>
        </a>
      </div>
    </Container>
  )
};