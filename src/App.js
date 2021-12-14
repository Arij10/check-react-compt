import React from 'react';
import './App.css';
import Adress from './Component/Profile/adress'; 
import Fullname from './Component/Profile/fullname';
import Introduction from './Component/Profile/intoduction';
import Profilephoto from './Component/Profile/profilephoto';
import Mimi from './autm.jpg';
import Fcb from './facebook.png';
import Ytb from './youtube.png';
import Git from './github.png';
const App = () => (
    <div className="container"> 
    <div> 
    <img src = {Mimi}/>

    </div>
<Introduction/>
<Profilephoto/>
<Adress/>
<Fullname/>

 <div className="social">
   <a href="https://www.facebook.com/rajhi.roujina/">
     <img className="facebook"  src ={Fcb}/>;
     </a>
     <a href="http://twitter.com/">
       <img className="youtube"    src = {Ytb}/>;
       </a>
       <a href="http://https://www.instagram.com/accounts/login/">
         <img className="Git"      src = {Git}/>
     </a>
   </div>
 </div>


     
    )
    

export default App;
