import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import InfoPatient from './InfoPatient';
import HistoryPatient from './HistoryPatient';
import './Patient.css';

class HomePatient extends React.Component {
    render(){
        return (
            <div>
              <Sidebar/>
              <div className="row" id="Body">
                  <InfoPatient />
                  <HistoryPatient />
              </div>
            </div>
          );
    }
};

export default HomePatient;
