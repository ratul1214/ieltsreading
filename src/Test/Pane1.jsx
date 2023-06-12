import React from 'react';
import Styled from "styled-components"







 function Panel1() {
       
  return (
        <Wrapper>
                    <div className="panel_div_1">
                         <h4>Reading Passages 1</h4>
                            <h4>Question : 1-13</h4>
                            <h4>Ecosystem Can Fight Back</h4>
                    </div>
                    <div className="panel_div_2">
                           <p><span>A</span> ipsum dolor sit amet consectetur adipisicing elit. Officiis eius totam, voluptatum quasi sit eaque adipisci culpa, voluptatibus molestiae consequatur ea nam quas iste amet explicabo. Amet excepturi ab doloremque accusamus ipsam ullam cupiditate. Sequi animi, culpa adipisci laboriosam fugiat laudantium molestiae voluptates, illo ipsum sit magni suscipit quisquam illum  optio assumenda nostrum quas sunt?</p>

                           <p><span>B</span> ipsum dolor sit amet consectetur adipisicing elit. Officiis eius totam, voluptatum quasi sit eaque adipisci culpa, voluptatibus molestiae consequatur ea nam quas iste amet explicabo. Amet excepturi ab doloremque accusamus ipsam ullam cupiditate. Sequi animi, culpa adipisci laboriosam fugiat laudantium molestiae voluptates, illo ipsum sit magni suscipit quisquam illum optio assumenda nostrum quas sunt?</p>

                           <p><span>C</span> ipsum dolor sit amet consectetur adipisicing elit. Officiis eius totam, voluptatum quasi sit eaque adipisci culpa, voluptatibus molestiae consequatur ea nam quas iste amet explicabo. Amet excepturi ab doloremque accusamus ipsam ullam cupiditate. Sequi animi, culpa adipisci laboriosam fugiat laudantium molestiae voluptates, illo ipsum sit magni suscipit quisquam illum delectus vero  pariatur eos quia. Accusantium adipisci quidem placeat optio assumenda nostrum quas sunt?</p>
                           <p><span>A</span> ipsum dolor sit amet consectetur adipisicing elit. Officiis eius totam, voluptatum quasi sit eaque adipisci culpa, voluptatibus molestiae consequatur ea nam quas iste amet explicabo. Amet excepturi ab doloremque accusamus ipsam ullam cupiditate. Sequi animi, culpa adipisci laboriosam fugiat laudantium molestiae voluptates, illo ipsum sit magni suscipit quisquam illum  optio assumenda nostrum quas sunt?</p>

                           <p><span>B</span> ipsum dolor sit amet consectetur adipisicing elit. Officiis eius totam, voluptatum quasi sit eaque adipisci culpa, voluptatibus molestiae consequatur ea nam quas iste amet explicabo. Amet excepturi ab doloremque accusamus ipsam ullam cupiditate. Sequi animi, culpa adipisci laboriosam fugiat laudantium molestiae voluptates, illo ipsum sit magni suscipit quisquam illum optio assumenda nostrum quas sunt?</p>

                           <p className='lastArticle'><span>C</span> ipsum dolor sit amet consectetur adipisicing elit. Officiis eius totam, voluptatum quasi sit eaque adipisci culpa, voluptatibus molestiae consequatur ea nam quas iste amet explicabo. Amet excepturi ab doloremque accusamus ipsam ullam cupiditate. Sequi animi, culpa adipisci laboriosam fugiat laudantium molestiae voluptates, illo ipsum sit magni suscipit quisquam illum delectus vero  pariatur eos quia. Accusantium adipisci quidem placeat optio assumenda nostrum quas sunt?</p>

                     </div>   

    </Wrapper>
  )
} 


export default Panel1














//stylinng for this component........
const Wrapper = Styled.section`
                   height: auto;
                    text-align:justify;
                    width: 100%;
                    overflow: auto;
                   

                 .panel_div_1{
                    margin-top:10px;
                    line-height:14px;

                 }
                 .panel_div_2{
                        padding-bottom:100px;
                      p{
                          padding-bottom:5px;
                        span{
                             font-size:1.4rem;
                             color:red;
                        }
                      }
                 }
               
       `




