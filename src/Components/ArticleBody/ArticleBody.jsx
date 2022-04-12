import ReactHTMLParser from "react-html-parser";
// import Material-UI components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  bodyContainer: {
    padding: theme.spacing(0, 2),
  },
}));

function ArticleBody({ body }) {
  const classes = useStyles();

  // Function to parse rawHTML provided from Content API body
  // Input: HTML (STRING)
  // Output: Equivalent React Element
  function parseBodyHTML(rawHTML) {
    return ReactHTMLParser(rawHTML);
  }

  return (
    <Box component="section" className={classes.bodyContainer}>
      {body.map((html) => parseBodyHTML(html))}
    </Box>
  );
}

export default ArticleBody;
