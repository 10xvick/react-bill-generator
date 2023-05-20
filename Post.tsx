import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@material-ui/core';
import {
  ChatBubbleOutline as ChatBubbleIcon,
  FavoriteBorder as FavoriteIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 600,
      margin: '20px auto',
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
    },
    header: {
      paddingBottom: 0,
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.background.paper,
    },
    avatar: {
      backgroundColor: theme.palette.secondary.main,
    },
    body: {
      color: theme.palette.text.primary,
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 5,
      paddingBottom: 5,
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.background.paper,
    },
    iconButton: {
      padding: 8,
      color: theme.palette.text.secondary,
    },
    reactionCount: {
      display: 'flex',
      alignItems: 'center',
    },
    reactionIcon: {
      marginRight: 5,
    },
  })
);

const SinglePost = ({ post }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>

    </Card>
  );
};

export default function post({ post }) {
  return <div>abcde</div>;
}
