import { Box, Button, Modal, Stack, TextField } from "@mui/material";
import './modalfield.css'
import { useState } from "react";

function EyeSVG(){
    return(
        <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.6594 23.05C34.5637 17.1 29.1652 14 24.0189 14C18.8727 14 13.4742 17.1 8.3784 23.05C7.87387 23.6 7.87387 24.45 8.3784 25C13.4742 30.9 18.8727 34 24.0189 34C29.1652 34 34.5637 30.9 39.6594 24.95C40.1135 24.4 40.1135 23.6 39.6594 23.05ZM24.0189 32C19.6295 32 14.7355 29.15 10.1947 24C14.7355 18.85 19.6295 16 24.0189 16C28.4084 16 33.3023 18.85 37.8431 24C33.3023 29.15 28.4084 32 24.0189 32ZM24.0189 18C20.689 18 17.9645 20.7 17.9645 24C17.9645 27.3 20.689 30 24.0189 30C27.3488 30 30.0733 27.3 30.0733 24C30.0733 20.7 27.3488 18 24.0189 18ZM24.0189 28C21.799 28 19.9827 26.2 19.9827 24C19.9827 21.8 21.799 20 24.0189 20C26.2389 20 28.0552 21.8 28.0552 24C28.0552 26.2 26.2389 28 24.0189 28Z" fill="#7791A1"/>
        </svg>
    );
}

function ModalField(props){
    const [pass, setPass] = useState(true);
    return(
        <Box bgcolor={props.theme.customTextField.background} mt={0.5} borderRadius={'5px'}>
            <Stack mt={0.5} height={'40px'} direction={'row-reverse'} width={'100%'} justifyContent={'flex-start'} alignItems={'center'}>
                <Button color="orange" onClick={()=>{setPass(!pass)}} sx={{height: '30px', minWidth: '30px', width: '30px', padding: 0, mr: 1}} disableRipple variant="text">
                    <EyeSVG/>
                </Button>
                <div style={{width: '100%', paddingLeft: 8}} className="AboutMainField Light-Text">
                    <TextField onChange={(e)=>{props.setValue(e.target.value)}} placeholder={props.placeholder} value={props.value} type={pass?"password":""} sx={{width: "100%"}} variant="outlined"/>
                </div>
            </Stack>
        </Box>
    )
}
export default ModalField;