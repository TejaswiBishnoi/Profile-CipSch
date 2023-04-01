import { Box, Button, Grid, Modal, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

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

function InterestButton(props){
    function onClick(){
        if (props.inter.includes(props.id)){
            const interx = props.inter.slice().replace(props.id, '');
            props.setInter(interx);
        }
        else{
            const interx = props.inter.slice() + props.id;
            props.setInter(interx);
        }
    }
    return (
        <Button onClick={onClick} variant="contained" sx={{borderRadius: '8px', height: '40px', width:'100%'}} color={props.inter.includes(props.id)?'orange':'unselect'} disableElevation>
            <Typography textTransform={'none'} fontSize={'14px'}>
                {props.content}
            </Typography>
        </Button>
    )
}

function InterestModal(props){
    const [inter, setInter] = useState(props.data)
    useEffect(()=>{
        console.log('Data Set');
        setInter(props.data)
    }, [props.data])
    function handleClose(){
        props.setOpen(false);
        setInter(props.data);        
    }
    function handleSave(){
        axios.post('http://localhost:5000/api/updateprofinfo', {interests: inter}, {headers: {token: localStorage.getItem('token')}}).then(res=>{
            if (res.status == 200){
                props.setData(inter);
                props.setOpen(false);
            }
        }).catch(e=>{
            alert(e.response.data);
        })        
    }
    const Mapping =[];
    return(
        <Modal open={props.open} onClose={handleClose}>
            <Paper style={style} elevation={10} sx={{ paddingY:5, paddingTop: 4, background: props.theme.mainTextBack}}>
                <Box paddingX={1.5} mx={3}>
                    <Grid spacing={2} width={'100%'} container>
                        {props.Mapping.map((dt)=>{
                            return(
                                <Grid item xs={6}>
                                    <InterestButton id={dt.id} inter={inter} setInter={setInter} content={dt.value}/>
                                </Grid>
                            );
                        })}
                    </Grid>
                    <Stack mt={3} spacing={2} direction={'row'} justifyContent={'flex-end'}>
                        <Button onClick={handleClose} sx={{borderRadius: '5px'}} variant="contained" color="dark" disableElevation disableRipple>
                            <Typography textTransform={'none'} paddingY={'2px'} paddingX={'16px'} fontSize={'14px'}>Cancel</Typography>
                        </Button>
                        <Button onClick={handleSave} sx={{borderRadius: '5px'}} variant="contained" color="orange" disableElevation disableRipple>
                            <Typography textTransform={'none'} paddingY={'2px'} paddingX={'16px'} fontSize={'14px'}>Save</Typography>
                        </Button>                        
                    </Stack>
                </Box>
            </Paper>
        </Modal>
    );
}
export default InterestModal;