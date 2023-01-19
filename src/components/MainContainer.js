import styled from 'styled-components'


const Container = styled.div`
  width: 100%;
  padding: 0 40px;
`

const MainContainer = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default MainContainer
