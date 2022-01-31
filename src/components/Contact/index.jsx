import { 
  Container,
  ContainerAll,
  ContainerInfo,
  ContainerForm
} from './style';

export default function Contact() {
  return (
    <Container id="contact">
      <ContainerAll className="margins">
        <ContainerInfo>
          <p data-aos="fade-up">Contamos com uma equipe especializada de advogados. Nos envie sua dúvida que retornaremos imediatamente.</p>
          <a 
            href="https://linktr.ee/almendraemota"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button data-aos="fade-up">Envie uma mensagem <i className="bi bi-whatsapp"></i></button>
          </a>
        </ContainerInfo>

        <div data-aos="fade-up">
          <ContainerForm>
            <p>Entre em contato</p>
            <form action="https://formsubmit.co/almendraemota.adv@gmail.com" method="POST">
              <input type="hidden" name="_next" value="almendraemota.com/Sucess" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="nome" placeholder="Seu nome" required />
              <input type="email" name="email" placeholder="Seu e-mail" required />
              <input type="number" name="telefone" placeholder="Seu telefone (opcional)"/>
              <textarea
                name="Mensagem"
                placeholder="Digite aqui sua mensagem..."
                required
              ></textarea>
              <button type="submit">Enviar</button>
            </form>
          </ContainerForm>
        </div>
      </ContainerAll>
    </Container>
  )
};