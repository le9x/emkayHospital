import React from 'react';
import Sidebar from "../Sidebar/Sidebar";

import Add from './Add';

const Receptionist = () => {
  return (
    <div>
      <Sidebar/>
      <div className="row" id="Body">
          <Add />
      </div>
    </div>
  );
};

export default Receptionist;
