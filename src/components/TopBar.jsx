//Imports
import styled from "styled-components"
import { AiOutlineAppstore, AiFillBell } from "react-icons/ai"
import { AiFillCalendar } from 'react-icons/ai';
import Avatar from "../images/icon.png"
const TobBar = () => {
    //access labname from top bar 
    const lab_name = localStorage.getItem("lab_name")  //ADDED THIS
    return (  
        <Nav>
           <div className="admin">
                  Admin Portal          
            </div>    

            <div className="content">
                <div className="date">
                    <AiFillCalendar />
                    {/* Updaed Below */}
                    <span>User: { lab_name }</span>  
                </div>

                <div className="icon">
                    <AiOutlineAppstore />
                    <span>/</span>
                    <AiFillBell />
                    <div className="image">
                         <img src={Avatar} alt=""/>
                    </div>
                    
                </div>

            </div>
        </Nav>
    );
}
export default TobBar;


const Nav = styled.nav`
    display:flex ;
    position: fixed;
    z-index: 0;
    top:0;
    right: 0;
    justify-content: space-between;
    background-color: aliceblue;
    overflow: auto;
    width: 75%;
    .admin{
        color: orange;
        display: flex;
        margin-top: 5px; 
        align-items: center;
        margin-left: 10px;
        input{
            padding: 2%;
            border-radius: 1px;

        }
    }
    .content{
        display: flex;
        justify-content: space-between;
        margin-top: 5px; 
        align-items: center;
        .date{
            background-color: white;
            color: black;
            display: flex;
            align-items: center;
            padding: 0.3rem;
            height: 10px;
            span {
                color: grey;
            }
            svg{
                margin-right :8px;
                color: brown;
                font-size: 24px;
            }
        }
        .icon{
            display: flex;
            align-items: center;
            padding-left: 1rem;
            gap: 1rem;
            svg{
              color: brown;
              font-size:24px;
            }
            .image{
                margin-right: 10%;
                img{
                    color: aliceblue;
                    font-size: 24px;
                    width: 40px;
                    margin-right: 5%;
                }
            }
        }

    }

`




