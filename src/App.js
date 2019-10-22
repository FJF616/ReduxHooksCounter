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
          label="Increment"
          labelPosition="left"
          onClick={() => dispatch({type: 'INCREMENT'})} 
          icon="plus"
        />  
        <Button.Or/>
        <Button 
          negative 
          label="Decrement"
          onClick={() => dispatch({type: 'DECREMENT'})} 
          icon="minus"
        />
      </Button.Group>
        <Button 
          color="facebook" 
          onClick={() => dispatch({type: 'CLEAR'})} 
          icon="refresh"
          style={{margin: '5px'}}
          label="Reset Counter"
          disabled={counter === 0 ? true : false}
        />
    </div>
  );
}

export default App;
