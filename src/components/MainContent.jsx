
import Main from '../styles/Main';
import Layout from '../helpers/Layout';
import CheckSession from '../helpers/CheckSession';
const MainContent = () => {
    
     //Check if user is logged, Use  CheckSession()
    const { lab_name, lab_id, access_token } = CheckSession()

    return ( 
        <div>
            {/* Include Side and Top Bars */}
            <Layout/>
            {/* Include Main, the styled component, put some divs inside the Main */}
            <Main>
                <div className="main">
                    <h1>Dashboard</h1>
                    <div class = "row">
                        <div className='col-md-4'>
                            <div className='card shadow p-4'>
                                Creative 
                                <div className='card-body'>
                                     
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                             <div className='card shadow p-4'>
                                Affordable 
                                <div className='card-body'>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card shadow p-4'>
                                 Efficient 
                                <div className='card-body'>
                                       
                                </div>
                            </div>
                         </div>
                    </div>

                </div>
            </Main>
        </div>
    
     );
}
 
export default MainContent;

