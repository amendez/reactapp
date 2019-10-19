import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const useStyles = makeStyles(theme => ({
  menuBar: {
    marginBottom: 10,
    backgroundColor: "#3f51b5"
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 2, 1, 2),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 500,
    },
  },
}));

export default function MenuBar({search, updateSearch, getSearch, spinner}) {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.menuBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Buscador de recetas
          </Typography>
          <form onSubmit={getSearch}>
          <div className={classes.search}>
            <InputBase
              placeholder="Buscar…"
              disabled={spinner}
              value={search}
              onChange={updateSearch}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          <Button variant="contained" color="secondary" startIcon={<Search />} type="submit" >
            <Typography>
              {spinner?"":"Buscar"}
            </Typography>
            <Loader type="ThreeDots" color="white" width={68} height={18} visible={spinner}/>
          </Button>
          </div>
          </form>
        </Toolbar>
      </AppBar>
    </div>
  );
}
