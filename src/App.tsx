// import "bootstrap/scss/bootstrap.scss";
import './App.scss';
import { TradeForm } from './TradeForm';
import viteLogo from '/burger.gif';

function App() {

  return (
    <div className='font-sans'>
      <div>
        <a href="https://foodcity.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Food City Game</h1>
      <TradeForm />

    </div>
  )
}

export default App
