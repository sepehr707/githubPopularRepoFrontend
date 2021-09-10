import {Card, Grid, makeStyles, CircularProgress, Typography} from "@material-ui/core";
import TitleInfo from "./TitleInfo";
import StarInfo from "./StarInfo";


const useStyles = makeStyles((theme) => ({
    card: {
        textAlign: 'center',
        color: theme.palette.text.primary,
        height: 149,
    },
    root: {
        display: "flex",
        flexDirection: "row",

    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        display: 'flex'
    },
    imageDiv: {
        width: '33%',
        height: '100%'
    },
    infoDiv: {
        width: '67%',
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between"
    }
}));

const GridItem = (props) => {
    const classes = useStyles();
    return (
        <>
            {/*<Grid item xs={1}></Grid>*/}
            <Grid item xs={4} key={props.repository.key}>
                <Card className={classes.card}>
                    <div className={classes.root}>
                        <div className={classes.imageDiv}>
                            <img className={classes.image} src={props.repository.owner.avatar_url}/>
                        </div>
                        <div className={classes.infoDiv}>
                            <TitleInfo name={props.repository.name} description={props.repository.description} language={props.repository.language} url={props.repository.html_url}/>
                            <StarInfo id={props.repository.id} stars={props.repository.stargazers_count + props.repository.starred} starred={props.repository.starred} updateStarred={props.updateStarred}/>
                        </div>

                    </div>

                </Card>
            </Grid>
            {/*<Grid item xs={1}></Grid>*/}
        </>

    )
}

export default GridItem;