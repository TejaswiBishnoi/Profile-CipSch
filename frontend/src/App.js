import logo from './logo.svg';
import './App.css';
import { Stack, ThemeProvider, createTheme, useTheme } from '@mui/material';
import { createContext, useState } from 'react';
import dataContext from './components/datacontext';
import darkContext from './components/darkcontext';
import Userbox from './components/userbox';
import setdataContext from './components/setdatacontext';
import setdarkContext from './components/setdarkcontext';
import MainContainer from './components/maincontainer';
import NavBar from './components/NavBar/navbar';

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
            unselect:{
                main: '#f2f5fa',
                contrastText: '#2c3232'
            },
            interest:{
                main: 'rgba(243, 145, 46, 0.1)',
                contrastText: '#f3912e'
            },
            select:{
                contrastText: '#444a4a',
                main: '#ffffff'
            }
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
        mainTextColor: "#444a4a",
        headingColor: "#222831"
    }) ;
    const [lmode, setLmode] = useState(true);
    const darkTheme = createTheme({
        palette:{
            mode: 'dark',
            orange:{
                main: '#f3912e',
                contrastText: '#ffffff'
            },
            dark:{
                main: 'rgba(8,15,15,.85)',
                contrastText: '#ffffff'
            },
            unselect:{
                main: '#15181e',
                contrastText: 'rgba(255, 255, 255, 0.85)'
            },
            interest:{
                main: 'rgba(243, 145, 46, 0.1)',
                contrastText: '#f3912e'
            },
            select:{
                contrastText: '#444a4a',
                main: '#ffffff'
            }
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
            background: '#15181e',
            labelcolor: 'rgba(255, 255, 255, 0.75)'
        },
        customMainContainer:{
            background: '#15181e'
        },
        headFont: '#f0f0f0',
        mainTextBack: "#262c36",
        mainTextColor: "#464b4b",
        headingColor: "#eeeeee"
    })
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
            <ThemeProvider theme={lmode?theme:darkTheme}>
                <dataContext.Provider value={data}>
                <darkContext.Provider value={lmode}>
                    <setdataContext.Provider value={setData}>
                    <setdarkContext.Provider value={setLmode}>
                        <Stack overflow={'visible'} height={'100vh'} direction={'column'}>
                            <NavBar/>
                            <Userbox/>
                            <MainContainer/>
                        </Stack>
                    </setdarkContext.Provider>
                    </setdataContext.Provider>
                </darkContext.Provider>
                </dataContext.Provider>
            </ThemeProvider>
        </div>
    );
}

export default App;
