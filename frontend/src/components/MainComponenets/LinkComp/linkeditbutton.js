import { Button, Typography } from "@mui/material";
import axios from "axios";

function LinkEditButton(props){
    function handleChange(){
        if (props.status == false){
            const ndata={...props.data}
            axios.post('http://localhost:5000/api/updatewebprofiles', {data: ndata}, {headers:{token: localStorage.getItem('token')}}).then(resp=>{
                if (resp.status == 200) props.setStatus(true);
            }).catch(e=>{
                alert(e.repsonse.data);
            })
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