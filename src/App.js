import './App.css';
import { Button } from './components/buttons.jsx';

function App() {
  return (
    <div className="App">
      <header className="main-header">calculator</header>
      <div className="container-calculator">
        <div className="row">
          <Button>1</Button>
        </div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
