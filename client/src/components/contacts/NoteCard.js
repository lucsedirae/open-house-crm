//* Dependencies
import React from "react";

//* Material UI components, hooks, and icons
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

const NoteCard = () => {
  // const classes = useStyles();
  return (
    <div>
      <Card>
        <Typography variant="h5">Contact Notes</Typography>
        <CardContent>
          <TextField
            multiline
            rows={4}
            rowsMax={6}
            placeholder="Write note here..."
            variant="outlined"
          />
        </CardContent>
      </Card>
      <Button variant="contained" color="primary" style={{ marginTop: "1rem" }}>
        Submit
      </Button>
    </div>
  );
};

export default NoteCard;
