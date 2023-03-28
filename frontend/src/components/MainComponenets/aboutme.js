import { useContext, useState } from "react";
import dataContext from "../datacontext";
import setdataContext from "../setdatacontext";
import { Box, Stack, Typography } from "@mui/material";
import EditButton from "./editbutton";
import AboutField from "./aboutfield";

function AboutMe(props){
    const data = useContext(dataContext);
    const setData = useContext(setdataContext);
    const [about, setAbout] = useState(data.about);
    const [status, setStatus] = useState(true)

    return(
        <Box width={'100%'}>
            <Stack alignItems={'center'} width={'100%'} direction={'row'} justifyContent={'space-between'}>
                <Typography color={props.theme.headFont} fontSize={'16px'} fontWeight={'700'}>
                    ABOUT ME
                </Typography>
                <EditButton setData={setData} data={data} value={about} datakey="about" status={status} setStatus={setStatus} content={status?"Edit":"Save"}/>                
            </Stack>
            <Stack mt={2} direction={'row'} width={'100%'}>
                <AboutField about={about} setAbout={setAbout} theme={props.theme} readonly={status}/>
            </Stack>
            
        </Box>
    );
}
export default AboutMe;