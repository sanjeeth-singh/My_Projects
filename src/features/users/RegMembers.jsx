import React from 'react'
import { useSelector } from 'react-redux';
import { useLazyGetRegistrationDetailsQuery } from '../../services/jsonAPI';

function RegMembers() {
    var { username } = useSelector(state => state.userRed.loginDetails)
    var [regfn, {data}] = useLazyGetRegistrationDetailsQuery()
    React.useEffect(()=>{
        regfn(username).then((res)=>{
            console.log(res);
        })
    },[])
    console.log(data);
  return (
    <div>
        <h1>Wellcome:{username}</h1>
        <div>
            <table className='table table-hover'>
                <tr>
                    <th>Sl No.</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Date/Time</th>
                </tr>
                {
                    data?.map((reg,i)=>{
                        return(
                            <tr>
                                <td>{i+1}</td>
                                <td>{reg.username}</td>
                                <td>{reg.phone}</td>
                                <td>{reg.email}</td>
                                <td>{reg.title}</td>
                                <td>{new Date(reg.date).toLocaleString()}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    </div>
  )
}

export default RegMembers