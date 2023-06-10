import React, { useState } from 'react';
import styled from 'styled-components';
// end of the importing..




function Preview({UserData , handleReviewPage}) {
     const[CloseReview , setCloseReview] = useState(true);
  return (
      <Wrapper>
              <div className="ReviewContainer">
                  <div className="Review_div_1">
                        <h1 className='nameReview'>Review</h1>
                  </div>
  
              <div className="Review_div_2">
                     <div className="div">Q1: {UserData.ques1}</div>
                     <div className="div">Q2:{UserData.ques2}</div>
                     <div className="div">Q3:{UserData.ques3}</div>
                     <div className="div">Q4: {UserData.ques4}</div>
                     <div className="div">Q5: {UserData.ques5}</div>
                     <div className="div">Q6:{UserData.ques6}</div>
                     <div className="div">Q7: {UserData.ques7}</div>
                     <div className="div">Q8:{UserData.ques8}</div>
                     <div className="div">Q9: {UserData.ques9}</div>
                     <div className="div">Q10: {UserData.ques10}</div>
                     <div className="div">Q11: {UserData.ques11}</div>
                     <div className="div">Q12: {UserData.ques12}</div>
                     <div className="div">Q13: {UserData.ques13}</div>

                     <div className="div">Q14: {UserData.ques14}</div>
                     <div className="div">Q15:{UserData.ques15}</div>
                     <div className="div">Q16:{UserData.ques16}</div>
                     <div className="div">Q17: {UserData.ques17}</div>
                     <div className="div">Q18: {UserData.ques18}</div>
                     <div className="div">Q19:{UserData.ques19}</div>
                     <div className="div">Q20: {UserData.ques20}</div>
                     <div className="div">Q21:{UserData.ques21}</div>
                     <div className="div">Q22: {UserData.ques22}</div>
                     <div className="div">Q23: {UserData.ques23}</div>
                     <div className="div">Q24: {UserData.ques24}</div>
                     <div className="div">Q24: {UserData.ques25}</div>
                     <div className="div">Q25: {UserData.ques25}</div>
                     <div className="div">Q26: {UserData.ques26}</div>
                     <div className="div">Q27: {UserData.ques27}</div>
                     <div className="div">Q28: {UserData.ques28}</div>
                     <div className="div">Q29: {UserData.ques29}</div>

                     <div className="div">Q30: {UserData.ques30}</div>
                     <div className="div">Q31: {UserData.ques31}</div>
                     <div className="div">Q32: {UserData.ques32}</div>
                     <div className="div">Q33: {UserData.ques33}</div>
                     <div className="div">Q34: {UserData.ques34}</div>
                     <div className="div">Q35: {UserData.ques35}</div>
                     <div className="div">Q36: {UserData.ques36}</div>
                     <div className="div">Q37: {UserData.ques37}</div>
                     <div className="div">Q38: {UserData.ques38}</div>
                     <div className="div">Q39: {UserData.ques39}</div>
                     <div className="div">Q40: {UserData.ques40}</div>

  
              </div>
  
              <div className="div_3">
                  <button onClick={handleReviewPage}>Close</button>
              </div>
  
              </div>
  
      </Wrapper>
  )
};



export default Preview



//for styling this component.....
  

const Wrapper = styled.section`
.ReviewContainer {
    height:520px;
   width: 800px;
   border: 1px solid green;
   position: fixed;
   background:white;
   top: 20px;
   border-radius: 10px;
   left:20%;
   box-sizing: border-box;
   transition: 0.5s all ease-in-out;
}
 .Review_div_1{
           width:100%;
           border:none;
           background-color:#fff; 
            opacity: 0.7;
           border-bottom: .8px solid gray;
                   .nameReview{
                     font-size:2rem;
                     padding-left:14px;
                   }
       }
   .Review_div_2{
     height:auto;
     background:#fff;
     box-sizing: border-box;
     padding:20px;
     display: grid;
     grid-template-columns: repeat(4 , 1fr);
     grid-gap: 0;
     opacity: 0.7;
     border-bottom: .8px solid gray;
        .div{
         width: 180px;
         height: 32px;
         border: 1px solid gray;
         display:flex;
         padding:5px;
         box-sizing: border-box;
         justify-content: start;
         align-items: center;
         font-weight: 700;

        }
   }

   .div_3{
      width:100px;
      padding:10px;
      margin-left:auto;
         button{
            width:100px;
            padding:10px;
            border-radius: 4px;
            
           
         }
         button:hover{
           background-color: rgb(127, 197, 165);
           border-radius: 4px;
       }
      
   }


`


