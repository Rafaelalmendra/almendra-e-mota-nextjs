import { Container } from "./style"

export default function HomePage() {
  return (
    <Container id="home">
      <div className="margins">
        <h1>Precisando de um advogado?</h1>
        <p>
          Somos especialistas em direito Civil, Consumidor,
          Trabalhista, Tributário e Criminal.
        </p>
        <button>
          Fale com um especialista
          <i className="bi bi-whatsapp"></i>
        </button>
      </div>
    </Container>
  )
}