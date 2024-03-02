import { useFormik } from 'formik'
import React from 'react'
import { useLazyGetUserDetailsQuery } from '../../services/jsonAPI'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { login } from '../reducers/userSlice'

function Login() {
    const [userfn]=useLazyGetUserDetailsQuery()
    const nav=useNavigate()
    var dispatch = useDispatch()
    const userformik=useFormik({
        initialValues:{
            username:"",
            password:""
        },
        onSubmit:(values)=>{
    
            userfn(values).then((res)=>{
                console.log(res)
                if(res?.data?.length === 0){
                    alert('please enter valid credentials')
                    // userformik.setErrors({credentials:"notvalid"})
                }
                else{
                    dispatch(login({...res.data[0]}))
                }
                if(res.data[0]?.role==="admin"){
                    nav("/adminDashboard")
                }
                else if(res.data[0]?.role==="campaigner"){
                    nav("/campaignerDashboard")
                }
            })
        },
        validationSchema:Yup.object({
            username:Yup.string().required(),
            password:Yup.string().required()
        })
    })
    // console.log(userformik);
    return (
        <div className=' w-50 border border-2 bg-warning p-5 rounded shadow mx-auto'>
            <h1 className='text-center'>Login Form</h1>
           <form onSubmit={userformik.handleSubmit}>
            
            <input type="text" name='username' placeholder='username' onChange={userformik.handleChange} onBlur={userformik.handleBlur} className='form-control w-75 mx-auto shadow'/> 
            <div className='text-danger w-75 ms-auto'>{userformik.touched.username&&userformik.errors.username}</div><br />
            <input type="password" name='password' placeholder='password' onChange={userformik.handleChange} onBlur={userformik.handleBlur} className='form-control w-75 mx-auto shadow'/> 
            <div className='text-danger w-75 ms-auto'>{userformik.touched.password&&userformik.errors.password}</div><br />
            <button type='submit' className='form-control p-2 w-75 mx-auto shadow bg-primary'>login</button>
           </form>

        </div>
    )
}

export default Login