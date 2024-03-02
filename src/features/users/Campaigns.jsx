import React from 'react'
import { useGetCampaignDetailsQuery, useGetUserDetailsQuery, useGetUserforRegDetailsQuery } from '../../services/jsonAPI'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Campaigns() {
    var { data, isLoading } = useGetCampaignDetailsQuery()
    var { username } = useSelector(state => state.userRed.loginDetails)
    return (
        <div>
            <h1>Campaigns</h1>
            <div>
                {
                    isLoading && <img src="https://cdn.dribbble.com/users/1053052/screenshots/3600670/_____.gif" />
                }
                {
                    !isLoading &&
                    <ul className='d-flex flex-wrap justify-content-between'>
                        {
                            data.map((cmp) => {
                                return (
                                    <li className='border border-2 shadow rounded p-2 liwidth m-3'>
                                        <img src={cmp.imgURL} width='100%' />
                                        <h3>{cmp.title}</h3>
                                        <p>{cmp.description}</p>
                                        <Link to={`/addregistration/${username}/${cmp.title}`}>{cmp.link}/{username}/{cmp.title}</Link>
                                        {/* <p>{cmp.link}/{username}/{cmp.title}</p> */}
                                    </li>
                                )
                            })
                        }
                    </ul>
                }
            </div>
        </div>
    )
}

export default Campaigns