import './App.css';
import { ThemeProvider } from "styled-components"
import Header from './components/Header';
import content from './content';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';
const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: {
    width: '768px',
  }
}
function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles/>
    <Header/>
    <Container>
      {content.map((item, index) => (
        <p>{item.title}</p>
      ))}
    </Container>
    </>
    </ThemeProvider>
  );
}

export default App;
