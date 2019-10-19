import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
    card: {
      minWidth: 345,
      width: "30%",
      marginBottom: 20  
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      float: "right",
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: "red",
    },
  }));

const Recipe = ({title, calories, image, ingredients}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    return (
        <Card className={classes.card}>
            <CardHeader
            avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                {title.substring(0,1)}
                </Avatar>
            }
           
            title={title}
            />
            <CardMedia
            className={classes.media}
            image={image}
            title={title}
            />
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="span">
            {calories.toFixed(0)} calorías
            </Typography>
            <IconButton
                className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </IconButton>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph>Ingredientes:</Typography>
                <Typography paragraph>
                {ingredients.map(ingredient => (<li>{ingredient.text}</li>))}
                </Typography>
            </CardContent>
            </Collapse>
        </Card>
    )
}

export default Recipe