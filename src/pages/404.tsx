import Head from "next/head";
import Link from "next/link";
import { Container } from "../styles/Pages/404";

const error404: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>404 Não encontrado</title>
      </Head>

      <h1>Página indisponível.</h1>
      <p>
        Retorne a tela principal clicando <Link href="/">aqui.</Link>
      </p>
    </Container>
  );
};

export default error404;
