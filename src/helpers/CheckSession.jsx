import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const CheckSession = () => {
    const navigation = useNavigate()//**
        //useEffect runs at least  once when page loads   
        // THis Code check from Local Storage if below 3 variables arew present
        const lab_name = localStorage.getItem("lab_name")
        const lab_id = localStorage.getItem("lab_id")
        const access_token = localStorage.getItem("access_token")

        //If they are present/Not Empty, it returns them.
        //If they are not Present/Empty it Goes to /signin
        useEffect(() => {
            //check if above are empty
            if (!lab_name && !lab_id && !access_token) {
                console.log("Works")
                localStorage.clear();
                return navigation("/signin")//Go to sign
            }
        }, [lab_name, lab_id, access_token, navigation]); //Return them
    
    //return your variables
    return {lab_name, lab_id, access_token}
}
 
export default CheckSession;
//ANy COmpone tthat uses this CheckSession will receive the lab_name, lab_id, access_token
//If a User is logged in,ELse it will navigate to signin
//We will be using this Component to check if user is logged in or not.