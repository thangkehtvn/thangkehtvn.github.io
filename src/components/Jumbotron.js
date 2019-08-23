import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 40,
        width: 250,
        height: 250,
    },
});
export default function Jumbotron() {
    const classes = useStyles();
    return (
        <Grid container justify="center" alignItems="center">
            <Avatar alt="ThangNuyen" src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-1/c0.80.480.480a/p480x480/51298978_2086407851474019_4615750440468873216_n.jpg?_nc_cat=108&_nc_oc=AQmAKJkjYy_ru7_cr-EADhJG7vR9k7bPeBeDUROltOIcJqj2Wv2IztSGGvGoUayHPZk&_nc_ht=scontent.fsgn2-3.fna&oh=c8d6c125447ed51dde704bbe351b6410&oe=5E0CD36D" className={classes.bigAvatar} />
        </Grid>
    );
}