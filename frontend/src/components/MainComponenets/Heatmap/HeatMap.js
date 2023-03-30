import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
//import 'react-calendar-heatmap/dist/styles.css';
import "./style.css"
import NameList from './HeatMapData';

function HeatMap(props){
    const x = useRef();
    const [height, setHeight] = useState(0);
    useLayoutEffect(()=>{
        setHeight(x.current.offsetHeight*3/4);
        console.log(x.current.offsetHeight);
        console.log(props.theme.palette.mode)
    }, [])
    useEffect(()=>{
        function handleResize(){
            setHeight(x.current.offsetHeight*3/4);
        }
        window.addEventListener('resize', handleResize);
        // date = new Date(Date.now());
        // date2 = new Date();
        // date2.setFullYear(date.getFullYear() - 1);
        // console.log(date2.toISOString())
        // console.log(date.toISOString())
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function getDate(){
        let dt = new Date(Date.now());
        dt.setFullYear(dt.getFullYear() - 1);
        return dt;
    }

    function ReturnClass(value){
        if (!value || value == 0){
            //const str=`color-empt-${props.theme.palette.mode}`
            //console.log(str);
            return `color-empt-${props.theme.palette.mode}`
        }
        else{
            return `color-value-${value.count}`
        }
    }

    return(
        <Box width={'100%'}>
            <Typography mb={3} textTransform={'uppercase'} align='left' color={props.theme.headFont} fontSize={'16px'} fontWeight={'700'}>
                Cipher Map
            </Typography>
            <Box height={height} overflowX={'clip'}>
                <Stack ref={x} width={'100%'}>
                    <CalendarHeatmap  startDate={getDate()} endDate={new Date(Date.now())} showWeekdayLabels values={NameList} classForValue={ReturnClass}/>            
                </Stack>
            </Box>
            <Stack mt={2} spacing={0.75} direction={'row'} width={'100%'} justifyContent={'flex-end'} alignItems={'center'}>
                <Typography fontSize={'14px'}>
                    Less
                </Typography>
                <svg width="12" height="12"><rect width="12" height="12" fill={props.theme.palette.mode=="light"?"#ffffff":"#262c36"}></rect></svg>
                <svg width="12" height="12"><rect width="12" height="12" fill="#fce4cb"></rect></svg>
                <svg width="12" height="12"><rect width="12" height="12" fill="#f9c897"></rect></svg>
                <svg width="12" height="12"><rect width="12" height="12" fill="#f6ad62"></rect></svg>
                <svg width="12" height="12"><rect width="12" height="12" fill="#f3912e"></rect></svg>
                <Typography fontSize={'14px'}>
                    More
                </Typography>
            </Stack>
        </Box>                
    )
}export default HeatMap;