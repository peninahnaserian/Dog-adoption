import React, {useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [dogs,setDogs] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
    axios.get('http://localhost:5000/api/visitors/dogs')
    .then(res => {
      setDogs(res.data)
      setIsLoading(false)
    })
    .catch(err =>{
      console.log(err);
    })
  })
  return (
    <div className="App">
      {isLoading?<h2>Gathering the best Doggos in the world!</h2>:
      dogs.map(dog => {
        return <p>{dog.name}</p>
      })}
    </div>
  );
}

export default App;

//https://github.com/mattbasile/Doggo_Land_FE_Tutorial/tree/master/client/src/Pages