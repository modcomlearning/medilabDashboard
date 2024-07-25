// Import
import { useEffect } from "react"
import { useState } from "react"
import axiosInstance from "../helpers/axiosInstanceToken"
import CheckSession from "../helpers/CheckSession"
import Layout from "../helpers/Layout"
import Main from "../styles/Main"
const Nurses = () => {

    // Check if user is logged in
    const { lab_name, lab_id, refresh_token } = CheckSession()

    //hooks
    const [nurses, setNurses] = useState(null) //Empty
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    //Add this  below ot hold filtered data later
    const [filteredData, setFilteredData] = useState([]); 

    //Search
    const [query, setQuery] = useState('')  // null
    //Access viewnurses API endpoint proving the lab_id to view Nurses for  given lab id
    useEffect(() => {
        axiosInstance.post("/viewnurses", {
            lab_id: lab_id
        })
            .then(function (response) {
                //Update Hooks
                console.log(response.data);
                setNurses(response.data)//important
                setFilteredData(response.data);
                setLoading(false)
            })
            .catch(function (error) {
                //Update Hooks
                console.log(error);
                setError(error.message)
                setLoading(false)
        })//end catch
    }, [lab_id]);// end useEffect

 
    //add this to handle live search
    const handleLiveSearch = (value) => {
       //ABove value comes from the typing 
    setQuery(value); //query has something as long someone is searching
    //check if lab tests are not empty
    const filtered = nurses && nurses.filter((item) =>
        item.surname.toLowerCase().includes(value.toLowerCase()) ||
        item.phone.toLowerCase().includes(value.toLowerCase()) 
    );
        //update setFilteredData with filtered items
    setFilteredData(filtered);
  };//end

    return (
        <div>
            <Layout />
            <Main>
                {/* add handleLiveSearch function onChange below */}
                <input type="text" placeholder="Search a surname/Phone" value={query}
                    onChange={(e) => handleLiveSearch(e.target.value)}
                    className="form-control" />
                
                <table className="table table-striped bg-light p-5 m-1">
                    {loading && <div className="text-warning">Loading ... </div>}
                    {error && <div className="text-danger"> Error occured. Try Later </div>}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Others</th>
                            <th>Phone</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* add this filteredData */}
                        {filteredData && filteredData.map((nurse) => (
                            <tr className="mt-5" key={nurse.nurse_id}>
                                <td>{nurse.surname}</td>
                                <td>{nurse.others}</td>
                                <td>{nurse.phone}</td>
                                <td>{nurse.gender}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            
            </Main>
        </div>
    );
       //function
    function handleDelete(nurse_id) {    
        const confirmed = window.confirm('Are you sure?');
        if (confirmed) {
                console.log("Nurse id " + nurse_id) 
                Delete(nurse_id);
            }
    }//end fun


    function Delete(nurse_id) {
        axiosInstance.delete(`/delete_nurse?nurse_id=${nurse_id}`)
            .then(function (response) {
                alert(response.data.message)
                //TODO reload nurses
            }).catch(function (error) {
                alert(error.message)
            })
    }//end
    //Charts in JS,     Chart js, fusion charts 


}
 
export default Nurses