import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import './App.css';


function App() {

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div className="App">
      <h1>Counter: {counter} </h1>
      <Button.Group>
        <Button 
          positive 
          onClick={() => dispatch({type: 'INCREMENT'})} 
          icon="plus"
        />  
        <Button.Or/>
        <Button 
          negative 
          onClick={() => dispatch({type: 'DECREMENT'})} 
          icon="minus"
        />
      </Button.Group>
    </div>
  );
}

export default App;
