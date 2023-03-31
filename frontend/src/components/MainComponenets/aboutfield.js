import { Box, TextField } from "@mui/material";
import './aboutfield.css'

function AboutField(props){
    return(
        <Box width={'100%'} sx={{borderRadius: '8px', overflow: 'hidden'}}>
            <div className="AboutMainField Light-Text" style={{width: '100%', backgroundColor: props.theme.mainTextBack}}>
                <TextField placeholder="Add something about you." multiline sx={{width: '100%', color:props.theme.mainTextColor}} value={props.about} onChange={(e)=>{props.setAbout(e.target.value)}} variant="outlined" rows={4} inputProps={{readOnly: props.readonly?true:false}}/>
            </div>
        </Box>
    );
}
export default AboutField;