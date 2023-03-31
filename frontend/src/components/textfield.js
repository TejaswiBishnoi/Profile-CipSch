import { Box, TextField, useTheme } from '@mui/material';
import './textfield.css'

function NTextField(props){
    const thm = useTheme();
    function onChange(e){
        console.log(props.dataobj);
        const newDataobj = {
            ...props.dataobj,
        }
        newDataobj[props.datakey] = e.target.value;
        props.setDataobj(newDataobj);        
    }
    return (
        <Box py={0.4} px={0} bgcolor={thm.customTextField.background} mt={0} borderRadius={'5px'}>
            <div className={'TextField-without-border-radius ' + thm.palette.mode + '-Text'}>
                <TextField placeholder={props.placeholder} value={props.dataobj[props.datakey]} onChange={(e)=>{onChange(e)}} sx={{width: '100%', p:0}} variant='outlined' inputProps={{readOnly: props.readonly?true:false}}/>
            </div>
        </Box>
    );
}

export default NTextField;