import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Avatar, IconButton, makeStyles, Typography } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { blue, green, pink, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.category === "work") {
        return yellow[400];
      }
      if (note.category === "money") {
        return green[400];
      }
      if (note.category === "health") {
        return pink[400];
      }
      return blue[400];
    },
  },
});
export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);
  return (
    <div>
      <Card elevation={1} className={classes.avatar}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
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
