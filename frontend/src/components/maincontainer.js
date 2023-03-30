import { useTheme } from "@emotion/react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import AboutMe from "./MainComponenets/aboutme";
import LinkComp from "./MainComponenets/LinkComp/LinkComp";
import PassAndSec from "./MainComponenets/PassAndSec/passandsec";
import Interests from "./MainComponenets/Interests/interests";
import ProfInfo from "./MainComponenets/ProfessionalInfo/profinfo";

function MainContainer(){
    const thm = useTheme();
    return(
        <Box sx={{display: 'flex', flexDirection:'column', height:'100%', overflow:'scroll'}} width={'100%'} bgcolor={thm.customMainContainer.background}>
            <Stack direction={'column'} py={'30px'} px={'30px'} spacing={'30px'}>
                <AboutMe theme={thm}/>
                <Divider/>
                <LinkComp theme={thm}/>
                <Divider/>
                <ProfInfo theme={thm}/>
                <Divider/>
                <PassAndSec theme={thm}/>                   
                <Divider/>
                <Interests theme={thm}/>                            
            </Stack>
        </Box>
    )
}
export default MainContainer;