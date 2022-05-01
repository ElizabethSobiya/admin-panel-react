// import {Home, About} from "./home.js";
// import "./style.css"
// import ProductGrid from "./ProductGrid.js";
import React, { Component } from "react";
import AdminPanel from './AdminPanel/AdminPanel'
import axios from 'axios';

// import Main from "./Assignemnt-2/Main";

export class App extends Component{

  
  render (){
  return (
    <div>
      <AdminPanel/>
    </div>
  )
}
}


// function Home(props){
//   console.log(props)
//   return (
//    <div>
//       <h1>Home Component</h1>
//       <h2> Greetings : {props.greeting}</h2>
//    </div>
//   )
// }

// function App() {
  
//   return (
//     <div >
//       {/* <h2>app Component</h2>
//       <AdminPanel/> */}
//       {/* <ProductGrid/> */}
//       {/* <Main/> */}

//     </div>
//   );
// }

export default App;
