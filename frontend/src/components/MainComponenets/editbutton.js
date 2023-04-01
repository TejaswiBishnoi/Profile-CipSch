import { Button, Typography } from "@mui/material";
import axios from "axios";

function EditButton(props){
    function handleChange(){
        if (props.status == false){
            
            axios.post('http://localhost:5000/api/updateprofile', {data:{about: props.value}}, {headers: {token: localStorage.getItem('token')}}).then(res=>{
                if(res.status == 200){
                    const ndata = {...props.data}
                    ndata[props.datakey] = props.value;
                    console.log(ndata);
                    props.setData(ndata);
                    props.setStatus(true);
                }
            }).catch(e=>{
                alert(e.response.data);
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
export default EditButton;