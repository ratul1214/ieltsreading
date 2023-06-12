import React ,{useState} from 'react';
import "../TestAllStyles/Panel2All.css";
import {GiNotebook} from "react-icons/gi"
import { Link } from 'react-router-dom';

//end of importing.....




 function Panel2Q_3({handleChange }) {
  const[showNotePad , setShowNotePad] = useState(false);



//main--------------------------
     return (
    <section className='Panel2Section'>
                  <div className="palne2_div1">
                              <h1>Chapter-3</h1>
                              <div className="btns">
                                <Link to={"/Question_2"}><button>Previous</button></Link>
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
                                  <h3>Questions 30 - 40</h3>
                                  <h3>Which paragraph containsWhich paragraph contains Which: </h3> 
                                  
                                   <div className="questions">
                                              <h1  className='numberOfQuestion'>30</h1>
                                                <label htmlFor="ques1Label">
                                                      the main factor effecting rates :
                                                </label>
                                                <select name="ques30" id="ques30"  onChange={handleChange}>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                </select>
                                   </div>

                                   <div className="questions">
                                             <h1  className='numberOfQuestion'>31</h1>
                                                <label htmlFor="ques1Label">
                                                       A picture of urban life taken over by nature : 
                                                </label>
                                                <select name="ques31" id="ques31"  onChange={handleChange}>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                </select>
                                   </div>

                                   <div className="questions">
                                                  <h1  className='numberOfQuestion'>32</h1>
                                                <label htmlFor="ques1Label">
                                                       expriences of enviromental damage caused by humans : 
                                                </label>
                                                <select name="ques32" id="ques32"  onChange={handleChange}>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                </select>
                                   </div>

                                   <div className="questions">
                                                 <h1  className='numberOfQuestion'>33</h1>
                                                <label htmlFor="ques1Label">
                                                       Positive result from a study : 
                                                </label>
                                                <select name="ques33" id="ques33" onChange={handleChange}>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                      <option value="something">something</option>
                                                </select>
                                   </div>

                                   <div className="questions">
                                               <h1  className='numberOfQuestion'>34</h1>
                                                <label htmlFor="ques1Label">
                                                      the kind of the information gathered from scientific records : 
                                                </label>
                                                <select  name="ques34" id="ques34"  onChange={handleChange}>
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
                                               <h1  className='numberOfQuestion'>35</h1>
                                                <label htmlFor="ques1Label">
                                                      the kind of the information gathered from scientific records : 
                                                </label>
                                                <input type="text"  name="ques35" id="ques35"  className='inputs' onChange={handleChange}/>
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>36</h1>
                                                <label htmlFor="ques1Label">
                                                      the kind of the information gathered from scientific records : 
                                                </label>
                                                <input type="text"  name="ques36" id="ques36"  className='inputs' onChange={handleChange}/>
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>37</h1>
                                                <label htmlFor="ques1Label">
                                                      the kind of the information gathered from scientific records : 
                                                </label>
                                                <input type="text"  name="ques37" id="ques37"  className='inputs'  onChange={handleChange}/>
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>38</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text"   name="ques38" id="ques38"  className='inputs'  onChange={handleChange}/>
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>39</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text"   name="ques39" id="ques39"  className='inputs'  onChange={handleChange}/>
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>40</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text"  name="ques40" id="ques40"  className='inputs' onChange={handleChange} />
                                   </div>



                            
                  </div> 


               </form>

    </section>
  )
};




export default Panel2Q_3

