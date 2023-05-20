import React from 'react';
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

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

interface Props {
  post: Post;
}

const SinglePost: React.FC<Props> = ({ post }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={<Avatar className={classes.avatar}>{post.userId}</Avatar>}
        title={`@user${post.userId}`}
      />
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body1" component="p" className={classes.body}>
          {post.body}
        </Typography>
      </CardContent>
      <CardActions className={classes.footer}>
        <div>
          <IconButton className={classes.iconButton}>
            <FavoriteIcon />
          </IconButton>
          <IconButton className={classes.iconButton}>
            <ChatBubbleIcon />
          </IconButton>
        </div>
        <div className={classes.reactionCount}>
          <FavoriteIcon className={classes.reactionIcon} />
          <Typography variant="body2" component="span">
            {post.reactions}
          </Typography>
        </div>
      </CardActions>
    </Card>
  );
};

export default SinglePost;
