import SplitPane, {Pane} from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css'
import  './ReadingPageStyle.css'
import {useState} from "react";
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Panel1 from "./Test/Pane1";
import Panel2 from './Test/Panel2';
import Pane1Q_2 from './Test/Pages/Panel1Q_2';
import Panel2Q_2 from "./Test/Pages/Panel2Q_2";
import Panel1Q_3 from "./Test/Pages/Panel1Q_3";
import Panel2Q_3 from "./Test/Pages/Panel2Q_3"


// end importing.......



// end of importing.....

function Reading({handleChange}) {
    const [sizes, setSizes] = useState([100,'10%','auto',]);





//main rendering-----
    return (
        <div className='mainContainer'>
              <BrowserRouter>
                    <SplitPane split='vertical' sizes={sizes} onChange={setSizes}>
                        <Pane minSize={100} maxSize='50%'>
                            <div className='panel_1' style={{height:"100%"  ,overflow:"scroll"}}>
                                    <Routes>
                                            <Route path='/' element={<Panel1 />}/>
                                            <Route path='/Question_2' element={<Pane1Q_2 />}/>
                                            <Route path='/Question_3' element={<Panel1Q_3 />}/>
                                   </Routes>
                            </div>
                        </Pane>
                               <div className='panel_2' style={{ height:"100%"  ,overflow:"scroll"}}>
                                     <Routes>
                                            <Route path='/' element={<Panel2  handleChange={handleChange}/>}/>
                                            <Route path='/Question_2' element={<Panel2Q_2  handleChange={handleChange}/>}/>
                                            <Route path='/Question_3' element={<Panel2Q_3 handleChange={handleChange}/>}/>
                                    </Routes>
                             </div>

                 </SplitPane>
              </BrowserRouter>
        </div>
    );
};
export default Reading;