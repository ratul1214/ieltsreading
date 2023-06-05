import React ,{useState} from 'react';
import styled from 'styled-components';
import {GiNotebook} from "react-icons/gi"
import { Link } from 'react-router-dom';

//end of importing.....




 function Panel2Q_2() {
  const[showNotePad , setShowNotePad] = useState(false)



// for styling this component via styled-compoennt--  
const Wrapper = styled.section`
padding:30px;

.palne2_div1{ 
   display:flex;
   justify-content:center;
   align-items:center;
   box-sizing:border-box;
    height:40px;
    width:370px;
    background:gray;
    margin-left:auto;
            h1{
                  margin-left:10px;
                  font-size: 1.4rem;
                  color:#fff;
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


//main--------------------------
    return (
    <Wrapper>
                  <div className="palne2_div1">
                              <h1>Chapter-2</h1>
                              <div className="btns">
                                   <Link to={"/"}><button>Previous</button></Link>
                                   <Link to={"/Question_3"}><button>Next</button></Link>
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
                                  <h3>Questions 13-26</h3>
                                  <h3>Which paragraph containsWhich paragraph contains Which: </h3> 
                                  
                                   <div className="questions">
                                              <h1  className='numberOfQuestion'>14</h1>
                                                <label htmlFor="ques1Label">
                                                      the main factor :
                                                </label>
                                                <select name="panel2_divSelector1" id="panel2_divSelector1">
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                </select>
                                   </div>

                                   <div className="questions">
                                             <h1  className='numberOfQuestion'>14</h1>
                                                <label htmlFor="ques1Label">
                                                       A picture of nature : 
                                                </label>
                                                <select name="panel2_divSelector1" id="panel2_divSelector1">
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                </select>
                                   </div>

                                   <div className="questions">
                                                  <h1  className='numberOfQuestion'>16</h1>
                                                <label htmlFor="ques1Label">
                                                       expriences of=humans : 
                                                </label>
                                                <select name="panel2_divSelector1" id="panel2_divSelector1">
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                </select>
                                   </div>

                                   <div className="questions">
                                                 <h1  className='numberOfQuestion'>17</h1>
                                                <label htmlFor="ques1Label">
                                                       Positive result from a study : 
                                                </label>
                                                <select name="panel2_divSelector1" id="panel2_divSelector1">
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                </select>
                                   </div>

                                   <div className="questions">
                                               <h1  className='numberOfQuestion'>18</h1>
                                                <label htmlFor="ques1Label">
                                                      the kind of the information gathered records : 
                                                </label>
                                                <select name="panel2_divSelector1" id="panel2_divSelector1">
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                </select>
                                   </div>
                         </div>


{/* adding Questions 6-9 */}

                  <div className="form_divsQuestions">
                              <h3>Question 19-22</h3> 
                              <h3>Write <span>NO MORE THAN TWO WORDS  </span> for each answer,</h3>              
                              <div className="questions">
                                               <h1  className='numberOfQuestion'>19</h1>
                                                <label htmlFor="ques1Label">
                                                      the kind of the informationscientific records : 
                                                </label>
                                                <input type="text" name="ques6" id="ques6" className='inputs'/>
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>20</h1>
                                                <label htmlFor="ques1Label">
                                                      the kind scientific records : 
                                                </label>
                                                <input type="text" name="ques6" id="ques6" className='inputs' />
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>21</h1>
                                                <label htmlFor="ques1Label">
                                                      the  scientific records : 
                                                </label>
                                                <input type="text" name="ques6" id="ques6" className='inputs'  />
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>22</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered  records : 
                                                </label>
                                                <input type="text" name="ques6" id="ques6" className='inputs'  />
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>23</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text" name="ques6" id="ques6" className='inputs'  />
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>24</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from  : 
                                                </label>
                                                <input type="text" name="ques6" id="ques6" className='inputs'  />
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>25</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text" name="ques6" id="ques6" className='inputs'  />
                                   </div>



                            
                  </div> 


{/* questions 10-13 numbers */}

                <div className="form_divsQuestions">
                        <h3>Question 25 -28</h3> 
                        <h3>Complete the summary with <strong>ONE WORD</strong> from the text.</h3>              
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'></h1>
                                                <label htmlFor="ques1Label">
                                                Ms Jones and Dr Schmitz believe  interested in preserving or returning : 
                                                </label>
                                                <input type="text" name="ques6" id="ques6" className='inputs'  />
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>11</h1>
                                                <label htmlFor="ques1Label">
                                                to a present-heir original: 
                                                </label>
                                                <input type="text" name="ques6" id="ques6" className='inputs'  />
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>12</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gatheredrecords : 
                                                </label>
                                                <input type="text" name="ques6" id="ques6" className='inputs'  />
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>13</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from : 
                                                </label>
                                                <input type="text" name="ques6" id="ques6" className='inputs'  />
                                   </div>         
 



                </div>










               </form>

    </Wrapper>
  )
};




export default Panel2Q_2