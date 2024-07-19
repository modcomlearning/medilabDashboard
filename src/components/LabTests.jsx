import { useEffect } from "react"
import { useState } from "react"
import axiosInstance from "../helpers/axiosInstanceToken"
import CheckSession from "../helpers/CheckSession"
import Layout from "../helpers/Layout"
import Main from "../styles/Main"

const LabTests = () => {
     //Protect
    const { lab_name, lab_id, refresh_token } = CheckSession()
    //hooks
    const [lab_tests, setLabTests] = useState(null) //Empty
    console.log("Array "+typeof(lab_tests))
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    //Add this  below
    const [filteredData, setFilteredData] = useState([]); 


    //Details
    const [test_id, setId] = useState('')
    const [test_name, setName] = useState('')
    const [test_description, setDescription] = useState('')
    const [test_cost, setCost] = useState('')
    const [test_discount, setDiscount] = useState('')
    const [show, setShowDialog] = useState(false);
    //above hooks will be updated and sent to dialog

    //Search
    const [query, setQuery] = useState('')  // null
    const {instance}  = axiosInstance()
    useEffect(() => {
        instance.post("/viewlabtests", {
            lab_id: lab_id
        })
            .then(function (response) {
                console.log(response.data);
                setLabTests(response.data)//important
                setFilteredData(response.data);
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error);
                setError(error.message)
                setLoading(false)
        })//end catch
    }, [lab_id]);// end useeffect

 
    //add this
    const handleLiveSearch = (value) => {
       //ABove value comes from the typing 
    setQuery(value); //query has something as long someone is searching
    //check if lab tests are not empty
    const filtered = lab_tests && lab_tests.filter((item) =>
      item.test_name.toLowerCase().includes(value.toLowerCase())
    );
        //update setFilteredData with filtered items
    setFilteredData(filtered);
  };//end

    return ( 
        <div>
            <Layout />
            <Main>
                {/* add handleLiveSearch function onChange below */}
                <input type="text" placeholder="Search a test name" value={query}
                    onChange={(e) => handleLiveSearch(e.target.value)}
                className = "form-control" /> 
                
                <table className="table table-striped bg-light p-5 m-1">
                     {loading && <div className="text-warning">Loading ... </div>}
                     {error && <div className="text-danger"> Error occured. Try Later </div>}
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Cost</th>
                        <th>Discount</th>
                    
                    </tr>
                    </thead>
                    <tbody>
                        {/* add this filteredData */}
                    {filteredData && filteredData.map((test) => (
                        <tr className="mt-5" key={test.test_id}>        
                            <td>{test.test_name}</td>
                            <td>{test.test_description}</td>
                            <td>{test.test_cost}</td>
                            <td>{test.test_discount}</td>
                       
                            <td><button className="btn btn-danger btn-sm"
                            onClick={()=> handleDelete(test.test_id)}>Remove</button></td>
                            <td><button className="btn btn-warning btn-sm"
                                onClick={() => {
                                    setId(test.test_id);
                                    setName(test.test_name);
                                    setDescription(test.test_description);
                                    setCost(test.test_cost);
                                    setDiscount(test.test_discount);
            
                                    setShowDialog(true);
                            }}>Update</button></td>
                        </tr>    
                    ))}

                        {/* Props - passing data to Dialog component */}
                        {/* <TestUpdate isOpen={show}
                            onClose={() => setShowDialog(false)}
                            test_id={test_id}
                            test_name={test_name}
                            test_description={test_description}
                            test_cost={test_cost}
                            test_discount={test_discount}
                            />
                         */}

                    </tbody>
                 </table>
            </Main>
        </div>
        
     );
      //function
    function handleDelete(test_id) {    
        const confirmed = window.confirm('Are you sure?');
        if (confirmed) {
                console.log("Test id " + test_id) 
                Delete(test_id);
            }
    }//end fun

    function Delete(test_id) {
        instance.delete(`/delete_test?test_id=${test_id}`)
            .then(function (response) {
                alert(response.data.message)
                //TODO reload lab tests
            }).catch(function (error) {
                alert(error.message)
            })
    }//end
//button.setOnClickListenter(click:)


    
    }//end component
    
 
export default LabTests