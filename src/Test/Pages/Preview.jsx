import React from 'react';
import styled from 'styled-components';
// end of the importing..




function Preview() {



  const Wrapper = styled.section`
        height: 480px;
        width: 800px;
        background-color:#fff;
        border: 1px solid green;
        position: fixed;
        top: 20px;
        left:20%;
        box-sizing: border-box;
        z-index:10000 ;
        transition: 0.5s all ease-in-out;

      .div_1{
                width:100%;
                padding:20px;
                border:none;
                background-color:#fff; 
                 opacity: 0.7;
                border-bottom: .8px solid gray;
                display:flex;
                justify-content: space-between; 
                align-items: center; 
                        .nameReview{
                          font-size:1.6rem;
                        }
            }
        .div_2{
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

             }
        }

        .div_3{
           width:100px;
           height:auto;
           padding:10px;
           margin-left:auto;
              button{
                 width:100px;
                 padding:10px;
                 
                
              }
           
        }


  `





  return (
      <Wrapper>
            <div className="div_1">
                  <h1 className='nameReview'>Review</h1>
                   <h1 className='strong'><strong>X</strong></h1>
            </div>

            <div className="div_2">
                   <div className="div">Q1:</div>
                   <div className="div">Q2:</div>
                   <div className="div">Q3:</div>
                   <div className="div">Q4:</div>
                   <div className="div">Q5:</div>
                   <div className="div">Q6:</div>
                   <div className="div">Q7:</div>
                   <div className="div">Q8:</div>
                   <div className="div">Q9:</div>
                   <div className="div">Q10:</div>
                   <div className="div">Q11:</div>
                   <div className="div">Q12:</div>
                   <div className="div">Q13:</div>
                   <div className="div">Q14:</div>
                   <div className="div">Q15:</div>
                   <div className="div">Q16</div>
                   <div className="div">Q17:</div>
                   <div className="div">Q18:</div>
                   <div className="div">Q19:</div>
                   <div className="div">Q20:</div>
                   <div className="div">Q21:</div>
                   <div className="div">Q22:</div>
                   <div className="div">Q23:</div>
                   <div className="div">Q24:</div>
                   <div className="div">Q25:</div>
                   <div className="div">Q26:</div>
                   <div className="div">Q27:</div>
                   <div className="div">Q28:</div>
                   <div className="div">Q29:</div>
                   <div className="div">Q30:</div>
                   <div className="div">Q31:</div>
                   <div className="div">Q32:</div>
                   <div className="div">Q33:</div>
                   <div className="div">Q34:</div>
                   <div className="div">Q35:</div>
                   <div className="div">Q36:</div>
                   <div className="div">Q37:</div>
                   <div className="div">Q38:</div>
                   <div className="div">Q39:</div>
                   <div className="div">Q40:</div>
            </div>

<div className="div_3">
    <button>Close</button>
</div>


      </Wrapper>
  )
};



export default Preview