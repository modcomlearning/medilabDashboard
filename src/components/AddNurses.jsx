// Import
import { useState } from "react";
import Main from "../styles/Main";
import Layout from "../helpers/Layout";
import axiosInstance from "../helpers/axiosInstanceToken";
import CheckSession from "../helpers/CheckSession";

const AddNurses = () => {
    //Check if user is logged in
    const { lab_name, lab_id, refresh_token } = CheckSession()

    //Hooks
    const [surname, setName] = useState(null)
    const [others, setOthers] = useState(null)
    const [gender, setGender] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(null)
    const [failure, setFailure] = useState(null)
    const [selected, setSelected] = useState('')
    
    //handle select for gender
    const handleSelect = (e) => {
        setSelected(e.target.value) //Update hook based on Selected radio button   
    }//end
    console.log("Selected  " + selected)
    

       //submit - WHen submit is pressed
        const submit = (e) => {
        e.preventDefault();
        //Ipdate Hooks
        setLoading(true)
        setSuccess(null)
        setFailure(null)
        console.log("submitting")
            //Post data to API and provide the Body including the Lab ID
            //The Lab ID is important to help the system know which lab the nurse added belong to
            axiosInstance.post('/addnurse', {
                lab_id: lab_id,
                surname: surname,
                others: others,
                email: email,
                gender: selected,
                phone: phone
            })
            .then(function (response) {
                //Update Hooks
                console.log(response.data);
                setLoading(false)
                setSuccess(response.data.message)
                setName(''); setGender(''); setEmail(''); setOthers(''); setOthers(''); //Set to Empty
            
            })
            .catch(function (error) {
                //Update Hooks
                console.log(error.message);
                setLoading(false)
                setFailure(error.message);
            });
    }//End submit

    return (
        <div>
                <Layout/>
                <Main>
                    <form onSubmit={submit} className="card shadow p-4">
                        <div className="card-body">
                                {loading  && <div className="text-warning"> Please Wait..</div>}
                                {success && <div className="text-success"> {success}</div>}  
                                {failure && <div className="text-danger"> { failure}</div>} 
                                <input type="text" placeholder="Enter Name" value={surname}
                                    onChange={(e) => setName(e.target.value)} required
                                className="form-control"/> <br /> 
                                
                                <input type="text" placeholder="Enter Others" value={others}
                                    onChange={(e) => setOthers(e.target.value)} required
                                className="form-control"/> <br />
                              
                                <label htmlFor="">Your Gender</label><br />
                                <input type="radio" value='Male'
                                onChange={handleSelect}
                                checked={ selected ==='Male'} />  Male<br />
                        
                                 <input type="radio" value='Female'
                                  onChange={handleSelect}
                                  checked={ selected ==='Female'}/> Female<br />

                                
                                <input type="text" placeholder="Enter Email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} required
                                className="form-control"/> <br />
                                
                                <input type="text" placeholder="Enter Phone" value={phone}
                                    onChange={(e) => setPhone(e.target.value)} required
                                className="form-control"/> <br />
                                
                                
                                <button className="btn btn-dark">Add Nurse</button>
                        </div>
                    </form>
                </Main>  
        </div>
        
     );

}
 

export default AddNurses;