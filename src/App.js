import './App.css';
import Header from './Test/Header';
import Footer from './Test/Footer';
import Reading from "./reading";
import { useState } from 'react';
// import forFooter from "./ForTesting/forFooter";
// import Index from './ForTesting/Index';
// end of Importing


var ExamData = {};
function App() {
const[User , setUusers] = useState({
     Q1:"",Q2:"",Q3:"",Q4:"",Q5:"",Q6:'',
     Q7:"",Q8:"",Q9:"",Q10:"",Q11:"",Q12:'',
     Q13:"",Q14:"",Q15:"",Q16:"",Q17:"",Q18:'',
     Q19:"",Q20:"",Q21:"",Q22:"",Q23:"",Q24:'',
     Q25:"",Q26:"",Q27:"",Q28:"",Q29:"",Q30:'',
     Q31:"",Q32:"",Q33:"",Q34:"",Q35:"",Q36:'',
     Q37:"",Q38:"",Q39:"",Q40:""
});

// for passing the form Values 
          const handleValueChangeforReading =(x) =>{
              const Values = x.target.value;
              console.log(Values);
              //  setUusers((Previous) =>{
              //    return {...Previous,[x.target.name] : x.target.value}
              //  })
          }








  return (
    <div className="App">
              
         <Header />
                <header className="App-header">
                  <Reading handleValueChangeforReading={handleValueChangeforReading} User={User}/>
              </header>
  {/* for passign the collected values to footer...           */}
                <Footer handleValueChangeforReading={handleValueChangeforReading}/>  
    </div>
  )
}

export default App;







