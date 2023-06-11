import React ,{useState} from 'react';
import styled from 'styled-components';
import {GiNotebook} from "react-icons/gi"
import { Link } from 'react-router-dom';

//end of importing.....




 function Panel2Q_3({handleChange }) {
  const[showNotePad , setShowNotePad] = useState(false);

  const [examData3 , setExamData] = useState({
      ques30:"",ques31:'',ques32:"",ques33:"",ques34:'',ques35:'',ques36:'',ques37:"",ques38:'',ques39:"",
      ques40:""
 });
 const{ques30,ques31,ques32,ques33,ques34,ques35,ques36,ques37,ques38,ques39,ques40} = examData3
                  const handleValueChange = (x) =>{
                       const Nmaes = x.target.name;
                       const Values = x.target.value;
                       setExamData({...examData3,[Nmaes]:Values});
                       handleChange(examData3)
                       // console.log(examData)
                  }













//main--------------------------
     return (
    <Wrapper>
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
                                                <select name="ques30" id="ques30" value={ques30} onChange={handleValueChange}>
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
                                                <select name="ques31" id="ques31" value={ques31} onChange={handleValueChange}>
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
                                                <select name="ques32" id="ques32" value={ques32} onChange={handleValueChange}>
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
                                                <select name="ques33" id="ques33" value={ques33} onChange={handleValueChange}>
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
                                                <select  name="ques34" id="ques34" value={ques34} onChange={handleValueChange}>
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
                                                <input type="text"  name="ques35" id="ques35" value={ques35} className='inputs' onChange={handleValueChange}/>
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>36</h1>
                                                <label htmlFor="ques1Label">
                                                      the kind of the information gathered from scientific records : 
                                                </label>
                                                <input type="text"  name="ques36" id="ques36" value={ques36} className='inputs' onChange={handleValueChange}/>
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>37</h1>
                                                <label htmlFor="ques1Label">
                                                      the kind of the information gathered from scientific records : 
                                                </label>
                                                <input type="text"  name="ques37" id="ques37" value={ques37} className='inputs'  onChange={handleValueChange}/>
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>38</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text"   name="ques38" id="ques38" value={ques38} className='inputs'  onChange={handleValueChange}/>
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>39</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text"   name="ques39" id="ques39" value={ques39} className='inputs'  onChange={handleValueChange}/>
                                   </div>
                                   <div className="questions">
                                                <h1  className='numberOfQuestion'>40</h1>
                                                <label htmlFor="ques1Label">
                                                     ation gathered from scientific records : 
                                                </label>
                                                <input type="text"  name="ques40" id="ques40" value={ques40} className='inputs' onChange={handleValueChange} />
                                   </div>



                            
                  </div> 


               </form>

    </Wrapper>
  )
};




export default Panel2Q_3



// for styling-----
   


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
