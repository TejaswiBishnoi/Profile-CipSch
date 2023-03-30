import { Button, Popover, Stack, Typography } from "@mui/material";

function PopOver(props){
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
                    if (dt.id == props.id){
                        return(
                            <Button onClick={props.handleClose} variant="contained" color="orange" sx={{width: '100%', borderRadius: '5px'}} disableRipple disableElevation>
                                <Typography textTransform={'none'}>
                                    dt.value
                                </Typography>
                            </Button>
                        )
                    }
                })}
            </Stack>
        </Popover>
    );
}
export default PopOver;