import {CircularProgress, Grid, makeStyles} from "@material-ui/core";
import {useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getLastWeekRepositories} from '../../services/github.service';
import {addToFavorites, getRepositories, removeFromFavorites} from "../../redux/actions/github.action";
import GridItem from "../UIComponents/GridItem";
import Context from "../../store/Context";

const xs = 4;

const mapGithubRepoData = (val) => {
    return {
        id: val.id,
        name: val.name,
        git_url: val.git_url,
        html_url: val.html_url,
        owner : {
            id: val.owner.id,
            login: val.owner.login,
            avatar_url: val.owner.avatar_url,
        },
        description: val.description?.length > 70 ? val.description.slice(0,40) + '...' : val.description,
        created_at: val.created_at,
        updated_at: val.updated_at,
        pushed_at: val.pushed_at,
        stargazers_count: val.stargazers_count,
        language: val.language,
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 20
    }
}));

const GithubRepo = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {loading, repositories, error} = useSelector(state => state);
    const context = useContext(Context);
    useEffect(() => {
        getGithubRepo();
    }, [context.language])

    const updateStarred = (id, status) => {
        if(status) {
            dispatch(addToFavorites(id))
        } else {
            dispatch(removeFromFavorites(id))
        }
    }

    const getGithubRepo = async () => {
        dispatch(getRepositories());
        const action = await getLastWeekRepositories(context.language);
        dispatch(action);
    }
    return (
        <div className={classes.root}>
            {loading && <CircularProgress />}
            {!loading &&
            <Grid container spacing={3}>
                {repositories.filter(val => context.showAll || val.starred).map(val => <GridItem repository={val} updateStarred={updateStarred}/>)}
            </Grid>}
        </div>
    )
}


export default GithubRepo;

/*
<div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={xs}>
                    <Paper className={classes.paper}>
                        <img src="https://avatars.githubusercontent.com/u/5781325?v=4"/>
                        this is x3
                    </Paper>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={xs}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={xs}>
                    <Paper className={classes.paper}>
                        <img className={classes.image} src="https://avatars.githubusercontent.com/u/5781325?v=4"/>
                        this is x3
                    </Paper>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={xs}>
                    <Card className={classes.paper}>
                        <div className={classes.imageDiv}>
                            <img className={classes.image} src="https://avatars.githubusercontent.com/u/18014107?v=4"/>
                        </div>

                        this is x3</Card>
                </Grid>
                <Grid item xs={1}></Grid>

            </Grid>
        </div>
 */