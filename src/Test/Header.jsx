import React, { useState } from 'react';
// import {BrowserRouter, Route, Routes} from "react-router";
import { AiOutlineDown } from "react-icons/ai";
import styled from 'styled-components';

//icons---
import {BsShare } from "react-icons/bs";
import {BsSortAlphaDown } from "react-icons/bs";
import {BsFillExclamationTriangleFill } from "react-icons/bs";
import {  FaDownload } from "react-icons/fa";
import {FaQuestionCircle} from "react-icons/fa";
import {BsFillCloudHaze2Fill} from "react-icons/bs";
import {TbArrowBigLeftLinesFilled} from "react-icons/tb";
import {BsCalendar3} from "react-icons/bs";
import {AiOutlineEye} from "react-icons/ai";
import {BsFillCheckSquareFill} from "react-icons/bs"
import {MdSettingsVoice} from "react-icons/md";
import {BsChevronUp} from "react-icons/bs"
// end of Importing.....



 function Header() {
  const [toggleTestInfo , setToggleTestInfo] = useState(false);



// using the stylend-component for Css -Styling.....
  const Wrapper = styled.section`
       line-height:0;

  .first_row{
    padding:10px;
    display:grid;
    margin-right:50px;
  grid-template-columns: auto auto auto auto;
  grid-column-gap:1rem;
  justify-content: space-evenly;
  align-items: center;
  z-index:1;
  background:#fff;

        .divs_1{
            display:grid;
            grid-template-columns: auto auto;
            grid-column-gap:12px;
            margin-right:-20px;
                .div_1{
                  width:120px;
                  height:120px;
                  background: navy;
                  color: white;
                  box-sizing:border-box;
                  overflow:hidden;
                  text-align:center;
                  line-height: 14px;
                  border-radius:7px;
                      h1{
                         font-size:2.2rem;
                      }
                        p{
                          margin-top:-14px;
                          font-size:.8rem;
                          text-decoration:underline;
                          
                        }
                }
                .div_2{
                  line-height: 13px;
                  .sub{
                     line-height:-0;
                       letter-spacing: 2px;;
                       p{
                        padding-top:10px;
                       }
                  }
                }
           }

      }

// -----
          .divs_2{
            color:black;
            margin-right:-20px;
               .sub_1{
                display: flex;
                column-gap:13px;
                      i{
                        font-size:1.4rem;
                        padding-top:2px;
                      }

               }
               .sub_2{
                display: flex;
                column-gap:13px;
                    i{
                      font-size:1.4rem;
                      padding-top:2px;
                    }
                    p{
                      padding-top:5px;
                    }
               }
               .sub_3{
                display: flex;
                column-gap:13px;
                    i{
                      font-size:1.4rem;
                      padding-top:2px;
                    }
                    p{
                      padding-top:5px;
                    }
               }
          }
// ------
          .divs_3{
            text-align:center;
            line-height:22px;
            margin-right:-20px;
                 i{
                  font-size:4.4rem;
                  color : blue;

                 }
                 p{
                  font-style: italic;
                 }
          }

          .divs_4{
            line-height:2.6rem;
            font-size:3rem;
            color:skyblue;
                span{
                  font-size:4rem;
                }
          }











// secont---row------------
        .second_row { 
                height:47px;
                  display:flex;
                  justify-content:center;
                  align-items:center;
                  column-gap:3rem;
                font-size:1.3rem;
                border-bottom: 2px solid gray; 
           }
            .toggleMenu{
              display:flex;
              gap:7px;
              
                  h3{
                    font-size:20px;
                  }
                  
            }
            .menuIcon{
              margin-top:3px;
            }
              .icons-manu{
                margin-right:15px;
              }
        .icons{
            display:flex;
            gap:4rem;
            li{
               list-style:none;
                a{
                  text-decoration:none;
                  color:black;

                }
            }
        }

        .logo-for-header{
          line-height:12px;
             font-size:1.3rem;
             color:skyblue;
          span{
            font-size:3rem;
            padding-left:3px;
            margin-bottom:4rem;
          }
        }
  `






// main sector--------------
  return (
    <Wrapper>
                        {/* for-toggle-section    */}
                        { toggleTestInfo && (<div className="first_row">

                              <div className="divs_1">
                                              <div className="div_1">
                                                      <h1>IELTS</h1>
                                                      <p>AC Reading..</p>
                                                      <h3>Volume 3</h3>
                                              </div>
                                          <div className="div_2">
                                                <div className="sub">
                                                      <h3>IELTS Academic Test With</h3>
                                                        <h4>Answer (Vol 3) </h4>
                                                </div>
                                                <div className="sub">
                                                    <p>4.00 ** (12 votes)</p>
                                                </div>

                                          </div>
                                      </div>

                                      <div className="divs_2">
                                                  <div className="sub_1">
                                                        <i><BsCalendar3 /></i>
                                                        <p>Published on : 23 feb 2020</p>
                                                  </div>
                                                  <div className="sub_2">
                                                      <i><AiOutlineEye /></i>
                                                      <p>Views : 36437</p>
                                                  </div>
                                                  <div className="sub_3">
                                                      <i><BsFillCheckSquareFill /></i>
                                                      <p>Test Taken : 4774</p>
                                                  </div>


                                      </div>



                                      <div className="divs_3">
                                            <i><MdSettingsVoice /></i>
                                            <p>LISTENING PRACTICE TEST 1</p>
                                      </div>

                                     <div className="divs_4">
                                           <h3>IELTS <br /> <span>.</span> LIve</h3>
                                     </div>
 


                                </div>
                )};
{/* second_row ------------*/}
                  <div className="second_row">
                  <div className="toggleMenu">
                          <i className='menuIcon' onClick={() =>{setToggleTestInfo(!toggleTestInfo)}}>
                                   {
                                     toggleTestInfo ? <AiOutlineDown /> : <BsChevronUp />
                                   }
                          </i>
                          <h3>Show Test Inf.</h3>
                    </div>

                      <div className="icons-manu">
                          <ul className='icons'>
                                  <li className='icon'>
                                      <a href="#"><BsShare /></a>
                                  </li>
                                  <li className='icon'>
                                      <a href="#"><BsFillExclamationTriangleFill /></a>
                                  </li>
                                  <li className='icon'>
                                      <a href="#"><BsSortAlphaDown /></a>
                                  </li>
                                  <li className='icon'>
                                      <a href="#"><FaDownload /></a>
                                  </li>
                                  <li className='icon'>
                                      <a href="#"><FaQuestionCircle /></a>
                                  </li>
                                  <li className='icon'>
                                      <a href="#"><BsFillCloudHaze2Fill /></a>
                                  </li>
                                  <li className='icon'>
                                      <a href="#"><TbArrowBigLeftLinesFilled /></a>
                                  </li>
                    </ul>
                      </div>
                      
                           {
                             toggleTestInfo ? "" : (<div className="logo-for-header"><h3>IELTS <br /> <span>.</span> LIve</h3>
                       </div>)
                           }
                  </div>  
          
        </Wrapper>
      )
};







export default Header
