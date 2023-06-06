import React from 'react';
import "./Index.css";
import { useState } from 'react';



export default function Index() {
const[color , setColor] = useState("");
 
          return(
              <div>
                <div className="div" style={{background:color}}></div>
                <input type="text" value={color} onChange={(x) =>setColor(x.target.value)}/>

              </div>
          )
}








// const[user , setUsers] = useState({
//     Q1:"",
//     Q2:"",
//     Q3:"",
//     Q4:""
// });
// const {Q1 , Q2 , Q3 , Q4} = user;




// const handleChnage =(x) =>{
//      const name = x.target.name;
//      const value  = x.target.value;
//          setUsers((preValues) =>{
//             return {...preValues,[name] : value}
//          })
// }


// const handleSubmit =(x) =>{
//     x.preventDefault();
      

// };











// return (
//   <div>
//       <form action="#" onSubmit={handleSubmit}>
//             <div className="divs">
//                 <label htmlFor="options">some optiong</label>
//                 <select name="Q1" id="Q1" onChange={handleChnage}>
//                    <option value="Answers1">Q_1</option>
//                    <option value="Answers2">Q_2</option>
//                    <option value="Answers3">Q_3</option>
//                    <option value="Answer4">Q_4</option>
//                 </select> <br /> <br />
//                 <label htmlFor="options">some optiong_2</label>
//                 <select name="Q2" id="Q2" onChange={handleChnage}>
//                    <option value="Answers1">Q_1</option>
//                    <option value="Answers2">Q_2</option>
//                    <option value="Answers3">Q_3</option>
//                    <option value="Answer4">Q_4</option>
//                 </select> 
//                 <label htmlFor="options">some optiong</label>
//                 <select name="Q3" id="Q3" onChange={handleChnage}>
//                    <option value="Answers1">Q_1</option>
//                    <option value="Answers2">Q_2</option>
//                    <option value="Answers3">Q_3</option>
//                    <option value="Answer4">Q_4</option>
//                 </select> <br /> <br />                
//                 <label htmlFor="options">some optiong</label>
//                 <select name="Q4" id="Q4" onChange={handleChnage}>
//                    <option value="Answers1">Q_1</option>
//                    <option value="Answers2">Q_2</option>
//                    <option value="Answers3">Q_3</option>
//                    <option value="Answer4">Q_4</option>
//                 </select> <br /> <br />
//             </div>
//             <button type='submit'>Click</button>
//       </form>



// {/* // changeable value--------- */}



// <div className="divs2">
//      <div className="div"></div>
//      <div className="div"></div>
//      <div className="div"></div>
//      <div className="div"></div>
//      <div className="div"></div>
// </div>













//   </div>
// )