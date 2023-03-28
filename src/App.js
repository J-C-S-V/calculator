import './App.css';
import { Button } from './components/buttons/button.jsx';
import { Screen } from './components/screen/screen';
import { ButtonClear } from './components/buttons/button_clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const addInput = (value) => {
    setInput(input + value);
  };
  //Ahora más tarde cambiamos esto con function a ver qué tal
  const addResult = () => {
    setInput(evaluate(input));
  };

  return (
    <div className="App">
      <header className="main-header">calculator</header>
      <div className="container-calculator">
        <Screen input={input} />
        <div className="row">
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
      </div>
      <div className="row">
        <ButtonClear handleClear={() => setInput('0')}>Clear</ButtonClear>
      </div>
    </div>
  );
}

export default App;
