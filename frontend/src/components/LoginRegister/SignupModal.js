import { useTheme } from "@emotion/react";
import { Box, Button, Modal, Paper, Stack, TextField, Typography } from "@mui/material"
import "./text.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40vw',
    maxWidth: '90%',
    //border: '2px solid #000',
    borderRadius: '20px',
    outline: 'none'
}

function SignupModal(props){
    const theme = useTheme();
    const navigate = useNavigate();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");    
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [pass, setPass] = useState("");
    const [show, setShow] = useState(false);
    const [warning, setWarning] = useState(false);
    const [warnct, setWarnct] = useState('');

    function signUp(){
        setWarning(false);
        const data={
            fname: fname,
            lname: lname,
            email: email,
            mobile: phone,
            pword: pass
        }
        axios.post('http://localhost:5000/api/register', data).then(res=>{
            if(res.status == 200) {
                alert('Registered! Please Login!');
                navigate('/auth')
            }
        }).catch(e=>{
            if (e.response.status == 400) {
                setWarnct(e.response.data)
                setWarning(true);
            }
            else alert('Please Try again later');
        })
    }

    return(
        <Modal
            open={true}
            
            slotProps={{backdrop: {sx: {backdropFilter: 'blur(20px)'}}}}
        >
            <Paper style={style} elevation={10} sx={{ paddingY:5, paddingX: 4, paddingTop: 2, background: theme.mainTextBack}}>
                <Stack direction={'column'} alignItems={'center'} width={'100%'}>
                    <Stack width={'100%'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography color={theme.headFont} align="left" fontSize={'28px'} fontWeight={'550'}>
                            Signin
                        </Typography>                        
                    </Stack>
                    <Stack spacing={2} mt={2} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                        <img height={'35px'} width={'auto'} src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"/>
                        <Typography color={theme.headingColor} fontSize={{xs:'20px', lg: '25px'}} fontWeight={'700'}>CipherSchools</Typography>
                    </Stack>
                    <Typography mt={2} fontSize={'18px'} fontWeight={550} color={theme.palette.dark.main}>
                        Create New Account
                    </Typography>
                    <Typography mt={0.5} fontSize={'14px'} color={theme.palette.dark.main}>
                        Please provide your valid informations to signup
                    </Typography>
                    <Typography display={warning?"":"none"} mt={6} fontWeight={550} color={theme.palette.orange.main} align="left" width={'80%'} fontSize={'14px'}>{warnct}</Typography>
                    <Box mt={warning?2:6} sx={{background: theme.customMainContainer.background, borderRadius: '13px'}} height={'45px'} width={'80%'}>
                        <Stack className={"LoginField " + theme.palette.mode + '-text'} height={'100%'} width={'100%'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <div style={{width: '100%'}}><TextField sx={{width:'100%'}} value={fname} onChange={(e)=>{setFname(e.target.value)}} variant="outlined" placeholder="First Name"></TextField></div>
                        </Stack>
                    </Box>
                    <Box mt={2} sx={{background: theme.customMainContainer.background, borderRadius: '13px'}} height={'45px'} width={'80%'}>
                        <Stack className={"LoginField " + theme.palette.mode + '-text'} height={'100%'} width={'100%'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <div style={{width: '100%'}}><TextField sx={{width:'100%'}} value={lname} onChange={(e)=>{setLname(e.target.value)}} variant="outlined" placeholder="Last Name"></TextField></div>
                        </Stack>
                    </Box>
                    <Box mt={2} sx={{background: theme.customMainContainer.background, borderRadius: '13px'}} height={'45px'} width={'80%'}>
                        <Stack className={"LoginField " + theme.palette.mode + '-text'} height={'100%'} width={'100%'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <div style={{width: '100%'}}><TextField sx={{width:'100%'}} value={email} onChange={(e)=>{setEmail(e.target.value)}} variant="outlined" placeholder="Email ID"></TextField></div>
                        </Stack>
                    </Box>
                    <Box mt={2} sx={{background: theme.customMainContainer.background, borderRadius: '13px'}} height={'45px'} width={'80%'}>                        
                        <Stack className={"LoginField " + theme.palette.mode + '-text'} height={'100%'} width={'100%'} direction={'row'} alignItems={'center'}>
                            <div style={{width: '100%'}}><TextField sx={{width:'100%'}} value={phone} onChange={(e)=>{setPhone(e.target.value)}} variant="outlined" placeholder="Phone Number (Optional)"></TextField></div>
                        </Stack>
                    </Box>
                    <Box mt={2} sx={{background: theme.customMainContainer.background, borderRadius: '13px'}} height={'45px'} width={'80%'}>
                        <Stack className={"LoginField " + theme.palette.mode + '-text'} height={'100%'} width={'100%'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <div style={{width: '100%'}}><TextField sx={{width:'100%'}} type={show?"":"password"} onChange={(e)=>{setPass(e.target.value)}} value={pass} variant="outlined" placeholder="Password"></TextField></div>
                            <Button onClick={()=>{setShow(!show)}} sx={{p: 0, border: 0, height: '20px', outline: 0, minWidth: 0, mr: 1,"&:hover":{background: "rgb(0,0,0,0)", p: 0}}} variant="text" disableRipple disableElevation disableTouchRipple>
                                <svg width="30px" height="30px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M39.6594 23.05C34.5637 17.1 29.1652 14 24.0189 14C18.8727 14 13.4742 17.1 8.3784 23.05C7.87387 23.6 7.87387 24.45 8.3784 25C13.4742 30.9 18.8727 34 24.0189 34C29.1652 34 34.5637 30.9 39.6594 24.95C40.1135 24.4 40.1135 23.6 39.6594 23.05ZM24.0189 32C19.6295 32 14.7355 29.15 10.1947 24C14.7355 18.85 19.6295 16 24.0189 16C28.4084 16 33.3023 18.85 37.8431 24C33.3023 29.15 28.4084 32 24.0189 32ZM24.0189 18C20.689 18 17.9645 20.7 17.9645 24C17.9645 27.3 20.689 30 24.0189 30C27.3488 30 30.0733 27.3 30.0733 24C30.0733 20.7 27.3488 18 24.0189 18ZM24.0189 28C21.799 28 19.9827 26.2 19.9827 24C19.9827 21.8 21.799 20 24.0189 20C26.2389 20 28.0552 21.8 28.0552 24C28.0552 26.2 26.2389 28 24.0189 28Z" fill="#7791A1"/>
                                </svg>
                            </Button>                            
                        </Stack>
                    </Box>
                    <Button onClick={signUp} disableElevation disableRipple sx={{width: '80%', mt: 4, height:'45px', borderRadius:'13px'}} variant="contained" color="orange">
                        <Typography textTransform={'none'}>
                            Create Account
                        </Typography>
                    </Button>
                    <Stack mt={4} width={'80%'} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                        <Typography align="center">
                        Already have an account? </Typography><Button onClick={()=>{navigate('/auth')}} sx={{p:0, ml:1}} color="orange" variant="text"><Typography textTransform={'none'} sx={{p: 0}} color={theme.palette.orange.main}>Signin Now</Typography></Button>                
                    </Stack>
                </Stack>
            </Paper>
        </Modal>
    )
}
export default SignupModal;