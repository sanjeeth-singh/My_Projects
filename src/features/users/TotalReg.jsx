import React from 'react'
import { useGetTotalRegDetailsQuery } from '../../services/jsonAPI'

function TotalReg() {
    var { data, isLoading } = useGetTotalRegDetailsQuery()
    return (
        <div className='container'>
            <h1>Total Number of Registrations</h1>
            <div>
                <table className='table table-striped'>
                    <tr>
                        <th>Sl. No.</th>
                        <th>Campaigner</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Date/Time</th>
                    </tr>
                    {
                        isLoading && (<h1>Please...wait...</h1>)
                    }
                    {
                        !isLoading && (


                            data.map((reg, i) => {
                                return (
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{reg.campaigner}</td>
                                        <td>{reg.username}</td>
                                        <td>{reg.phone}</td>
                                        <td>{reg.email}</td>
                                        <td>{reg.date}</td>
                                    </tr>
                                )
                            })


                        )
                    }
                </table>
            </div>
        </div>
    )
}

export default TotalReg