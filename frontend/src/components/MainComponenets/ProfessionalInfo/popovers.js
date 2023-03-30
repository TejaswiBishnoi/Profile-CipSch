import { Button, Popover, Stack, Typography } from "@mui/material";

function PopOver(props){
    function pressButton(id){
        var x = [...props.id]
        x[props.pid] = id;
        props.setId(x);
        props.handleClose();
    }
    return(
        <Popover
            open={props.open}
            anchorEl={props.anchorEl}
            onClose={props.handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            PaperProps={{
                sx:{
                    mt: 1,
                    borderRadius: '8px',
                    width: props.width,
                    padding: '5px'
                }
            }} 
        >
            <Stack direction={'column'} width={'100%'}>
                {props.Mapping.map((dt)=>{
                    if (dt.id == props.id[props.pid]){
                        return(
                            <Button onClick={props.handleClose} variant="contained" color="orange" sx={{width: '100%', borderRadius: '5px'}} disableRipple disableElevation>
                                <Stack direction={'row'} width={'100%'} justifyContent={'flex-start'}>
                                    <Typography fontSize={'14px'} fontWeight={500} align="left" textTransform={'none'}>
                                        {dt.value}
                                    </Typography>
                                </Stack>
                            </Button>
                        )
                    }
                    else{
                        return(
                            <Button onClick={()=>{pressButton(dt.id)}} variant="contained" color="select" sx={{width: '100%', borderRadius: '5px', '&:hover':{backgroundColor: 'rgba(243, 145, 46, 0.1)'}}} disableRipple disableElevation>
                                <Stack direction={'row'} width={'100%'} justifyContent={'flex-start'}>
                                    <Typography fontSize={'14px'} fontWeight={500} align="left" textTransform={'none'}>
                                        {dt.value}
                                    </Typography>
                                </Stack>
                            </Button>
                        )
                    }
                })}
            </Stack>
        </Popover>
    );
}
export default PopOver;