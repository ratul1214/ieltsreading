import React from 'react';
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
// end of Importing.....




 function HeaderSection() {
// main sector--------------
return (
    <Wrapper>
          <div className="first_row">

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
                            <div className="Sub_1">
                                  <i><BsCalendar3 /></i>
                                  <p>Published on : 23 feb 2020</p>
                            </div>
                            <div className="sub_2">
                                <i><BsCalendar3 /></i>
                                <p>Published on : 23 feb 2020</p>
                            </div>
                            <div className="sub_3">
                                <i><BsCalendar3 /></i>
                                <p>Published on : 23 feb 2020</p>
                            </div>


                </div>



                <div className="divs_3"><h1>Div_3</h1></div>
          </div>

{/* second_row */}
          <div className="second_row">
          <div className="toggleMenu">
                  <i className='menuIcon'><AiOutlineDown /></i>
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
              
            <div className="logo-for-header">
                  <h3>IELTS <br /> <span>.</span> LIve</h3>
            </div>
          </div>  
          
        </Wrapper>
      )
};






export default HeaderSection;











// using the stylend-component for Css -Styling.....
const Wrapper = styled.section`

.first_row{
  background-color:red;
  padding:20px;
  display:grid;
grid-template-columns: auto auto auto;
grid-column-gap:20px;
justify-content: center;
align-items: center;

      .divs_1{
          display:grid;
          grid-template-columns: auto auto;
          grid-column-gap:12px;
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
                      color:yellow;
                     }
                }
              }
      }

}

// -----
        .divs_2{
          background:gray;
          width:auto;
              .sub_1{
                display:grid;
                grid-template-column:auto auto;
              }
        }




         .second_row { 
          height:80px;
          background-color:gray;
            display:flex;
            justify-content:center;
            align-items:center;
            gap:3rem;
          font-size:1.5rem;
         }
          .toggleMenu{
            display:flex;
            gap:7px;
                h3{
                  font-size:20px;
                }
                
          }
          .menuIcon{
            margin-top:18px;
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
        line-height:10px;
        span{
          font-size:4rem;
          margin-left:3px;
        }
      }
`














