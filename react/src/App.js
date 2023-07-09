import {Routes,Route} from "react-router-dom";
import React from "react";
import axios from "axios";
import TemplateDashboard from './pages/template_dashboard'
import "./sass/index.scss";



// Hey Wes! I removed the React path based routing as it was not working. 
// You can debug and add it back in later. My React version is the latest so syntax might 
// be a little different.

// export default class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Routes>
//             <Route path = "/Templates/Dashboard" element = {<TemplateDashboard />} />
//         </Routes>
//     </div>
//     );
//   }
// }

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TemplateDashboard />
    </div>
    );
  }
}