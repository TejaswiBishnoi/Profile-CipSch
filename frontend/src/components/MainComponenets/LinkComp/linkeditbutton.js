import { Button, Typography } from "@mui/material";

function LinkEditButton(props){
    function handleChange(){
        if (props.status == false){
            props.setStatus(true);
        }
        else props.setStatus(false);
    }
    return(
        <Button variant="contained" color="orange" onClick={handleChange} sx={{width: '80px', borderRadius: '5px', height: '28px'}} disableElevation disableTouchRipple>
            <Typography fontSize={'13px'} textTransform={'none'} align="center">
                {props.content}
            </Typography>
        </Button>
    )
}
export default LinkEditButton;