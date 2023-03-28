import { Box, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import LinkText from "./linktext";
import EditButton from "../editbutton";
import { useTheme } from "@emotion/react";

function LinkComp(props){
    const [status, setStatus] = useState(true);
    const [data, setData] = useState({
        "linkedin": "",
        "github": "TejaswiBishnoi",
        "facebook": "",
        "twitter": "",
        "instagram": "",
        "website": ""
    });
    const about =""
    return(
        <Box width={'100%'}>
            <Stack alignItems={'center'} width={'100%'} direction={'row'} justifyContent={'space-between'}>
                <Typography color={props.theme.headFont} fontSize={'16px'} fontWeight={'700'}>
                    ON THE WEB
                </Typography>
                <EditButton setData={setData} data={data} value={about} datakey="about" status={status} setStatus={setStatus} content={status?"Edit":"Save"}/>                
            </Stack>
            <Grid mt={2} container spacing={4}>
                <Grid item xs={6} lg={6} xl={4}>
                    <LinkText theme={props.theme}/>
                </Grid>
                <Grid item xs={6}>

                </Grid>
            </Grid>
            
        </Box>
    )
}

export default LinkComp;