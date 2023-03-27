import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { createContext } from 'react';
import dataContext from './components/datacontext';
import Userbox from './components/userbox';

function App() {
    const theme = new createTheme({
        palette:{
            mode: 'light'
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
        }
    }) ;
    
    const data = {
        fname: "Tejaswi",
        lname: "Tejaswi",
        email: 'tejaswi@example.com',
        followers: 0
    }
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <dataContext.Provider value={data}>
                    <Userbox/>
                </dataContext.Provider>
            </ThemeProvider>
        </div>
    );
}

export default App;
