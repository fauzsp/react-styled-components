import { Button } from "./styles/Button.styled"
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { StylesHeader, Nav, Logo } from "./styles/Header.styled"
export default function Header() {
  return (
      <StylesHeader bg='red'>
    <Container>
    <Nav>
        <Logo src='./images/logo.svg' alt='image description'/>
        <Button>Try It Free</Button>
    </Nav>
    <Flex>
      <div>
        <h1>Build The Community Your Fans Will Love</h1>
      </div>
    </Flex>
    </Container>
    </StylesHeader>
  )
}
