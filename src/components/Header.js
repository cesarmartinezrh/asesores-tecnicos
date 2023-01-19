import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 0 20px;
  background-color: var(--wine);
`

const Title = styled.h1`
  color: white;
  font-size: 15px;

  @media screen and (min-width: 767px){
    font-size: 30px;
  }
`
const HeaderImg = styled.img`
  width: 40%;
  filter: brightness(0) invert(1);
`


const Header = ({img, title}) => {
  return (
  <Container>
    <HeaderImg src={img}/>
    <Title>{title}</Title>
  </Container>
  )
}

export default Header
