import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/reducers/userSlice'
import { useNavigate } from 'react-router-dom'

function Header() {
   
    var loginDet = useSelector(state=>state.userRed)
    const dispatch = useDispatch()
    // console.log(loginDet);
    var nav = useNavigate()

    const handlelogout = ()=>{
        dispatch(logout())
        nav('/')
    }
    return (
        <div className=' bg-secondary'>
            <div className='d-flex flex-wrap container p-2'>
                <div onClick={()=>{nav('/')}} className='me-5 curser'>HOME</div>
                <div className='me-5'>CONTACT</div>
                <div className='me-5'>ABOUT US</div>
               {loginDet.isLogin && <div className='curser' onClick={()=>{handlelogout()}}>Logout</div>}
                {!loginDet.isLogin &&<div onClick={()=>{nav('/login')}} className='curser'>Login</div>}
            </div>
        </div>
    )
}

export default Header