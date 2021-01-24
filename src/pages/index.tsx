import Head from "next/head";

import { Container, Content } from "../styles/Pages/home";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Olá Mundo</title>
      </Head>

      <Container>
        <Content>
          <h1>
            Projeto Base para Criação de Aplicações com NextJs e TypeScript
          </h1>
          <p>
            Esta base vem basicamente crua, incluindo apenas uma base estrutural
            para o projeto, a partir do clone deste projeto deve-se adicionar os
            padrões de prettier e eslint, ou também o editorconfig caso esteja
            trabalhando em grupo. <br />
          </p>
        </Content>
      </Container>
    </div>
  );
};

export default Home;
