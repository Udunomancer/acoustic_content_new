// import Material-UI components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: theme.shadows[6],
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(1),
    paddingRIght: theme.spacing(1),
  },
  brandText: {
    fontSize: "1.5rem",
    "@media (min-width:600px)": {
      fontSize: "1.8rem",
    },
    fontWeight: "bold",
    fontStyle: "italic",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography className={classes.brandText}>acoustic</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
