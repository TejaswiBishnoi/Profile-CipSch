import { Box, Button, Stack, Typography } from "@mui/material";

function PassAndSec(props){
    return(
        <Box width={'100%'}>
            <Stack alignItems={'center'} direction={'row'} width={'100%'} justifyContent={'space-between'}>
                <Typography color={props.theme.headFont} textTransform={'uppercase'} fontSize={'16px'} fontWeight={'700'}>
                    Password & Security
                </Typography>
                <Button ></Button>
            </Stack>
        </Box>
    );
}
export default PassAndSec;