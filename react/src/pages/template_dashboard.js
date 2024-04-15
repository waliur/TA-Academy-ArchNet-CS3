// import Header from '../layouts/header';
// import Footer from '../layouts/footer';
// import React from 'react';
// import Table from '../components/data table';

// export default function TemplateDashboard() {

//     return (
//         <>
//         <div id="tp-dashboard">
//             <Header showClient = "true" clientName="Client Name Ltd" serviceName="Amazing Service"/>
//             <main>
//                 <h1>Template Dashboard</h1>
//                 <button className="btn-1">+ New Template</button>
//                 { <Table /> }
//                 <ul>
//                 </ul>
//             </main>
//             <Footer changeCompany="false" /> 
//         </div>
//         </>
//     )

// }


// template_dashboard.js
import React, { useState } from 'react';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import Table from '../components/data table';
import Overlay from './Overlay';
import '../sass/pages/template_dashboard.scss'; 

export default function TemplateDashboard() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const handleNewTemplateClick = () => {
    setOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <>
      <div id="tp-dashboard">
        <Header showClient="true" clientName="Client Name Ltd" serviceName="Amazing Service" />
        <main>
          <h1>Template Dashboard</h1>
          <button className="btn-1" onClick={handleNewTemplateClick}>
            + New Template
          </button>
          {isOverlayVisible && <Overlay onClose={handleCloseOverlay} />} {/* Render the overlay */}
          {<Table />}
          <ul></ul>
        </main>
        <Footer changeCompany="false" />
      </div>
    </>
  );
}

// <<<<<<< jk-frontend
// =======
//     return (
//         <>
//         <div id="tp-dashboard">
//             <Header showClient = "true" clientName="Client Name Ltd" serviceName="Amazing Service"/>
//             <main>
//                 <h1>Template Dashboard</h1>
//                 <button className="btn-1">+ New Template</button>
//                 <Table />
//                 <div style={{paddingBottom: '20rem'}}/>
//             </main>
//             <Footer changeCompany="false" /> 
//         </div>
//         </>
//     )

// }
// >>>>>>> master
