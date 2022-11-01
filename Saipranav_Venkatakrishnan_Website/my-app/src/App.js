import logo from './logo.svg';
import phoenix from './Phoenix.jpg'
import './App.css';

const Header = () => {
  return (
    <header style={{
      backgroundColor: 'blue',
    }}>
      <div className = "head-text">
        <div>
          <img src={phoenix} align="left" className='Phoenix' />
          <div align="center" className='Personal-Information'>
            <h4> Hello World, my name is Sai! </h4>
            <p style={{
              fontSize: "50%"
              }}> 
              I'm a Computer Engineer at the University of Illinois Urbana Champaign. <br></br>
              My interests include all things Anime, Personal Coding Projects, and Spicy Food.
              </p>
          </div>
        </div>
      </div>
    </header>
  )
}

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
      <Header />
    </>
  );
}

export default App;
