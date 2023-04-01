import axios from "axios";
import { useContext, useEffect, useState } from "react";
import dataContext from "../datacontext";
import { Avatar, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const PMapping = [
    {
        id: 0,
        value: 'Schooling'
    },
    {
        id: 1,
        value: 'College Student'
    },
    {
        id: 2,
        value: 'Teaching'
    },
    {
        id: 3,
        value: 'Job'
    },
    {
        id: 4,
        value: 'Freelancing'
    },
];

function AvtObj(props){
    const data = props.data;
    if (data=={}){
        return(<>T</>)
    }
    else if (data.profpic == "") return(<>{data.fname[0]}</>)
    return(
        <img style={{height:'120px', width:'120px', background: props.thm.mainTextBack}} src={"http://localhost:5000/"+data.profpic}/>
    )
}

function Followers(props){
    const [fol, setFol] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/getfollowers?page=${props.page}`, {headers: {token: localStorage.getItem('token')}}).then(res=>{
            if (res.status == 200){
                setFol(res.data);
            }
        }).catch(e=>{
            alert(e.response.data);
        })
    }, [props.page]);
    const thm = useTheme();
    return(
        <Grid mt={2} width={'100%'} container spacing={3}>
            {fol.map(dt=>{
                return(
                    <Grid item xs={12} md={3} lg={3} xl={2}>
                        <Card sx={{background: thm.mainTextBack, borderRadius: '10px', width: '100%'}}>
                            <CardContent>
                                <Stack mx={'auto'} width={'90%'} direction={'row'} justifyContent={'center'}>
                                    <Avatar sx={{height:'120px', width:'120px', bgcolor:'red', mx:'auto'}} src="/broken-image.jpg">
                                        <AvtObj thm={thm} data={dt}/>
                                    </Avatar>                                    
                                </Stack>
                                <Typography fontWeight={550} fontSize={'16px'} color={thm.headFont} align="left" mt={1}>**** {dt.lname}</Typography>
                                <Typography fontWeight={550} fontSize={'12px'} color={thm.customTextField.labelcolor} align="left">{PMapping[parseInt(dt.profession)].value}</Typography>
                                <Typography fontWeight={550} fontSize={'12px'} color={thm.customTextField.labelcolor} align="left">{dt.followers} Followers</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}
export default Followers;