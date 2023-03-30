import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import "./style.css"

const NameList =[
    {date: '2022-05-16', count:4},
    {date: '2022-05-23', count:4},
    {date: '2022-05-30', count:4},
    {date: '2022-06-06', count:4},
    {date: '2022-06-13', count:4},
    {date: '2022-05-31', count:4},
    {date: '2022-06-01', count:4},
    {date: '2022-06-02', count:4},
    {date: '2022-06-03', count:4},

    {date: '2022-06-27', count:4},
    {date: '2022-07-04', count:4},
    {date: '2022-07-11', count:4},
    {date: '2022-06-28', count:4},
    {date: '2022-06-29', count:4},
    {date: '2022-07-06', count:4},
    {date: '2022-07-13', count:4},
    {date: '2022-06-30', count:4},
    {date: '2022-07-01', count:4},
    {date: '2022-07-08', count:4},
    {date: '2022-07-15', count:4},
    
    {date: '2022-07-25', count:4},
    {date: '2022-08-01', count:4},
    {date: '2022-08-08', count:4},
    {date: '2022-08-15', count:4},
    {date: '2022-08-22', count:4},
    {date: '2022-08-09', count:4},
    {date: '2022-08-10', count:4},
    {date: '2022-08-11', count:4},
    {date: '2022-08-12', count:4},
    {date: '2022-08-05', count:4},
    {date: '2022-07-29', count:4},
    {date: '2022-07-28', count:4},

    {date: '2022-09-05', count:4},
    {date: '2022-09-12', count:4},
    {date: '2022-09-19', count:4},
    {date: '2022-09-26', count:4},
    {date: '2022-09-06', count:4},
    {date: '2022-09-07', count:4},
    {date: '2022-09-08', count:4},
    {date: '2022-09-09', count:4},
    {date: '2022-09-27', count:4},
    {date: '2022-09-28', count:4},
    {date: '2022-09-29', count:4},
    {date: '2022-09-30', count:4},
    {date: '2022-09-14', count:4},
    {date: '2022-09-21', count:4},

    {date: '2022-10-10', count:4},
    {date: '2022-10-17', count:4},
    {date: '2022-10-24', count:4},
    {date: '2022-10-31', count:4},
    {date: '2022-10-11', count:4},
    {date: '2022-10-12', count:4},
    {date: '2022-10-19', count:4},
    {date: '2022-10-26', count:4},
    {date: '2022-11-02', count:4},
    {date: '2022-11-03', count:4},
    {date: '2022-11-04', count:4},
    {date: '2022-10-28', count:4},
    {date: '2022-10-21', count:4},
    {date: '2022-10-14', count:4},
    
    {date: '2022-11-14', count:4},
    {date: '2022-11-15', count:4},
    {date: '2022-11-16', count:4},
    {date: '2022-11-17', count:4},
    {date: '2022-11-18', count:4},
    {date: '2022-11-24', count:4},
    {date: '2022-11-30', count:4},
    {date: '2022-12-08', count:4},
    {date: '2022-12-16', count:4},
    {date: '2022-12-15', count:4},
    {date: '2022-12-14', count:4},
    {date: '2022-12-13', count:4},
    {date: '2022-12-12', count:4},
    
    {date: '2022-12-26', count:4},
    {date: '2023-01-02', count:4},
    {date: '2023-01-09', count:4},
    {date: '2023-01-16', count:4},
    {date: '2023-01-23', count:4},
    {date: '2022-12-30', count:4},
    {date: '2023-01-06', count:4},
    {date: '2023-01-13', count:4},
    {date: '2023-01-20', count:4},
    {date: '2023-01-27', count:4},
    {date: '2023-01-10', count:4},
    {date: '2023-01-11', count:4},
    {date: '2023-01-12', count:4},
    
]

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
            <Stack direction={'row'} width={'100%'} justifyContent={'flex-end'} alignItems={'center'}>
                
            </Stack>
        </Box>                
    )
}export default HeatMap;