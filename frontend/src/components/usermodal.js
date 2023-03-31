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
                            <Stack spacing={2} height={'100%'} direction={'column'} alignItems={'center'} justifyContent={'center'}>
                                <Avatar sx={{height:'150px', width:'150px', bgcolor:'red', mx:'auto'}} src="/broken-image.jpg">
                                    T
                                </Avatar>
                                <Box>
                                    <Button disableRipple variant="contained" sx={{ background: 'rgb(0,0,0,0)', color: 'black', my:'auto', height: '30px', width: '30px', p: 0, minWidth: '22px', borderRadius: '50%', "&:hover":{background: 'rgb(0,0,0,0)'}}}><svg height={'15px'} width={'15px'} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" class="pf-profile-pencil-icon"><path d="M1.61176 17.6959L0.0393491 24.4821C-0.0148937 24.7301 -0.0130342 24.9872 0.0447916 25.2345C0.102617 25.4817 0.214949 25.713 0.37358 25.9112C0.532211 26.1095 0.733134 26.2699 0.961672 26.3806C1.19021 26.4913 1.44059 26.5495 1.69452 26.551C1.81284 26.563 1.93206 26.563 2.05038 26.551L8.87795 24.9786L21.9869 11.9194L14.671 4.62006L1.61176 17.6959Z" fill={thm.headFont}></path><path d="M26.1082 5.38144L21.2255 0.498692C20.9045 0.179298 20.4701 0 20.0172 0C19.5644 0 19.13 0.179298 18.809 0.498692L16.0945 3.21317L23.402 10.5207L26.1165 7.80626C26.2754 7.6466 26.4012 7.45718 26.4868 7.24885C26.5723 7.04052 26.616 6.81735 26.6152 6.59213C26.6144 6.36691 26.5693 6.14405 26.4823 5.93631C26.3953 5.72856 26.2682 5.54001 26.1082 5.38144Z" fill={thm.headFont}></path></svg></Button>                            
                                </Box>
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