import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import './passsec.css'
import { useState } from "react";
import ChangeModal from "./changeModal";

function PassAndSec(props){
    const [open, setOpen] = useState(false);
    function handleOpen(){
        setOpen(true);
    }
    return(
        <Box width={'100%'}>
            <Stack alignItems={'center'} direction={'row'} width={'100%'} justifyContent={'space-between'}>
                <Typography color={props.theme.headFont} textTransform={'uppercase'} fontSize={'16px'} fontWeight={'700'}>
                    Password & Security
                </Typography>
                <Button onClick={handleOpen} variant="contained" color="orange" sx={{width: '80px', borderRadius: '5px', height: '28px'}} disableElevation disableTouchRipple>
                    <Typography fontSize={'13px'} textTransform={'none'}>Change</Typography>
                </Button>
            </Stack>
            <Typography mt={1} fontSize={'15px'} align="left" fontWeight={550} ml={0.5} mb={0.5} color={props.theme.headFont}>Password</Typography>
            <Box width={'100%'} sx={{borderRadius: '8px', overflow: 'hidden'}}>
                <div className={"AboutMainField " + props.theme.palette.mode + "-Text"} style={{width: '100%', backgroundColor: props.theme.mainTextBack, paddingLeft: '10px'}}>
                    <TextField sx={{width: '100%', color:props.theme.mainTextColor}} type="password" value={'abcdefghijklmnopqr'} onChange={(e)=>{props.setAbout(e.target.value)}} variant="outlined" inputProps={{readOnly: true}}/>
                </div>
            </Box>
            <ChangeModal open={open} setOpen={setOpen} theme={props.theme}/>
        </Box>
    );
}
export default PassAndSec;