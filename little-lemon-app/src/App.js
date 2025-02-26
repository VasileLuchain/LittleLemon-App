import logo from './logo.svg';
import './App.css';

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
        <Nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">Reservation</a></li>
            <li><a href="">Order Online</a></li>
            <li><a href="">Login</a></li>
          </ul>
        </Nav>
        <Header>
          <img src="Images/Logo.svg"></img>
        </Header>
        <Main>

        </Main>
        <Footer>
          <p>Copyright LittleLemon</p>
        </Footer>
      </body>
    </html>
  );
}

export default App;
