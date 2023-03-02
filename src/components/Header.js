import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 0 20px;
  background-color: var(--green);
`;

const Title = styled.h1`
  color: white;
  font-size: 15px;

  @media screen and (min-width: 767px) {
    font-size: 30px;
  }
`;
const HeaderImg = styled.img`
  width: 80%;
  filter: brightness(0) invert(1);
`;

const Subtitle = styled.h2`
  color: white;
  font-size: 12px;

  @media screen and (min-width: 767px) {
    font-size: 25px;
  }
`;

const Anchor = styled.a`
  width: 30%;

  @media screen and (min-width: 767px) {
    width: 80%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = ({ img, title, subtitle }) => {
  return (
    <Container>
      <Anchor href={"/asesores-tecnicos/"}>
        <HeaderImg src={img} />
      </Anchor>
      <TitleContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TitleContainer>
    </Container>
  );
};

export default Header;
