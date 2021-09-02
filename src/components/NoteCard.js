import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { IconButton, makeStyles, Typography } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles({
  hoverElement: {
    backgroundColor: green.A200,
    "&:hover": {
      backgroundColor: "green",
    },
  },
});
export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles();
  return (
    <div>
      <Card elevation={1} className={classes.hoverElement}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
