import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import {useHistory} from 'react-router-dom';
import classes from './Header.module.css';
import {useContext, useState} from "react";
import LanguageFormControl from "./LanguageFormControl";
import Context from "../../store/Context";

const Header = () => {
    const context = useContext(Context);
    const history = useHistory()
    const handleLanguageChange = (event) => {
        context.setLanguage(event.target.value);
    };

    const historyOnClickHandler = () => {
        context.setShowAll(!context.showAll);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <LanguageFormControl handleChangeLanguage={handleLanguageChange} disabled={!context.showAll}/>
                    <Typography variant="h4" className={classes.title}>
                        Github Popular Repositories
                    </Typography>
                    <Button variant='outlined' color="inherit" onClick={historyOnClickHandler}>{context.showAll ? 'Starred' : 'Show All'}</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;