import { useFormik } from 'formik'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useAddRegistrationMutation } from '../../services/jsonAPI'

function AddRegistrations() {
    var [addregfn]=useAddRegistrationMutation()
    var {cname,tname}=useParams()
    console.log(tname);
    var addregformik=useFormik({
        initialValues:{
            campaigner:cname,
            title:tname,
            username:"",
            phone:"",
            email:"",
            date:new Date()

        },
        onSubmit:(values)=>{
            addregfn(values).then((res)=>{
                console.log(res)
            })
        }
    })
  return (
    <div>
        <h1>AddRegistrations</h1>
        <div>
            <form onSubmit={addregformik.handleSubmit}>
                <input type="text" name='username' onChange={addregformik.handleChange} placeholder='Enter User Name'/><br />
                <input type="number" name='phone' onChange={addregformik.handleChange} placeholder='Enter phone number'/><br />
                <input type="email" name='email' onChange={addregformik.handleChange} placeholder='Enter Email'/><br />
                <input type="text" value={addregformik.values.title} name='title' onChange={addregformik.handleChange} /><br />
                <button type='submit'>Register</button>
            </form>
        </div>
    </div>
  )
}

export default AddRegistrations