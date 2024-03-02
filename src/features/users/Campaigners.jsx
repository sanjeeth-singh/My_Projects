import React from 'react'
import { useGetCampaignersDetailsQuery } from '../../services/jsonAPI'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Campaigners() {
    var {data,isLoading}=useGetCampaignersDetailsQuery()
    var nav = useNavigate()
    // console.log(data);
  return (
    <div className='container '>
        <h1>Campaigners</h1>
        <table className='table table-striped w-75'>
            <tr>
                <th>Sl. No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>phone Number</th>
            </tr>
            {
                isLoading && <h1>Please....wait....</h1>
            }
            {
                !isLoading && (
                   data.map((com,i)=>{
                    return(
                        <tr>
                            <td>{i+1}</td>
                            <td><Link to={`/regbycamp/${com.username}`}>{com.username}</Link></td>
                            <td>{com.email}</td>
                            <td>{com.phone}</td>
                        </tr>
                    )
                   })
                )
            }
        </table>
    </div>
  )
}

export default Campaigners