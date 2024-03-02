import React from 'react'
import { useAddCampaignMutation } from '../../services/jsonAPI'
import { useFormik } from 'formik'

function CreateCampaign() {
    var [addcmp] = useAddCampaignMutation()
    var cmpformik = useFormik({
        initialValues: {
            title: "",
            description: "",
            imgURL: "",
            link: "",
            date: (new Date()).getTime()
        },
        onSubmit: (values) => {
            console.log(values)
            addcmp(values).then((res)=>{
                console.log(res)
            })
        }
    })
    return (
        <div>
            <h1>CreateCampaign</h1>
            <div>
                <form onSubmit={cmpformik.handleSubmit}>
                    <input type="text" placeholder='Enter Title' name='title' onChange={cmpformik.handleChange} /><br />
                    <input type="text" placeholder='Enter Description' name='description' onChange={cmpformik.handleChange} /><br />
                    <input type="text" placeholder='Enter Image URL' name='imgURL' onChange={cmpformik.handleChange} /><br />
                    <input type="text" placeholder='Enter Contact URL' name='link' onChange={cmpformik.handleChange} /><br />
                    <button >Add Campaign</button>
                </form>

            </div>
        </div>
    )
}

export default CreateCampaign