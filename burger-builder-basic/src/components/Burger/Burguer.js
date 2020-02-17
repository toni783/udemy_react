import React from "react";
import classes from "./Burger.module.css";
import BurguerIngredient from "./BurgerIngredient/BurgerIngredient";
const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      // with array props we have the number of elements that we are going to have in our component, based on the number of ingredients
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurguerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .flat(); // we can use flat to flatten the array and get the length
  // .reduce((previous, current) => {
  //   return previous.concat(current);
  // }, []); // we can use reduce to flatten the array and get the length

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurguerIngredient type="bread-top" />
      {transformedIngredients}

      <BurguerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
