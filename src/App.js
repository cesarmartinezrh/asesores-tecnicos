import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import MainContainer from './components/MainContainer'
import ContentTable from "./components/ContentTable";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header
        title={"Asesores Técnicos"}
        img={
          "https://raw.githubusercontent.com/cesarmartinezrh/conaf/main/src/logo.png"
        }
      />
      <MainContainer>
        <ContentTable />
      </MainContainer>
    </>
  );
}

export default App;
