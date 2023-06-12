import React  from 'react';
import "../TestAllStyles/Preview.css";
// end of the importing..



function Preview({UserData , handleReviewPage}) {
  return (
      <section className='PreviewSection'>
                  <div className="ReviewDiv1">
                        <h1 className='nameReview'>Review</h1>
                  </div>
  
              <div className="ReviewDiv2">
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
  
                  <div className="ReviewDiv3">
                      <button onClick={handleReviewPage}>Close</button>
                  </div>
  
      </section>
  )
};



export default Preview
