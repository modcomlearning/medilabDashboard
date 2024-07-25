// Imports
import React, { useState, useEffect } from 'react';
import axiosInstanceToken from '../helpers/axiosInstanceToken';
import CheckSession from '../helpers/CheckSession';
import Layout from '../helpers/Layout';
import Main from '../styles/Main';
const Profile = () => {

    //Check if user is logged, Use  CheckSession()
    const { lab_name, lab_id, access_token } = CheckSession()

    //Hooks
    const [user_details, setDetails] = useState({}) //Empty
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    //Access labprofile Endpoint providing the body with an ID.
    useEffect(() => {
        axiosInstanceToken.post("/labprofile", {
            lab_id: lab_id
        })
            .then(function (response) {

                //Update Hooks
                console.log(response.data.message);

                //setDetails is now Updated   meaning user_details has data.
                setDetails(response.data.message)
                setLoading(false) //Stop the Loading Bar
            })
            .catch(function (error) {
                console.log(error);
                setError(error.message)// Update Erorr Hook
                setLoading(false) //Stop the Loaidng Bar
        })//end catch
    }, [lab_id]);// end useeffect


    //if user_details is empty, Returns True/False
    const boolean = Object.keys(user_details).length > 0
    
    return ( 
        <div>
            <Layout/>
            <Main>
                <div className="main">
                    <h1>Profile</h1>
                    {loading && <div className="text-warning">Loading ... </div>}
                    {error && <div className="text-danger"> Error occured. Try Later </div>}
                    {
                        boolean ? (  //If Not Empty, show the details, (Bind them)
                            <div className="card shadow card-body m-3 text-start col-md-6">
                                <span> <b>ID:</b>  {user_details.lab_id}</span> <br />
                                <span className='text-warning'> <b>Permit: </b> {user_details.permit_id}</span><br />
                                <span className='text-dark'> <b>Tel:</b>  {user_details.phone}</span><br />
                                <span className='text-dark'> <b>Registration:</b>  {user_details.reg_date}</span><br />
                                <br />
                    
                            </div>
                        ) : (
                               <span>No Profile Data</span>
                        )
                    }

                </div>
            </Main>
        </div>
        

     );
}
 
export default Profile;