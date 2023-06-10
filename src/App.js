import './App.css';
import Header from './Test/Header';
import Footer from './Test/Footer';
import Reading from "./reading";
import { useState } from 'react';
//end importing-------



function App() {
  const [fontSize , setFontSize] = useState(20);
 //send all exam data to Review Page---- 
          const [UserData , setUserdata] = useState({
            ques1:"",ques2:'',ques3:"",ques4:"",ques5:'',ques6:'',ques7:'',ques8:"",ques9:'',ques10:"",
            ques11:"",ques12:"" , ques13:"", ques14:"",ques15:'',ques16:"",ques17:"",ques18:'',ques19:'',
            ques20:'',ques21:"",ques22:"",ques23:"", ques24:"",ques25:"" , ques26:"",
            ques27:"",ques28:'',ques29:"",ques30:"",ques31:'',ques32:'',ques33:'',ques34:"",ques35:'',ques36:"",
            ques37:"",ques38:"" , ques39:"",ques40:""
          });

//function for handle inputs---------------
                      const handleChange =(x) =>{
                            setUserdata((objs) =>{
                                return {...objs , ...x}
                            });
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
                <Footer  UserData={UserData}/>
    </div>
  )
}

export default App;













