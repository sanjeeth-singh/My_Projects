import React from 'react'
import { useLazyGetRegistrationDetailsQuery } from '../../services/jsonAPI'
import { useParams } from 'react-router-dom'

function RegByCamp() {
    var { cname } = useParams()

    let [regfn, { data }] = useLazyGetRegistrationDetailsQuery()

    React.useEffect(() => {
        regfn(cname).then((res) => {
            console.log(res);
        })
    }, [cname])

    return (
        <div className='container'>
            <h1>Wellcome:{cname}</h1>
            <div>
                <table className='table'>
                    <tr>
                        <th>Sl. No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Date</th>
                    </tr>
                    {
                        data?.map((reg,i)=>{
                            return(
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{reg.username}</td>
                                    <td>{reg.email}</td>
                                    <td>{reg.phone}</td>
                                    <td>{reg.date}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default RegByCamp