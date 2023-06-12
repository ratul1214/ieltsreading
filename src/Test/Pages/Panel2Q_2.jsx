import React ,{useState} from 'react';
import "../TestAllStyles/Panel2All.css";
import {GiNotebook} from "react-icons/gi"
import { Link } from 'react-router-dom';
//end of importing.....




 function Panel2Q_2({handleChange}) {
  const[showNotePad , setShowNotePad] = useState(false);





//main--------------------------
    return (
    <section className='Panel2Section'>
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
                                                <select name="ques14"  id="ques14"  onChange={handleChange}>
                                                      <option value="something1">something</option>
                                                      <option value="something2">something</option>
                                                      <option value="something3">something</option>
                                                      <option value="something4">something</option>
                                                </select>
                                   </div>

                                   <div className="questions">
                                             <h1  className='numberOfQuestion'>15</h1>
                                                <label htmlFor="ques1Label">
                                                       A picture of nature : 
                                                </label>
                                                <select name="ques15"  id="ques15"   onChange={handleChange}>
                                                      <option value="something1">something</option>
                                                      <option value="something2">something</option>
                                                      <option value="something3">something</option>
                                                      <option value="something4">something</option>
                                                </select>
                                   </div>

                                   <div className="questions">
                                                  <h1  className='numberOfQuestion'>16</h1>
                                                <label htmlFor="ques1Label">
                                                       expriences of=humans : 
                                                </label>
                                                <select name="ques16"  id="ques16"  onChange={handleChange}>
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
                                                <select name="ques17"  id="ques17"  onChange={handleChange}>
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
                                                <select name="ques18"  id="ques18"  onChange={handleChange}>
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
                                                <input type="text"name="ques19"  id="ques19"  className='inputs' onChange={handleChange}/>
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>20</h1>
                                                <label htmlFor="ques1Label">
                                                      the kind scientific records : 
                                                </label>
                                                <input type="text" name="ques20"  id="ques20"  className='inputs'  onChange={handleChange}/>
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>21</h1>
                                                <label htmlFor="ques1Label">
                                                      the  scientific records : 
                                                </label>
                                                <input type="text" name="ques21"  id="ques21"   className='inputs'  onChange={handleChange}/>
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>22</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered  records : 
                                                </label>
                                                <input type="text" name="ques22"  id="ques22"  className='inputs'   onChange={handleChange} />
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>23</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text" name="ques23"  id="ques23"  className='inputs' onChange={handleChange} />
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>24</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from  : 
                                                </label>
                                                <input type="text" name="ques24"  id="ques24" className='inputs'  onChange={handleChange}/>
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>25</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text" name="ques25"  id="ques25"    className='inputs'  onChange={handleChange}/>
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>26</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text" name="ques26"  id="ques26"   className='inputs'  onChange={handleChange}/>
                                   </div>


                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>27</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text" name="ques27"  id="ques27"  className='inputs'  onChange={handleChange}/>
                                   </div>

                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>28</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text"name="ques28"  id="ques28"  className='inputs'  onChange={handleChange}/>
                                   </div>


                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>29</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text" name="ques29"  id="ques29"   className='inputs'  onChange={handleChange}/>
                                   </div>


                            
                  </div> 

               </form>

    </section>
  )
};




export default Panel2Q_2






