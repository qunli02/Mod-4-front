import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ui_Container from './Ui_Container'
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom"

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Ui_Container />
      </div>
    </BrowserRouter>
  );
}

export default App;
