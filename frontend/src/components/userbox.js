import { useContext, useState } from "react"
import dataContext from "./datacontext"
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import UserModal from "./usermodal";

function Userbox(props){
    const data = useContext(dataContext)
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);
    return(
        <div>
            <Box height={110} width={'100%'} borderBottom={'1px solid lightgray'} sx={{backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 100%), url(https://www.cipherschools.com/static/media/ProfileCover.e525f2d51356332792cb.png);', backgroundPositionX:'50%', backgroundPositionY:'center', backgroundSize:'cover',backgroundRepeat: 'no-repeat'}}>
                <Stack direction={'row'} justifyContent={'space-between'} paddingX={'30px'} paddingY={'0px'}>
                    <Stack direction={'row'} justifyContent={'flex-start'} spacing={4}>
                        <Box height={'70px'} display={'flex'} flexDirection={'column'} my={'auto'}>
                            <Stack direction={'column'} justifyContent={'center'}>
                                <Avatar sx={{height:'70px', width:'70px', bgcolor:'red'}} src="/broken-image.jpg">
                                    T
                                </Avatar>
                                
                            </Stack>
                            <Box sx={{mx:'auto', position:'relative', bottom:'8px', borderRadius:'50%', height:'23px', width:'23px', bgcolor:'black', display:'flex', justifyContent:'center', flexGrow:1}}>
                                <Box sx={{display: 'flex', height:'23px', width: '23px', justifyContent:'center'}}>                                    
                                    <Button disableRipple onClick={handleOpen} variant="text" sx={{color: 'black', my:'auto'}}><EditIcon sx={{height:'17px', width:'17px', filter: 'invert(1)', my:'auto'}}></EditIcon></Button>                                    
                                </Box>
                            </Box>
                        </Box>
                        <Stack direction={'column'} alignItems={'flex-start'} paddingTop={'7px'} height={'100%'}>
                            <Typography variant="name_greeting">
                                Hello,
                            </Typography>
                            <Typography variant="name_large" marginBottom={'2px'}>
                                {data.fname} {data.lname}
                            </Typography>
                            <Typography variant="name_email">
                                {data.email}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction={'column'} justifyContent={'center'} paddingTop={'7px'} height={'100px'} sx={{display:{xs: 'none', sm:'flex'}}}>
                        <Typography fontSize={'17px'} fontFamily={'sans-serif'} fontWeight={'490'}>
                            {data.followers} Followers
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
            <UserModal open={modalOpen} handleClose={handleClose}/>
        </div>
    )
}
export default Userbox;