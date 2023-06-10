import './App.css';
import Header from './Test/Header';
import Footer from './Test/Footer';
import Reading from "./reading";
import { useState } from 'react';
//end importing-------



function App() {
  const [fontSize , setFontSize] = useState(20);
const[forChangeColor , setForChangeColor] = useState(null)
 //send all exam data to Review Page---- 
          const [UserData , setUserdata] = useState({});
                      const handleChange =(x) =>{
                            setUserdata(x);
                            setForChangeColor("green");
                          }


          

//functions for FontSize----setup
        const handleIncressFontSize =() =>{
            setFontSize(fontSize => fontSize + 2)
        };
        const handleDecressFontSize =() =>{
          setFontSize(fontSize => fontSize - 2)
        }




//main rendering---              
  return (
    <div className="App">
                 <Header  handleDecressFontSize={handleDecressFontSize} handleIncressFontSize={handleIncressFontSize}/>
                      <header className="App-header" style={{fontSize:fontSize}}>
                        <Reading handleChange={handleChange}/>
                    </header>
                <Footer  UserData={UserData} forChangeColor={forChangeColor}/>
    </div>
  )
}

export default App;













