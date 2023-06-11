import React ,{useState} from 'react';
import styled from 'styled-components';
import {GiNotebook} from "react-icons/gi"
import { Link } from 'react-router-dom';

//end of importing.....




 function Panel2({handleChange}) {
//states---
  const[showNotePad , setShowNotePad] = useState(false);
  const [examData , setExamData] = useState({
       ques1:"",ques2:'',ques3:"",ques4:"",ques5:'',ques6:'',ques7:'',ques8:"",ques9:'',ques10:"",
       ques11:"",ques12:"" , ques13:""
  });
  const{ques1 , ques2 , ques3 , ques4 , ques5 , ques6 , ques7 , ques8 , ques9 , ques10 , ques11 , ques12 , ques13} = examData
                   const handleValueChange = (x) =>{
                        const Nmaes = x.target.name;
                        const Values = x.target.value;
                        setExamData({...examData,[Nmaes]:Values});
                        handleChange(examData)
                        // console.log(examData)
                   }
        


//main------------------------
    return (
    <Wrapper>
                  <div className="palne2_div1">
                              <h1>Chapter-1</h1>
                              <div className="btns">
                                   <Link to={"/Question_2"}><button>Next</button></Link>
                              </div>
                     </div>

               <div className="palne2_div2">
                           {showNotePad && ( <textarea name="textarea" id="textarea" cols="50" rows="4"></textarea>)}
                                    <div className="btn" onClick={() =>{setShowNotePad(!showNotePad)}}>
                                          {showNotePad ? <button> <i><GiNotebook /></i> Hide Notepad</button> : <button> <i><GiNotebook /></i> Show Notepad</button>}
                                          
                                    </div>
                 </div>

{/* adding questions via from--->  */}

               <form action="#" className="panel2_div3">
                         <div className="form_divsQuestions">
                                  <h3>Questions 1-5</h3>
                                  <h3>Which paragraph containsWhich paragraph contains Which: </h3> 
                                  
                                   <div className="questions">
                                              <h1  className='numberOfQuestion'>1</h1>
                                                <label htmlFor="ques1Label">
                                                      the main factor effecting rates :
                                                </label>
                                                <select name="ques1" value={ques1} id="ques1" onChange={handleValueChange}>
                                                      <option value="something11">something1</option>
                                                      <option value="something22">something2</option>
                                                      <option value="something33">something3</option>
                                                      <option value="something44">something4</option>
                                                </select>
                                   </div>

                                   <div className="questions">
                                             <h1  className='numberOfQuestion'>2</h1>
                                                <label htmlFor="ques1Label">
                                                       A picture of urban life taken over by nature : 
                                                </label>
                                                <select name="ques2" value={ques2} id="ques2" onChange={handleValueChange}>
                                                      <option value="something11">something1</option>
                                                      <option value="something22">something2</option>
                                                      <option value="something33">something3</option>
                                                      <option value="something44">something4</option>
                                                </select>
                                   </div>

                                   <div className="questions">
                                                  <h1  className='numberOfQuestion'>3</h1>
                                                <label htmlFor="ques1Label">
                                                       expriences of enviromental damage caused by humans : 
                                                </label>
                                                <select name="ques3" value={ques3} id="ques3" onChange={handleValueChange}>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                </select>
                                   </div>

                                   <div className="questions">
                                                 <h1  className='numberOfQuestion'>4</h1>
                                                <label htmlFor="ques1Label">
                                                       Positive result from a study : 
                                                </label>
                                                <select name="ques4"  value={ques4} id="ques4" onChange={handleValueChange}>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                </select>
                                   </div>

                                   <div className="questions">
                                               <h1  className='numberOfQuestion'>5</h1>
                                                <label htmlFor="ques1Label">
                                                      the kind of the information gathered from scientific records : 
                                                </label>
                                                <select name="ques5" value={ques5} id="ques5" onChange={handleValueChange}>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                </select>
                                   </div>
                         </div>


{/* adding Questions 6-9 */}

                  <div className="form_divsQuestions">
                              <h3>Question 6-9</h3> 
                              <h3>Write <span>NO MORE THAN TWO WORDS AND/OR A NUMBER </span> for each answer,</h3>              
                              <div className="questions">
                                               <h1  className='numberOfQuestion'>6</h1>
                                                <label htmlFor="ques1Label">
                                                      the kind of the information gathered from scientific records : 
                                                </label>
                                                <input type="text" name="ques6"  value={ques6} id="ques6" className='inputs' onChange={handleValueChange}/>
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>7</h1>
                                                <label htmlFor="ques1Label">
                                                      the kind of the information gathered from scientific records : 
                                                </label>
                                                <input type="text" name="ques7"  value={ques7}  id="ques7" className='inputs'  onChange={handleValueChange}/>
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>8</h1>
                                                <label htmlFor="ques1Label">
                                                      the kind of the information gathered from scientific records : 
                                                </label>
                                                <input type="text" name="ques8" value={ques8}  id="ques8" className='inputs'  onChange={handleValueChange}/>
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>9</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text" name="ques9" value={ques9}  id="ques9" className='inputs' onChange={handleValueChange} />
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>10</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text" name="ques10" value={ques10}  id="ques10" className='inputs' onChange={handleValueChange} />
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>11</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text" name="ques11" value={ques11}  id="ques11" className='inputs' onChange={handleValueChange} />
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>12</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text" name="ques12" value={ques12}  id="ques12" className='inputs' onChange={handleValueChange} />
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>13</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text" name="ques13" value={ques13}  id="ques13" className='inputs' onChange={handleValueChange} />
                                   </div>




                            
                  </div> 












               </form>

    </Wrapper>
  )
};




export default Panel2






// for styling this component via styled-compoennt--  
const Wrapper = styled.section`
padding:35px;

.palne2_div1{ 
   display:flex;
   justify-content:center;
   align-items:center;
   box-sizing:border-box;
    height:40px;
    width:370px;
    background:#d7e6dc;
       margin-left:auto;
            h1{
                  margin-left:10px;
                  font-size: 1.4rem;
                  color:black;
            }  
            .btns{
                  display:flex;
                  margin-left:auto;
                              button{
                                    width:70px;
                                    height:30px;
                                    margin-right:4px;
                                    background-color: blue;
                                    color: white;
                              }
            }
}


//panel2_div2--------
            .palne2_div2{
                  margin-top:5px;
            }      

            .btn{
                  width:130px;
                  display:flex;
                  justify-content:space-between;
                  align-items:center;
                  border-radius: 6px;
                        i{
                              font-size:1.3rem;
                        }
                  }
            }


//panel2_div3------form-styling--------
                 .panel2_div3{
                  padding-bottom:30px;
                       .form_divsQuestions{
                                    h3{
                                          margin-top:-1px;
                                    }
                              .questions{
                                      display:flex;
                                      margin-bottom:17px;
                                           .numberOfQuestion{
                                                text-align:center;
                                                box-sizing:border-box;
                                                padding-top:7px;
                                                color:black;
                                                font-size:.8rem;
                                                margin-top:-10px;
                                                margin-right:12px;
                                                width:30px;
                                                height:30px;
                                                border-radius:50%;
                                                background:aqua;
                                                           }
                                             input[type="text"]{
                                                margin-top: -14px;;
                                                width: 130px;
                                                height:20px;
                                                padding: 4px;
                                                border: 0;
                                                outline: 0;
                                                border-bottom: 2px solid green;
                                             }
                                            #panel2_divSelector1{
                                                 height:25px;
                                            }         

                                 }
                              
                       }
                 }

 



`

