import {useState, useRef} from 'react'
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import Login from './Components/Login'
import './App.css';


function App() {
  
  const [user, setUser] = useState()
  
  return (

    <div className="App">
      {
        !user ?
        <Login setUser={(u)=>setUser(prevState=>u)}/>
        :
        <>
          <Header user={user}/>
          <Body user={user}/>
        </>
      }
      
    </div>
  );
}

export default App;
