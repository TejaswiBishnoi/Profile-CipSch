const { Box, Paper, Stack, Typography, useTheme, Button } = require("@mui/material");

function NavBar(){
    const thm = useTheme();
    return(
        <Box height={'60px'} width={'100%'}>
            <Stack height={'100%'} width={'100%'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack spacing={1} px={'20px'} height={'100%'} direction={'row'} alignItems={'center'} justifyContent={'center'}>
                    <img height={'35px'} width={'auto'} src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"/>
                    <Typography color={thm.headingColor} fontSize={'20px'} fontWeight={'700'}>CipherSchools</Typography>
                    <Button variant="outlined" sx={{border: 0, color: thm.headingColor}}>
                        <svg width="18" height="18" viewBox="0 0 27 27" fill="none" class="browse-icon" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 26C20.4037 26 26 20.4037 26 13.5C26 6.59625 20.4037 1 13.5 1C6.59625 1 1 6.59625 1 13.5C1 20.4037 6.59625 26 13.5 26Z" stroke="var(--text-color)" stroke-width="2" stroke-linejoin="round"></path><path d="M7.875 19.125L10.6875 10.6875L19.125 7.875L16.3125 16.3125L7.875 19.125Z" stroke="var(--text-color)" stroke-width="2" stroke-linejoin="round"></path><path d="M14.0303 14.0303L14.3839 14.3839L14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25C13.3011 14.25 13.1103 14.171 12.9697 14.0303C12.829 13.8897 12.75 13.6989 12.75 13.5C12.75 13.3011 12.829 13.1103 12.9697 12.9697C13.1103 12.829 13.3011 12.75 13.5 12.75C13.6989 12.75 13.8897 12.829 14.0303 12.9697C14.171 13.1103 14.25 13.3011 14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303Z" stroke="var(--text-color)"></path></svg>
                    </Button>
                </Stack>
            </Stack>
        </Box>
    )
}
export default NavBar;