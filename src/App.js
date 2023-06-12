import './App.css';
import Header from './Test/Header';
import Footer from './Test/Footer';
import Reading from "./reading";
import { useState } from 'react';
//end importing-------



function App() {
  const [handlePanelfontSize , sethandlePanelfontSize] = useState(20);
 //send all Userdata to Review Page which data got from all the panel form sections by examData---- 
              const [UserData , setUserdata] = useState({
                    ques1:"",ques2:'',ques3:"",ques4:"",ques5:'',ques6:'',ques7:'',ques8:"",ques9:'',ques10:"",
                    ques11:"",ques12:"" , ques13:"", ques14:"",ques15:'',ques16:"",ques17:"",ques18:'',ques19:'',
                    ques20:'',ques21:"",ques22:"",ques23:"", ques24:"",ques25:"" , ques26:"",
                    ques27:"",ques28:'',ques29:"",ques30:"",ques31:'',ques32:'',ques33:'',ques34:"",ques35:'',ques36:"",
                    ques37:"",ques38:"" , ques39:"",ques40:""
              });


//function for handle_Panel_Forms_Inputs---------------
                      const handleChange =(x) =>{   
                        const Names = x.target.name;
                        const Values = x.target.value
                              setUserdata((objs) =>{
                                  return {...objs ,[Names]: Values}
                              });
                          }

console.log(UserData)





//functions for Panels_FontSizes--------
          const handleIncressFontSize =() =>{
            sethandlePanelfontSize(handlePanelfontSize => handlePanelfontSize + 2)
          };
          const handleDecressFontSize =() =>{
            sethandlePanelfontSize(handlePanelfontSize => handlePanelfontSize - 2)
          }




//main rendering---              
      return (
            <div className="App">
                        <Header  handleDecressFontSize={handleDecressFontSize} handleIncressFontSize={handleIncressFontSize}/>
                              <header className="App-header" style={{fontSize:handlePanelfontSize}}>
                                <Reading handleChange={handleChange}/>
                            </header>
                        <Footer  UserData={UserData}/>
            </div>
      )
}

export default App;













