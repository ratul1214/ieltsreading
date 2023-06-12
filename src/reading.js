import SplitPane, {Pane} from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css'
import  './ReadingPageStyle.css'
import {useState} from "react";
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Panel1 from "./Test/Pane1";
import Panel2 from './Test/Panel2';
import Pane1Ques2 from './Test/Pages/Panel1Q_2';
import Panel2Ques2 from "./Test/Pages/Panel2Q_2";
import Panel1Ques3 from "./Test/Pages/Panel1Q_3";
import Panel2Ques3 from "./Test/Pages/Panel2Q_3"
// end importing.......







function Reading({handleChange}) {
 
//make Sizes for Two Panels passing this state..    
        const [Panelsizes, setPanelSizes] = useState([100,'8%','auto',]);          








//main rendering-----
    return (
        <div className='mainContainer'>
              <BrowserRouter>
                    <SplitPane split='vertical' sizes={Panelsizes} onChange={setPanelSizes}>
                        <Pane minSize={100} maxSize='70%'>
                            <div className='panel_1' style={{height:"100%"  ,overflow:"scroll"}}>
                                    <Routes>
                                            <Route path='/' element={<Panel1 />}/>
                                            <Route path='/Question_2' element={<Pane1Ques2 />}/>
                                            <Route path='/Question_3' element={<Panel1Ques3 />}/>
                                   </Routes>
                            </div>
                        </Pane>
                               <div className='panel_2' style={{ height:"100%"  ,overflow:"scroll"}}>
                                     <Routes>
                                            <Route path='/' element={ <Panel2  handleChange={handleChange} />}/>
                                            <Route path='/Question_2' element={<Panel2Ques2  handleChange={handleChange}/>}/>
                                            <Route path='/Question_3' element={<Panel2Ques3 handleChange={handleChange}/>}/>
                                    </Routes>
                             </div>

                 </SplitPane>
              </BrowserRouter>
        </div>
    );
};
export default Reading;