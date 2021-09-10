import { FormControl, InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    select: {
        '&:before': {
            borderColor: '#ffffff',
        },
        '&:after': {
            borderColor: '#ffffff',
        }
    },
    icon: {
        fill: '#ffffff',
    },

}));

const LanguageFormControl = (props) => {
    const classes = useStyles();
    return (
        <FormControl variant='filled' color="secondary" className={classes.formControl} disabled={props.disabled}>
            <InputLabel id="language" color='secondary' className={classes.select}>Language</InputLabel>
            <Select
                labelId="language"
                id="language-select"
                onChange={props.handleChangeLanguage}
                className={classes.select}
                variant='filled'
                color='secondary'
                inputProps={{
                    classes: {
                        icon: classes.icon
                    }
                }}
            >
                <MenuItem value={null}>
                    <em>--All--</em>
                </MenuItem>
                <MenuItem value={'javascript'} >Javascript</MenuItem>
                <MenuItem value={'c++'}>C++</MenuItem>
                <MenuItem value={'c'}>C</MenuItem>
                <MenuItem value={'python'}>Python</MenuItem>
                <MenuItem value={'go'}>Go</MenuItem>
                <MenuItem value={'html'}>HTML</MenuItem>
            </Select>
        </FormControl>
    )
}

export default LanguageFormControl;