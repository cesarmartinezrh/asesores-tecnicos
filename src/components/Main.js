import styled from "styled-components";
import SearchEngine from "./SearchEngine";
import Header from "./Header";

const Container = styled.div`
  width: 100%;
  padding: 0 40px;
`;

const Main = () => {
  return (
    <>
      <Header
        title={"Herramienta de búsqueda de Asesores Técnicos"}
        subtitle={"Vigente a partir de: 13 de enero 2023"}
        img={
          "https://raw.githubusercontent.com/cesarmartinezrh/conaf/main/src/logo.png"
        }
      />
      <Container>
        <SearchEngine />
      </Container>
    </>
  );
};

export default Main;
