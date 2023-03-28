import { useTheme } from "@emotion/react";
import { Box, Stack, Typography } from "@mui/material";
import AboutMe from "./MainComponenets/aboutme";

function MainContainer(){
    const thm = useTheme();
    return(
        <Box width={'100%'} overflow={"scroll"} bgcolor={thm.customMainContainer.background}>
            <Stack direction={'column'} py={'30px'} px={'30px'}>
                <AboutMe theme={thm}/>
            </Stack>
        </Box>
    )
}
export default MainContainer;