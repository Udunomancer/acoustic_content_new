// Material-UI Imports
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function ArticleAside() {
  return (
    <Box pt={1}>
      <Paper>
        <List>
          <ListItemLink href="#">
            <ListItemText primary="Sample Additional Content #1" />
          </ListItemLink>
          <Divider />
          <ListItemLink href="#">
            <ListItemText primary="Sample Additional Content #2" />
          </ListItemLink>
          <Divider />
          <ListItemLink href="#">
            <ListItemText primary="Sample Additional Content #3" />
          </ListItemLink>
        </List>
      </Paper>
    </Box>
  );
}

export default ArticleAside;
