import { useContext, useEffect } from "react";
import dataContext from "./datacontext";
import setdataContext from "./setdatacontext";
import { useLocation, useNavigate } from "react-router-dom";
import MainContainer from "./maincontainer";
import Userbox from "./userbox";
import { Stack } from "@mui/material";
import axios from "axios";
import NavBar from "./NavBar/navbar";

function WrappedContainer(props){
    const data = useContext(dataContext);
    const setData = useContext(setdataContext);
    const navigate = useNavigate();
    const loc = useLocation();
    useEffect(()=>{
        if (props.login){
            if (!localStorage.getItem('token')){
                navigate('/auth');
                return;
            }
            axios.get('http://localhost:5000/api/getprofile', {headers: {token: localStorage.getItem('token')}}).then(res=>{
                if (res.status == 200) setData(res.data);
            }).catch((e)=>{
                if (e.response.status == 401){
                    localStorage.removeItem('token');
                    localStorage.removeItem('email');
                    alert('Expired Token');
                    navigate('/auth');
                }
            });
            console.log(loc);
        }
    }, [props.login])
    return(
        <Stack overflow={'visible'} height={'100vh'} direction={'column'}>
            <NavBar/>
            <Userbox/>
            <MainContainer/>            
        </Stack>
    )
}
export default WrappedContainer;