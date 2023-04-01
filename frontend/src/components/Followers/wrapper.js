import { useContext, useEffect, useState } from "react";
import NavBar from "../NavBar/navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import dataContext from "../datacontext";
import setdataContext from "../setdatacontext";
import axios from "axios";
import { useTheme } from "@emotion/react";
import Followers from "./followers";

function FWrapper(){
    const data = useContext(dataContext);
    const setData = useContext(setdataContext);
    const navigate = useNavigate();
    const loc = useLocation();
    const thm = useTheme();
    const [page, setPage] = useState(1);

    useEffect(()=>{
        if (true){
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
    }, []);

    return(
        <Stack overflow={'visible'} height={'100vh'} direction={'column'}>
            <NavBar/>
            <Box sx={{display: 'flex', flexDirection:'column', height:'100%', overflow:'scroll'}} width={'100%'} bgcolor={thm.customMainContainer.background}>
                <Box width={'95%'} bgcolor={thm.customMainContainer.background} mx={'auto'}>
                    <Typography align="left" color={thm.headFont} fontSize={'18px'} fontWeight={550} mt={3} mx={'auto'}>
                        User Following You
                    </Typography>
                    <Box height={'100%'} display={data.followers!=0?'none':''} mt={10}>
                        <Typography fontSize={'50px'} color={'rgb(34, 40, 49, 0.2)'} fontWeight={700}>
                            No One Following You
                        </Typography>
                    </Box>
                    <Stack my={2} width={'100%'} direction={'row'} justifyContent={'flex-start'}>
                        <Button onClick={()=>setPage(page - 1)} disableElevation disableRipple variant="contained" color="orange" sx={{mr: 2, borderRadius: '5px', display: (page>1)?'':'none'}}>
                            <Typography fontSize={'12px'} textTransform={'none'}>Prev Page</Typography>
                        </Button>
                        <Button onClick={()=>setPage(page + 1)} disableElevation disableRipple variant="contained" color="orange" sx={{borderRadius: '5px', display: (page*12<data.followers)?'':'none'}}>
                            <Typography fontSize={'12px'} textTransform={'none'}>Next Page</Typography>
                        </Button>
                    </Stack>
                    <Followers page={page}/>
                </Box>                    
            </Box>
        </Stack>
    )
}
export default FWrapper;