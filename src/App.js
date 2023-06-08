import './App.css';
import Header from './Test/Header';
import Footer from './Test/Footer';
import Reading from "./reading";
import { useState } from 'react';
//end importing-------



function App() {
// const[forChangeColor , setForChangeColor] = useState()
 //send all exam data to Review Page---- 
          const [UserData , setUserdata] = useState({});
                      const handleChange =(x) =>{
                            setUserdata(x);
                            // setForChangeColor("blue");
                        }


          
//main rendering---              
  return (
    <div className="App">
                 <Header />
                      <header className="App-header">
                        <Reading handleChange={handleChange}/>
                    </header>
                <Footer  UserData={UserData} />
    </div>
  )
}

export default App;







