import React from 'react'
import CardDetail from './Component/CardDetail';
import { faker } from '@faker-js/faker';
import CardList from './Component/CardList';
import NewCard from './Component/NewCard';

function greet(){
    return "Hello from AC"
}

const App = () => {
    const style = { color: "red" };
  const title = {name: "Eden", quality: "Astonishingly beautiful"}  
  return (
    <div>
        <h1 style={style}>
            {title.name} is {title.quality}, I swear!
        </h1>
        
        <CardList />

        <NewCard />

    </div>
  );
};

export default App