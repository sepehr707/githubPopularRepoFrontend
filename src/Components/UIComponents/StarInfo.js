import {makeStyles, Typography} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
    starDiv: {
        display: "flex",
        justifyContent: "space-between",
        width: "90%",
        paddingLeft: theme.spacing(2),
        paddingBottom: theme.spacing(1)
    },
    star : {
        color: '#b6a916',
        cursor: "pointer"
    }
}));

const StarInfo = props => {
    const classes = useStyles();
    const addToFavorites = () => {
        props.updateStarred(props.id, true);
    }

    const removeFromFavorites = () => {
        props.updateStarred(props.id, false);
    }
    return (
        <div className={classes.starDiv}>
            <Typography variant='h6'><strong>{props.stars}</strong> stars</Typography>
            {props.starred && <StarIcon className={classes.star} onClick={removeFromFavorites}></StarIcon>}
            {!props.starred && <StarBorderIcon className={classes.star} onClick={addToFavorites}></StarBorderIcon>}
        </div>
    )
}

export default StarInfo;