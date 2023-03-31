import { Avatar, Box, Button, Grid, Modal, Paper, Stack, Typography, useTheme } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import NTextField from "./textfield";
import { useContext, useState } from "react";
import dataContext from "./datacontext";
import setdataContext from "./setdatacontext";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    //border: '2px solid #000',
    borderRadius: '20px'
}

function UserModal(props){
    const data = useContext(dataContext);
    const setData = useContext(setdataContext);
    const newObj = {...data}
    const [tbdata, setTbdata] = useState(newObj);
    const thm = useTheme();
    function handleSave(){
        const ndata = {...tbdata};
        console.log(ndata);
        setData(ndata);
    }
    return(
        <Modal open={props.open} onClose={()=>{props.handleClose(); setTbdata({...data})}}>
            <Paper style={style} sx={{background: thm.mainTextBack}} elevation={10}>
                <Box paddingX={1.5} paddingY={2} paddingBottom={3}>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography fontSize={'18px'} fontWeight={'700'}>Profile Update</Typography>
                        <div onClick={()=>{props.handleClose(); setTbdata({...data})}}><Typography><CloseIcon></CloseIcon></Typography></div>
                    </Stack>
                    <Grid container marginTop={5}>
                        <Grid md={4} item>
                            <Stack height={'100%'} direction={'column'} justifyContent={'center'}>
                                <Avatar sx={{height:'150px', width:'150px', bgcolor:'red', mx:'auto'}} src="/broken-image.jpg">
                                    T
                                </Avatar>
                            </Stack>
                        </Grid>
                        <Grid md={8} item>
                            <Stack spacing={2} direction={'column'} marginY={'auto'} height={'100%'} marginX={1}>
                                <Box>
                                    <Typography fontSize={'15px'} fontFamily={'sans-serif'} color={thm.customTextField.labelcolor}>First Name</Typography>
                                    <NTextField placeholder='First Name' datakey='fname' dataobj={tbdata} setDataobj={setTbdata}/>
                                </Box>
                                <Box>
                                    <Typography fontSize={'15px'} fontFamily={'sans-serif'} color={thm.customTextField.labelcolor}>Last Name</Typography>
                                    <NTextField placeholder='Last Name' datakey='lname' dataobj={tbdata} setDataobj={setTbdata}/>
                                </Box>
                                <Box>
                                    <Typography fontSize={'15px'} fontFamily={'sans-serif'} color={thm.customTextField.labelcolor}>Email Address</Typography>
                                    <NTextField placeholder='Email Address' datakey='email' dataobj={tbdata} setDataobj={setTbdata} readonly/>
                                </Box>
                                <Box>
                                    <Typography fontSize={'15px'} fontFamily={'sans-serif'} color={thm.customTextField.labelcolor}>Mobile Number</Typography>
                                    <NTextField placeholder='Mobile Number' datakey='mobile' dataobj={tbdata} setDataobj={setTbdata}/>
                                </Box>
                                <Stack spacing={2} mt={'20px'} direction={'row'} width={'100%'} justifyContent={'flex-end'}>
                                    <Button onClick={()=>{handleSave(); props.handleClose()}} sx={{borderRadius: '5px'}} variant="contained" color="orange" disableElevation disableRipple>
                                        <Typography textTransform={'none'} paddingY={'2px'} paddingX={'16px'} fontSize={'14px'}>Save</Typography>
                                    </Button>
                                    <Button onClick={()=>{props.handleClose(); setTbdata({...data})}} sx={{borderRadius: '5px'}} variant="contained" color="dark" disableElevation disableRipple>
                                        <Typography textTransform={'none'} paddingY={'2px'} paddingX={'16px'} fontSize={'14px'}>Cancel</Typography>
                                    </Button>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Modal>
    );
}

export default UserModal;