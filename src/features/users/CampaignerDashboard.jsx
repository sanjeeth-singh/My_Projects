import React from 'react'

import { Link, Outlet } from 'react-router-dom';

function CampaignerDashboard() {

  // console.log(data);
  return (
    <div className='container'>
      <h1>CampaignerDashboard</h1>
      <Link to='/campaignerDashboard/campaigns'>Campaigns</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/campaignerDashboard/reg' >Registered Members</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <Outlet></Outlet>
     
    </div>
  )
}

export default CampaignerDashboard