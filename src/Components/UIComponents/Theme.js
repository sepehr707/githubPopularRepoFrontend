import {createTheme} from "@material-ui/core/styles";

const Theme = () => {
    return createTheme({
        palette: {
            primary: {
                main: '#36308e',
            },
            secondary: {
                main: '#fcfcfd',
            },
        },
        typography:{
            fontFamily:"Montserrat, Helvetica",
            h4:{
                fontSize: "1.3rem",
            },
            h5:{
                fontSize: "1.0rem",
            },
            h6: {
                fontSize:"0.8rem",
            }
        }
    })
}

export default Theme;
