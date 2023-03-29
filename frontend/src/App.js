import logo from './logo.svg';
import './App.css';
import { Stack, ThemeProvider, createTheme } from '@mui/material';
import { createContext, useState } from 'react';
import dataContext from './components/datacontext';
import Userbox from './components/userbox';
import setdataContext from './components/setdatacontext';
import MainContainer from './components/maincontainer';

function App() {
    const theme = new createTheme({
        palette:{
            mode: 'light',
            orange:{
                main: '#f3912e',
                contrastText: '#ffffff'
            },
            dark:{
                main: 'rgba(8,15,15,.85)',
                contrastText: '#ffffff'
            },
        },
        typography:{
            name_large:{
                //fontFamily: "Open Sans, Roboto, sans-serif",
                fontSize: 24,
                fontWeight: 700
            },
            name_greeting:{
                //fontFamily: "\"Open Sans\", Roboto, sans-serif",
                fontSize: 20,
                fontWeight: 400,
                lineHeight: '25px'
            },
            name_email:{
                fontSize: 16,
                fontWeight: 400,
                lineHeight: '20px'
            }
        },
        customTextField:{
            background: '#f2f5fa',
            labelcolor: '#464b4b'
        },
        customMainContainer:{
            background: '#f2f5fa'
        },
        headFont: '#2c3d4f',
        mainTextBack: "#ffffff",
        mainTextColor: "#464b4b",
    }) ;
    
    const dataa = {
        fname: "Tejaswi",
        lname: "Tejaswi",
        email: 'tejaswi@example.com',
        followers: 0,
        mobile: '9991233051'
    }
    const [data, setData] = useState(dataa)
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <dataContext.Provider value={data}>
                    <setdataContext.Provider value={setData}>
                        <Stack overflow={'visible'} height={'100vh'} direction={'column'}>
                            <Userbox/>
                            <MainContainer/>
                        </Stack>
                    </setdataContext.Provider>
                </dataContext.Provider>
            </ThemeProvider>
        </div>
    );
}

export default App;
