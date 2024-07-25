import { useEffect, useState } from "react";
import axiosInstance from "../helpers/axiosInstanceToken";
import CheckSession from "../helpers/CheckSession";
import Layout from "../helpers/Layout";
import Main from "../styles/Main";
import NursesDialog from "./NursesDialog";

const MyBookings = () => {
    // Protect
    const { lab_name, lab_id, refresh_token } = CheckSession();
    
    // Hooks
    const [bookings, setBookings] = useState([]); // Empty
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredData, setFilteredData] = useState([]); 
    const [show, setShowDialog] = useState(false);
    const [invoice_no, setInvoice] = useState(null);
    const [query, setQuery] = useState(''); // Search query
    
    // const { instance } = axiosInstance();

    useEffect(() => {
        axiosInstance.post("/viewlabookings", { lab_id: lab_id })
            .then(function (response) {
                console.log("Full Response: ", response);
                console.log("Data: ", response.data);
                setBookings(response.data); // important
                setFilteredData(response.data);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setError(error.message);
                setLoading(false);
        }); // end catch
    }, [lab_id]); // end useEffect

    const handleLiveSearch = (value) => {
        setQuery(value); // query has something as long someone is searching
        const filtered = bookings && bookings.filter((item) =>
            item.appointment_date.toLowerCase().includes(value.toLowerCase()) ||
            item.invoice_no.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const handleOpenMap = (latitude, longitude) => {
        const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
        window.open(mapUrl, '_blank');
    };

    return (
        <div>
            <Layout />
            <Main>
                <input
                    type="text"
                    placeholder="Search a date/Invoice No"
                    value={query}
                    onChange={(e) => handleLiveSearch(e.target.value)}
                    className="form-control"
                />
                
                <table className="table table-striped bg-light p-5 m-1">
                    {loading && <div className="text-warning">Loading ... </div>}
                    {error && <div className="text-danger"> Error occurred. Try Later </div>}
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Member</th>
                            <th>Where Taken</th>
                            <th>Test Name</th>
                            <th>Inv No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData && filteredData.length > 0 ? (
                            filteredData.map((booking) => (
                                <tr className="mt-5" key={booking.book_id}>
                                    <td>{booking.appointment_date}</td>
                                    <td>{booking.appointment_time}</td>
                                    <td>{booking.key.surname}</td>
                                    <td>{booking.where_taken}</td>
                                    <td>{booking.test_details.test_name}</td>
                                    <td>{booking.invoice_no}</td>
                                    <td>
                                        {booking.status === 'Pending' ? (
                                            <>
                                                <button
                                                    className="btn btn-warning btn-sm"
                                                    onClick={() => {
                                                        setShowDialog(true);
                                                        setInvoice(booking.invoice_no);
                                                    }}
                                                >
                                                    Assign
                                                </button>
                                                <br />
                                                <br />
                                                <button className="btn btn-danger btn-sm">Decline</button>
                                            </>
                                        ) : booking.status === 'Allocated' ? (
                                            <button className="btn btn-dark btn-sm disabled">Allocated</button>
                                        ) : booking.status === 'Done' ? (
                                            <button className="btn btn-success btn-sm">Completed</button>
                                        ) : (
                                            <button className="btn btn-info btn-sm"> --NaN-- </button>
                                        )}
                                    </td>
                                    <td>
                                        {booking.latitude === '' ? (
                                            <></>
                                        ) : (
                                            <button
                                                onClick={() => handleOpenMap(booking.latitude, booking.longitude)}
                                                className="btn btn-primary btn-sm"
                                            >
                                                Map
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            !loading && <tr><td colSpan="6" className="text-center">No bookings found</td></tr>
                        )}
                        <NursesDialog
                            isOpen={show}
                            onClose={() => setShowDialog(false)}
                            invoice_no={invoice_no}
                        />
                    </tbody>
                </table>
            </Main>
        </div>
    );
};

export default MyBookings;
