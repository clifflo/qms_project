import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export function Foxy() {
  const classes = useStyles();

  return (
    <Container>
    <TextField
     id="standard-full-width"
     label="Label"
     style={{ margin: 8 }}
     placeholder="Placeholder"
     helperText="Title"
     fullWidth
     margin="normal"
     InputLabelProps={{
       shrink: true,
     }}
     />
    <TextField
     id="filled-multiline-flexible"
     label="Multiline"
     multiline
     fullWidth
     rows={4}
     rowsMax={4}
     variant="outlined"
     />
    </Container>

  );
}
