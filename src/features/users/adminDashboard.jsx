import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AdminDashboard() {
    var nav=useNavigate()
    var loginDet = useSelector(state=>state.userRed.loginDetails)
    // console.log(loginDet);
  return (
    <div className='container'>
        <h1>Admin Dashboard</h1>
        <h1>well come {loginDet.username}</h1>
        <button onClick={()=>{nav("/createcampaign")}}>Create Campaign</button>
        <button onClick={()=>{nav("/campaigns")}}>Campaign</button>
        <button onClick={()=>{nav("/campaigners")}}>Campaigners</button>
        <button onClick={()=>{nav("/totalreg")}}>Registrstions</button>
    </div>
  )
}

export default AdminDashboard