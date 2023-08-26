
import {Routes, Route} from 'react-router-dom'
import Blue from "./Blue";
import Orange from "./Orange";
import Green from "./Green";
import Red from "./Red";
import Yellow from './Yellow';
import Purple from './Purple';
import Home from "./Home";



export default function MainSection(){
    return(
        <div id="main-section">
                  <Routes>
                    <Route path = "/blue" element = {<Blue></Blue>}/>
                    <Route path = "/orange" element = {<Orange></Orange>}/>
                    <Route path = "/green" element = {<Green></Green>}/>
                    <Route path = "/red" element = {<Red></Red>}/>
                    <Route path = "/yellow" element = {<Yellow></Yellow>}/>
                    <Route path = "/purple" element = {<Purple></Purple>}/>
                    <Route path = "/" element = {<Home></Home>}/>
                  </Routes>
          </div>
    );
}