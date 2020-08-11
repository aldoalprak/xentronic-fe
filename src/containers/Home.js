import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './../components/Navbar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar/>
    </div>
  );
}