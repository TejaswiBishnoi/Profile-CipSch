import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import InterestModal from "./InterestModal";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Mapping = [
    {
        id: '0',
        value: 'App Development'
    },
    {
        id: '1',
        value: 'Web Development'
    },
    {
        id: '2',
        value: 'Game Development'
    },
    {
        id: '3',
        value: 'Data Structures'
    },
    
    {
        id: '4',
        value: 'Programming'
    },
    {
        id: '5',
        value: 'Machine Learning'
    },
    {
        id: '6',
        value: 'Data Science'
    },
    {
        id: '7',
        value: 'Others'
    },
]

function InterestButton(props){
    return(
        <Button variant="contained" color="interest" sx={{px: '15px', py: '8px'}} disableElevation disableRipple>
            <Typography textTransform={'none'} fontSize={'12px'} fontWeight={'550'}>
                {props.value}
            </Typography>
        </Button>
    );
}

function Interests(props){
    const [open, setOpen] = useState(false);
    const [data, setData] = useState("");
    const loc = useLocation();
    useEffect(()=>{
        if (loc.pathname != '/' || localStorage.getItem('token')==null) return;
        axios.get('http://localhost:5000/api/getprofinfo', {headers: {token: localStorage.getItem('token')}}).then(res=>{
            if (res.status == 200){
                if (!res.data.interests) setData("");
                else setData(res.data.interests);
            }
        }).catch(e=>{
            alert(e.response.data);
        })
    }, [loc])
    return(
        <Box width={'100%'}>
            <Stack width={'100%'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography textTransform={'uppercase'} color={props.theme.headFont} fontSize={'16px'} fontWeight={'700'}>
                    Interests
                </Typography>
                <Button onClick={()=>{setOpen(true)}} variant="contained" color="orange" sx={{width: '80px', borderRadius: '5px', height: '28px'}} disableElevation disableTouchRipple>
                    <Typography fontSize={'13px'} textTransform={'none'} align="center">
                        Edit
                    </Typography>
                </Button>
            </Stack>
            <Stack spacing={2} direction={'row'} mt={2}>
                {Mapping.map((dt)=>{
                    if(data.includes(dt.id)){
                        return(
                            <InterestButton value={dt.value}/>
                        );
                    }
                })}
            </Stack>
            <InterestModal theme={props.theme} open={open} setOpen = {setOpen} setData={setData} data={data} Mapping={Mapping}/>
        </Box>
    );
}
export default Interests;