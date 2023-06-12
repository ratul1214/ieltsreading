import React ,{useState} from 'react';
import "./Test_All_Styles/Panel2_All.css";
import {GiNotebook} from "react-icons/gi"
import { Link } from 'react-router-dom';

//end of importing.....




 function Panel2({handleChange}) {
//states---
  const[showNotePad , setShowNotePad] = useState(false);




  

//main------------------------
    return (
    <section className='Panel2Section'>
                  <div className="palne2_div1">
                              <h1>Chapter-1</h1>
                              <div className="btns">
                                   <Link to={"/Question_2"}><button>Next</button></Link>
                              </div>
                     </div>

               <div className="palne2_div2">
                          {/* show & hide the nodepan by cliking those icons    */}
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
                                                <select name="ques1" id="ques1" onChange={handleChange}>
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
                                                <select name="ques2" id="ques2" onChange={handleChange}>
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
                                                <select name="ques3" id="ques3" onChange={handleChange}>
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
                                                <select name="ques4"   id="ques4" onChange={handleChange}>
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
                                                <select name="ques5"  id="ques5" onChange={handleChange}>
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
                                                <input type="text" name="ques6"   id="ques6" className='inputs' onChange={handleChange}/>
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>7</h1>
                                                <label htmlFor="ques1Label">
                                                      the kind of the information gathered from scientific records : 
                                                </label>
                                                <input type="text" name="ques7"    id="ques7" className='inputs'  onChange={handleChange}/>
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>8</h1>
                                                <label htmlFor="ques1Label">
                                                      the kind of the information gathered from scientific records : 
                                                </label>
                                                <input type="text" name="ques8"  id="ques8" className='inputs'  onChange={handleChange}/>
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>9</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text" name="ques9"   id="ques9" className='inputs' onChange={handleChange} />
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>10</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text" name="ques10"  id="ques10" className='inputs' onChange={handleChange} />
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>11</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text" name="ques11" id="ques11" className='inputs' onChange={handleChange} />
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>12</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text" name="ques12"   id="ques12" className='inputs' onChange={handleChange} />
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>13</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text" name="ques13"   id="ques13" className='inputs' onChange={handleChange} />
                                   </div>




                            
                  </div> 




       </form>

    </section>
  )
};




export default Panel2






// // for styling this component via styled-compoennt--  
// const Wrapper = styled.section`



// //panel2_div3------form-styling--------
//                  .panel2_div3{
                  
//                        .form_divsQuestions{
//                                     h3{
                                          
//                                     }
//                               .questions{
                                 
//                                            .numberOfQuestion{
 
//                                                            }
//                                              input[type="text"]{
  
//                                              }
//                                             #panel2_divSelector1{
//                                                  height:25px;
//                                             }         

//                                  }
                              
//                        }
//                  }

 




