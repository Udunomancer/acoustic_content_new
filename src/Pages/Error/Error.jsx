// import Material-UI components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: theme.spacing(1),
  },
  paper: {
      margin: 0,
      marginTop: theme.spacing(3),
  },
}));

function Error() {
    const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Box className={classes.container}>
        <Typography variant="h4">404</Typography>
        <Typography variant="subtitle1">Article Not Found</Typography>
      </Box>
    </Paper>
  );
}

export default Error;
