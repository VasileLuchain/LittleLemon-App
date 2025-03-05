import './App.css';
import './index.css';
import Heading from './Header'
import Nav from'./Nav';
import Main from './Main';
import Footer from'./Footer';

function App() {
  return (
    <html>
      <head>
        <meta name="description" content="Best place for italian cuisine"/>
        <meta name="og:title" content="Little Lemon Restaurant"/>
        <meta name="og:description" content="Best Restaurant in Chicago"/>
        <meta name="og:image" content="Image/Logo.svg"/>
      </head>
      <body>
        <Heading>
        </Heading>
        <Nav>
        </Nav>
        <Main>
        </Main>
        <Footer>
        </Footer>
      </body>
    </html>
  );
}

export default App;
