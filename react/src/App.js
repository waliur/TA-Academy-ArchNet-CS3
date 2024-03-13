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

// export default class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <TemplateDashboard />
//     </div>
//     );
//   }
// }

import {useState, useEffect} from 'react';
export default function App() {
  const [criteria, setCriteria] = useState(false);
  const [template, setTemplate] = useState(false);

  function getCriteria() {
    fetch('http://localhost:3001/criteria')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setCriteria(data);
      });
  }

  function getTemplate() {
    fetch('http://localhost:3001/template')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setTemplate(data);
      });
  }

  useEffect(() => {
    getCriteria();
    getTemplate();
  }, []);
  return (
    <>
      <div>
        {criteria ? criteria : 'There is no criteria data available'}
      </div>

      <div>
      {template ? template : 'There is no template data available'}
      </div>
    </>
  );
}

