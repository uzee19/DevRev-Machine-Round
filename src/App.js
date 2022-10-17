import React , {useState} from 'react';

import axios from 'axios';

import './App.css';

function App() {

  const [queryText , setqueryText] = useState("");
  const [data , setData] = useState(null);
  const inputHandler = (event) =>{
    
    setqueryText(event.target.value);
    
    if(queryText.length >0){
    const queryString = `https://61824bbb84c2020017d89da4.mockapi.io/api/v1/names?name=${queryText}`;
    const newData  = axios.get(queryString).then((res) => res.data);
    
    newData.then((resolve,reject)=>{
      setData(resolve);
      // console.log(data.items);
      })
    }
  }

  const copyInputHandler = (eachItemName) =>{
    setqueryText(eachItemName);
    setData(null);

  }
  
  return (
    <div className="App">
      <div className='appName'>Name Search
      <input type="text" className='searchBox'  onChange ={inputHandler} value = {queryText}></input>
      <div className='dataItems'>
        { queryText.length > 0 && data && (
          data.items.map((eachItem)=>{
          return (
            <p onClick={() => copyInputHandler(eachItem.name)} >{eachItem.name}</p>
          )
        }))

      } 
      </div>
    </div>
    </div>
  );
}

export default App;
