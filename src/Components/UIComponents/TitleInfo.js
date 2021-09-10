import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    info: {
        textAlign: "left",
        paddingLeft: theme.spacing(2)
    },
    url: {
      color: theme.palette.text.primary
    }
}));

const TitleInfo = props => {
    const classes = useStyles();
    return (
        <div className={classes.info}>
            <Typography variant='h4'><a href={props.url} target='_blank' className={classes.url}>{props.name}</a></Typography>
            <Typography variant='h6'>{props.description}</Typography>
            <Typography variant='h6' color='textSecondary'>{props.language}</Typography>
        </div>
    )
}

export default TitleInfo;