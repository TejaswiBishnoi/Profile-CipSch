import { Avatar, Box, Button, Grid, Modal, Paper, Stack, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

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
    return(
        <Modal open={props.open} onClose={props.handleClose}>
            <Paper style={style} elevation={10}>
                <Box paddingX={1.5} paddingY={2}>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography fontSize={'18px'} fontWeight={'700'}>Profile Update</Typography>
                        <div onClick={props.handleClose}><Typography><CloseIcon></CloseIcon></Typography></div>
                    </Stack>
                    <Grid container marginTop={5}>
                        <Grid md={4} item>
                            <Avatar sx={{height:'150px', width:'150px', bgcolor:'red', mx:'auto'}} src="/broken-image.jpg">
                                T
                            </Avatar>
                        </Grid>
                        <Grid md={8} item>
                            <Stack direction={'column'} marginY={'auto'} height={'100%'} marginX={1}>
                                <Box>
                                    <Typography fontSize={'15px'} fontFamily={'sans-serif'}>First Name</Typography>
                                    <input style={{}}/>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Modal>
    );
}

export default UserModal;