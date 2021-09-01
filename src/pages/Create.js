import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { FormControlLabel } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const Create = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("money");
  const history = useHistory();
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const detailsHandler = (event) => {
    setDetails(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    if (title === "") {
      setTitleError(true);
    }

    if (details === "") {
      setDetailsError(true);
    }
    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          details,
          category,
        }),
      }).then(() => history.push("/"));
      console.log(title, details, category);
    }
  };

  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="false" onSubmit={submitHandler}>
        <TextField
          onChange={titleHandler}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          className={classes.field}
          error={titleError}
        />
        <TextField
          onChange={detailsHandler}
          label="Details"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          className={classes.field}
          multiline
          minRows={4}
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel component="legend">Note Category</FormLabel>
          <RadioGroup value={category} onChange={categoryHandler}>
            <FormControlLabel control={<Radio />} label="Money" value="money" />
            <FormControlLabel control={<Radio />} label="Work" value="work" />
            <FormControlLabel
              control={<Radio />}
              label="Health"
              value="health"
            />
            <FormControlLabel
              control={<Radio />}
              label="Personal"
              value="personal"
            />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
