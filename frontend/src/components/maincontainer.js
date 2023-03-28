import { useTheme } from "@emotion/react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import AboutMe from "./MainComponenets/aboutme";
import LinkComp from "./MainComponenets/LinkComp/LinkComp";

function MainContainer(){
    const thm = useTheme();
    return(
        <Box width={'100%'} overflow={"scroll"} bgcolor={thm.customMainContainer.background}>
            <Stack direction={'column'} py={'30px'} px={'30px'} spacing={'20px'}>
                <AboutMe theme={thm}/>
                <Divider/>
                <LinkComp theme={thm}/>
            </Stack>
        </Box>
    )
}
export default MainContainer;