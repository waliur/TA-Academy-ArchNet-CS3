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

// import {useState, useEffect} from 'react';
// export default function App() {
//   const [criteria, setCriteria] = useState(false);
//   const [template, setTemplate] = useState(false);
//   const [category, setCategory] = useState(false);
//   const [assessment, setAssessment] = useState(false);
//   const [recommendation, setRecommendation] = useState(false);

//   function getCriteria() {
//     fetch('http://localhost:3001/criteria')
//       .then(response => {
//         return response.text();
//       })
//       .then(data => {
//         setCriteria(data);
//       });
//   }

//   function getTemplate() {
//     fetch('http://localhost:3001/template')
//       .then(response => {
//         return response.text();
//       })
//       .then(data => {
//         setTemplate(data);
//       });
//   }

//   function getCategory() {
//     fetch('http://localhost:3001/category')
//       .then(response => {
//         return response.text();
//       })
//       .then(data => {
//         setCategory(data);
//       });
//   }

//   function getAssessment() {
//     fetch('http://localhost:3001/assessment')
//       .then(response => {
//         return response.text();
//       })
//       .then(data => {
//         setAssessment(data);
//       });
//   }
  
//   function getRecommendation() {
//     fetch('http://localhost:3001/recommendation')
//       .then(response => {
//         return response.text();
//       })
//       .then(data => {
//         setRecommendation(data);
//       });
//   }

//   useEffect(() => {
//     getCriteria();
//     getTemplate();
//     getCategory();
//     getAssessment();
//     getRecommendation();
//   }, []);
//   return (
//     <>
//       <div>
//         {criteria ? criteria : 'There is no criteria data available'}
//       </div>

//       <br/>

//       <div>
//         {template ? template : 'There is no template data available'}
//       </div>

//       <br/>

//       <div>
//         {category ? category : 'There is no category data available'}
//       </div>

//       <br/>

//       <div>
//         {assessment ? assessment : 'There is no assessment data available'}
//       </div>
      
//       <br/>

//       <div>
//         {recommendation ? recommendation : 'There is no recommendation data available'}
//       </div>
//     </>
//   );
// }

