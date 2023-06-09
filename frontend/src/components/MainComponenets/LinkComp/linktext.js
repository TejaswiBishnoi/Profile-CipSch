import { Box, Stack, SvgIcon, TextField } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import './aboutfield.css'

function LinkText(props){
    function handleChange(e){
        const ndata = {...props.data};
        ndata[props.datakey] = e.target.value;
        props.setData(ndata);
    }
    return(
        <Box width={'100%'} sx={{borderRadius: '8px', overflow: 'hidden', backgroundColor: props.theme.mainTextBack}}>
            <Stack pl={'10px'} direction={'row'} alignItems={'center'}>
                {/* <svg style={{paddingLeft:'10px'}} width="25" height="25" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1215 0C6.77121 0 0 6.8854 0 15.3796C0 22.1749 4.33276 27.9399 10.341 29.9736C11.0967 30.1159 11.3742 29.6399 11.3742 29.2337C11.3742 28.867 11.3601 27.6554 11.3536 26.3703C7.14682 27.3007 6.25913 24.5557 6.25913 24.5557C5.57127 22.778 4.58016 22.3053 4.58016 22.3053C3.20819 21.3507 4.68358 21.3703 4.68358 21.3703C6.20204 21.4786 7.00158 22.9552 7.00158 22.9552C8.35026 25.3065 10.5391 24.6267 11.402 24.2337C11.5377 23.24 11.9296 22.561 12.362 22.1772C9.00332 21.7883 5.47261 20.4695 5.47261 14.5764C5.47261 12.8972 6.06331 11.5252 7.03063 10.4482C6.87362 10.0605 6.35604 8.49653 7.17712 6.37806C7.17712 6.37806 8.44692 5.96471 11.3366 7.95456C12.5428 7.61379 13.8364 7.4429 15.1215 7.43704C16.4066 7.4429 17.7011 7.61379 18.9096 7.95456C21.7958 5.96471 23.0638 6.37806 23.0638 6.37806C23.8869 8.49653 23.3691 10.0605 23.2121 10.4482C24.1816 11.5252 24.7683 12.8972 24.7683 14.5764C24.7683 20.4835 21.2309 21.7842 17.8637 22.1649C18.406 22.6422 18.8893 23.5782 18.8893 25.0131C18.8893 27.0707 18.8718 28.7269 18.8718 29.2337C18.8718 29.643 19.144 30.1226 19.9105 29.9715C25.9154 27.9356 30.2427 22.1726 30.2427 15.3796C30.2427 6.8854 23.4725 0 15.1215 0Z" fill="#808191"/>
                </svg> */}
                {props.svg}
                <div className={"AboutMainField " + props.theme.palette.mode + '-Text'} style={{width: '100%', backgroundColor: props.theme.mainTextBack}}>
                    <TextField placeholder={props.placeholder} sx={{width: '100%', color:props.theme.mainTextColor}} value={props.data[props.datakey]} onChange={handleChange} variant="outlined" inputProps={{readOnly: props.readonly?true:false}}/>
                </div>
            </Stack>
        </Box>
    );
}
export default LinkText;