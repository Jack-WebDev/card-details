
import styled, { css } from "styled-components"
import Form from "./components/Form"

const GradientBG = styled.div`
  display: grid;
  padding-block: 3rem;
  background-image: url('../images/bg-main-mobile.png');
  background-repeat: no-repeat;
  background-size: cover; 
`

const ContentContainer = styled.div`
  background-color: #FFF;
  padding-block: 2rem;

  @media screen and (min-width: 768px) {
    display: grid;
    place-items: center;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: .4fr 1fr;
    min-height: 100vh;
  }
`

const Img = styled.img`
  width: 60%;


  ${(props) =>
    props.inlineStyles &&
    css`
      transform: translateX(80px);


      @media screen and (min-width: 768px) {
        width: 80%;
        transform: translate(100px, 100px);
      }

      @media screen and (min-width: 768px) and (min-height: 900px) {
        transform: translate(100px, 300px);
      }

      @media screen and (min-height: 1024px) {
        transform: translate(100px, 350px);
      }
    `}

  ${(props) =>
    props.frontStyle &&
    css`
      transform: translate(40px,-40px);


      @media screen and (min-width: 768px) {
        width: 80%;
        transform: translateX(120px);
      }
    `}


`

function App() {

  return (
    <Container>
      <GradientBG>
          <Img className="back-img" inlineStyles src="/images/bg-card-back.png" alt="" />
          <Img className="front-img" frontStyle src="/images/bg-card-front.png" alt="" />
      </GradientBG>
      <ContentContainer>
        <Form />
      </ContentContainer>
    </Container>
  )
}

export default App