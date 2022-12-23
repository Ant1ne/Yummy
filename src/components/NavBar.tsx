import React from 'react'
import logo from "../assets/chef.png"
import { Link } from "react-router-dom";
import { Recipe } from '../App';
import Badge, {BadgeProps} from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

type Prop = {
  favRecipes: Recipe[];
};

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -8,
    top: 1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function NavBar({favRecipes}: Prop) {
  const favCount = favRecipes.length;
  return (
    <div className="navBar">
      <div className="logo">
        <img src={logo} alt="logo" height="50px" width="50px"></img>
        <h1 className="logoTitle">Yummy</h1>
      </div>
      <div className="subNav">
        <Link className='link' to="">Home</Link>
        <Link className='link' to="/recipes">Recipes</Link>
        <Badge badgeContent={favCount} color="primary">
          <Link className='link' to="/favorites">Favorites</Link>
        </Badge>
        <Link className='link' to="/contact">Contact</Link>
      </div>
    </div>
  )
}
