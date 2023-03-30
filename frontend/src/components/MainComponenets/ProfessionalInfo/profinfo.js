import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import PopOver from "./popovers";

function FlipSVG(){
    return(
        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.08847 6.59357C5.86888 7.37116 7.13117 7.37121 7.91165 6.59369L12.2331 2.28855C12.6563 1.867 12.6565 1.18191 12.2337 0.760065C11.8126 0.339954 11.1309 0.339825 10.7096 0.759775L7.91215 3.5485C7.13155 4.32666 5.86852 4.32659 5.08801 3.54835L2.2909 0.759393C1.86986 0.33958 1.18856 0.339433 0.767341 0.759062C0.344011 1.18079 0.343982 1.86624 0.767277 2.288L5.08847 6.59357Z" fill="#808191"/>
        </svg>    
    );
}

const EMapping = [
    {
        id: 0,
        value: 'Primary'
    },
    {
        id: 1,
        value: 'Secondary'
    },
    {
        id: 2,
        value: 'Higher Secondary'
    },
    {
        id: 3,
        value: 'Graduation'
    },
    {
        id: 4,
        value: 'Post Graduation'
    },
];

const PMapping = [
    {
        id: 0,
        value: 'Schooling'
    },
    {
        id: 1,
        value: 'College Student'
    },
    {
        id: 2,
        value: 'Teaching'
    },
    {
        id: 3,
        value: 'Job'
    },
    {
        id: 4,
        value: 'Freelancing'
    },
];

function ProfInfo(props){
    const [status, setStatus] = useState(true);
    const [highedu, setHighedu] = useState(0);
    const [profession, setProfession] = useState(0);
    const [id, setId] = useState([0, 0]);
    const [width, setWidth] = useState(0);
    function handleChange(){
        if (!status){
            setOpen1(false);
            setOpen2(false);
        }
        setStatus(!status);
    }
    const ref = useRef();
    useLayoutEffect(()=>{
        setWidth(ref.current.clientWidth)
    }, [])
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [anchorEl1, setAnchorEl1] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);
    function handleOpen1(event){
        //console.log(width)
        setAnchorEl1(event.currentTarget);
        setOpen1(true);
    }
    function handleOpen2(event){
        setAnchorEl2(event.currentTarget);
        setOpen2(true);
    }
    function handleClose1(event){
        setOpen1(false);
        setAnchorEl1(null);        
    }
    function handleClose2(event){
        setOpen2(false);
        setAnchorEl2(null);
    }

    return (
        <Box width={'100%'}>
            <Stack mb={1} alignItems={'center'} width={'100%'} direction={'row'} justifyContent={'space-between'}>
                <Typography color={props.theme.headFont} textTransform={'uppercase'} fontSize={'16px'} fontWeight={'700'}>
                    Professional Information
                </Typography>
                <Button onClick={handleChange} variant="contained" color="orange" sx={{width: '80px', borderRadius: '5px', height: '28px'}} disableElevation disableTouchRipple>
                    <Typography fontSize={'13px'} textTransform={'none'} align="center">
                        {status?'Edit':'Save'}   
                    </Typography>
                </Button>                
            </Stack>
            <Grid direction={'row'} width={'100%'} spacing={5} container>
                <Grid xs={6} item>
                    <Typography align="left" mb={1} fontSize={'15px'} color={props.theme.headFont} fontWeight={'510'}>
                        Highest education
                    </Typography>
                    <Button ref={ref} onClick={(e)=>{if(!status)handleOpen1(e)}} variant="contained" color="select" sx={{width: '100%', borderRadius: '8px', px: '16px'}} disableElevation disableRipple>
                        <Stack alignItems={'center'} width={'100%'} direction={'row'} justifyContent={'space-between'}>
                            <Typography textTransform={'none'} align="left" fontWeight={'500'} fontSize={'14px'}>
                                {EMapping[id[0]].value}
                            </Typography>
                            <Box sx={{transform: (open1?'rotate(180deg)':'')}}>
                                <FlipSVG/>
                            </Box>
                        </Stack>
                    </Button>
                    <PopOver pid={0} setId={setId} id={id} Mapping={EMapping} open={open1} width={width} handleClose={handleClose1} anchorEl={anchorEl1}/>
                </Grid>
                <Grid xs={6} item>
                    <Typography mb={1} align="left" fontSize={'15px'} color={props.theme.headFont} fontWeight={'510'}>
                        What do you do currently?
                    </Typography>
                    <Button onClick={(e)=>{if(!status)handleOpen2(e)}} variant="contained" color="select" sx={{width: '100%', borderRadius: '8px', px: '16px'}} disableElevation disableRipple>
                        <Stack alignItems={'center'} width={'100%'} direction={'row'} justifyContent={'space-between'}>
                            <Typography textTransform={'none'} align="left" fontWeight={'500'} fontSize={'14px'}>
                                {PMapping[id[1]].value}
                            </Typography>
                            <Box sx={{transform: (open2?'rotate(180deg)':'')}}>
                                <FlipSVG/>
                            </Box>
                        </Stack>
                    </Button>
                    <PopOver pid={1} setId={setId} id={id} Mapping={PMapping} open={open2} width={width} handleClose={handleClose2} anchorEl={anchorEl2}/>
                </Grid>
            </Grid>
        </Box>
    )
}
export default ProfInfo;