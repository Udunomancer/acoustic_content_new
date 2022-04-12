import { DateTime } from "luxon";
// import Material-UI components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  articleHeader: (props) => ({
    backgroundImage: "url(" + props.imgURL + ")",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }),
  articleHeaderContent: {
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5))",
    padding: theme.spacing(3),
  },
  articleHeaderText: {
    color: theme.palette.primary.contrastText,
  },
}));

function ArticleHeader({ heading, author, date, mainImage }) {
  const classes = useStyles({ imgURL: mainImage });
  const formattedDate = DateTime.fromISO(date).toLocaleString(
    DateTime.DATETIME_MED
  );

  return (
    <Paper className={classes.articleHeader}>
      <Grid container className={classes.articleHeaderContent}>
        <Grid item md={6}>
          <Typography
            variant="h2"
            component="h1"
            className={classes.articleHeaderText}
          >
            {heading}
          </Typography>
          <Typography variant="subtitle1" className={classes.articleHeaderText}>
            {author} - {formattedDate}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ArticleHeader;
