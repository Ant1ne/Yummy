import React, {useState} from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { Recipe } from '../../App'

type Prop = {
  recipeItem: Recipe;
  setFavRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
  favRecipes: Recipe[];
}

type ExpandMoreProps = IconButtonProps & {
  expand: boolean;
}



const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeItem({ recipeItem, setFavRecipes, favRecipes }: Prop) {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    function addFavoriteHandler() {
        // favRecipes : copy favRecipes add new one
      // [...favRecipes,recipeItem ]
      const result = [...favRecipes, recipeItem];
      setFavRecipes(result);
    }

    // change icon color
    let isFavorite = favRecipes.some(
      (recipe) => recipe.idMeal === recipeItem.idMeal
    );

  return (
    <div className='mealCard'>
      <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {/* {recipeItem.strMeal[0]} */}
            {recipeItem.strMeal.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={recipeItem.strMeal}
        subheader={recipeItem.strCategory}
      />
      <CardMedia
        component="img"
        height="194"
        image={recipeItem.strMealThumb}
        alt={recipeItem.strMeal}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Ingredients:
        </Typography>
          <List>
            <ListItem>1. {recipeItem.strIngredient1} : {recipeItem.strMeasure1}</ListItem>
            <ListItem>2. {recipeItem.strIngredient2} : {recipeItem.strMeasure2}</ListItem>
            <ListItem>3. {recipeItem.strIngredient3} : {recipeItem.strMeasure3}</ListItem>
          </List>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon
            onClick={addFavoriteHandler}
            sx={{ color: isFavorite ? red[500] : "primary" }}
          />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Instructions:</Typography>
          <Typography paragraph>
            {recipeItem.strInstructions}
          </Typography>
        </CardContent>
      </Collapse>
      </Card>
    </div>
  );
}
