import { useState } from 'react';
import './App.css';
import Result from './components/Result';
import Summary from './components/Summary';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto text-[18px] xl:flex xl:min-h-screen xl:items-center xl:justify-center">
      <div className="flex flex-col xl:flex-row">
        <Result />
        <Summary />
      </div>
    </div>
  );
}

export default App;
