import React, { useState } from 'react';
import styled from 'styled-components';
import CounterDown from './CounterDown';
//Icons---
import {FaRegCalendarAlt} from "react-icons/fa";
import {FaRegEye} from "react-icons/fa";
import {BsRocketTakeoff} from "react-icons/bs";
import {BsChevronUp} from "react-icons/bs";
import {BiTime} from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";

// end importing


 function Footer() {
  const[toggleForFooter , setToggleForFootter] = useState(false);





  // for this component Css style----------
     const Wrapper = styled.section`
     line-height:0;
     height:auto;
     width:100%
     background:red;
     position:fixed;
     bottom:0;
     right:0;
     left:0;
     z-index: 100000;

       .div_1{
        height: 3.8rem;
        width:100%;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(3 , 1fr);
        justify-content: center;
        align-items: center;
        background: rgb(17, 22, 44);
        margin-bottom:-8px;
       

                  .icons{
                    font-size:1.2rem;
                  }
                      .div_colum{
                            color:#fff;
                            display:flex;
                      }
      
                  .left_btn{
                        margin-left:60px;
                        i{
                           padding-top:10px;
                           margin-right:15px;
                        }
                  }

                  .timer{
                      margin:auto;
                      i{
                        padding-top:17px;
                        margin-right:13px;
                      }
                      span{
                         font-size:1.4rem;
                      }
                  }

                  .right_btn{
                      .buttons{
                        padding-left:50px;
                        display:flex;
                                 .btn{
                                      width:90px;
                                      height:40px;
                                      margin:7px;
                                      font-size:1rem;
                                      display:flex;
                                      justify-content:center;
                                      align-items:center;

                                       i{
                                         margin-right:3px;
                                       }
                                  }
                      }  
                        .right_icon{
                          margin-left:auto;
                          margin-right:15px;
                          font-size:1.8rem;
                          font-weight: 500;
                        }    
                  }
                  
      
       }


//div_2_________

        .div_2{
             background-color: rgb(17, 22, 44);

                height:130px;
                display:flex;
                flex-wrap:wrap;
                padding:30px;
                box-sizing: border-box;
                transition: 0.3s all;

                   .div_2_divs{
                      width:27px;
                      height:27px;
                      margin:4px;
                      border-radius: 50%;
                      background: aqua;
                   }
        }



     `



//main-----------     
  return (
    <Wrapper>
             <div className="div_1">
                      <div className="left_btn div_colum">
                            <i className='icons'><FaRegCalendarAlt /></i>
                              <h2>Question Palette</h2>
                      </div>

                  <div className="timer div_colum">
                          <i className='icons'><BiTime /></i>
                          {/* for CountDown Timer */}
                            <span><CounterDown Second={3060}/></span>        
                  </div>

                  <div className="right_btn div_colum">
                                <div className="buttons">
                                      <button className='btn'><i><BsRocketTakeoff /> </i> Submit</button>
                                      <button className='btn'> <i><FaRegEye /></i> Review</button>
                                </div>
                                  <i className="right_icon icons" onClick={() =>{setToggleForFootter(!toggleForFooter)}}>
                                          {
                                            toggleForFooter ? <BsChevronUp /> : <AiOutlineDown />
                                          }
                                  </i>
                  </div>
             </div>


{/* for showing how much user done */}
             {
                toggleForFooter && (
                  <div className="div_2">
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
                  <div className="div_2_divs"></div>
           </div>
        )}




    </Wrapper>
  )
};




export default Footer
