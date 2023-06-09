import { Box, Modal, Paper, Stack, Typography, Button, Backdrop } from "@mui/material";
import { useState } from "react";
import ModalField from "./modalfield";
import './modalfield.css'
import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    maxWidth: '90%',
    //border: '2px solid #000',
    borderRadius: '20px'
}

function ChangeModal(props){
    const [currp, setCurrp] = useState('');
    const [newp, setNewp] = useState('');
    const [cnewp, setCnewp] = useState('');
    const [conf, setConf] = useState(true);
    const [err, setErr] = useState('');
    function handleClose(){
        setCurrp('');
        setNewp('');
        setCnewp('');
        setErr('');
        props.setOpen(false);
    }
    function handleSave(){
        if (cnewp != newp){
            setConf(false);
            return;
        }
        setConf(true);
        setErr('');
        const data = {
            email: localStorage.getItem('email'),
            pword: currp,
            newpword: newp
        }
        axios.post('http://localhost:5000/api/changepass', data).then((resp)=>{
            if (resp.status==200) handleClose();
        }).catch(e=>{
            setErr(e.response.data);
        })
    }
    return(
        <Modal open={props.open} onClose={handleClose}>
            <Paper style={style} elevation={10} sx={{ paddingY:5, paddingTop: 4, background: props.theme.mainTextBack}}>
                <Box paddingX={1.5} mx={3}>
                    <Stack direction={'column'} spacing={2}>
                        <Typography fontSize={'14px'} color={props.theme.palette.orange.main} display={conf?'none':'contents'}>Password and Confirm Password not matched!</Typography>
                        <Typography fontSize={'14px'} color={props.theme.palette.orange.main} display={err==""?'none':''}>{err}</Typography>
                        <Box>
                            <Typography color={props.theme.headFont} fontSize={'14px'} fontWeight={500}>
                                Current Password
                            </Typography>
                            <ModalField setValue={setCurrp} value={currp} placeholder="Current Password" theme={props.theme}/>
                        </Box>
                        <Box>
                            <Typography color={props.theme.headFont} fontSize={'14px'} fontWeight={500}>
                                New Password
                            </Typography>
                            <ModalField setValue={setNewp} value={newp} placeholder="New Password" theme={props.theme}/>
                        </Box>
                        <Box>
                            <Typography color={props.theme.headFont} fontSize={'14px'} fontWeight={500}>
                                Confirm New Password
                            </Typography>
                            <ModalField setValue={setCnewp} value={cnewp} placeholder="Confirm New Password" theme={props.theme}/>
                        </Box>
                    </Stack>
                    <Stack mt={4} direction={'row-reverse'} justifyContent={'flex-start'} spacing={3}>
                        <Button onClick={handleSave} sx={{borderRadius: '5px'}} variant="contained" color="orange" disableElevation disableRipple>
                            <Typography textTransform={'none'} paddingY={'2px'} paddingX={'16px'} fontSize={'14px'}>Save</Typography>
                        </Button>
                        <Button onClick={handleClose} sx={{borderRadius: '5px'}} variant="contained" color="dark" disableElevation disableRipple>
                            <Typography textTransform={'none'} paddingY={'2px'} paddingX={'16px'} fontSize={'14px'}>Cancel</Typography>
                        </Button>
                    </Stack>
                </Box>
            </Paper>
        </Modal>
    )
}
export default ChangeModal;