import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import TableList from './TableList'
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="container">
      <h1>ระบบจองโต๊ะอาหาร</h1>
        <TableList />
      </div>
    );
  }
}

export default App;
