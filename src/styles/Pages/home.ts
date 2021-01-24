import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 400px;
  width: 100%;

  h1 {
    text-align: center;
    color: ${(props) => props.theme.colors.primary};
  }

  p {
    color: ${(props) => props.theme.colors.secondary};
    margin-top: 24px;
    text-align: justify;
  }
`;
