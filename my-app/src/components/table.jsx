/*
Authors: Amber Kusma and Emily Balboni
Date: 4/21/23
Professor Ruby
Practice 6
*/
import React, { Component } from "react";
import Container from "react-dom";
import TableBody from "./tableBody";

import { getRecipes } from "../services/recipesService";

//getting the properties of the recipes to send to the component
//using props to delete a recipe
//creating table below
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: getRecipes(),
    };
  }
  handleDelete = (recipe) => {
    const recipes = [...this.state.recipes];
    const newRecipes = recipes.filter((p) => p.id !== recipe.id);
    this.setState({ recipes: newRecipes });
  };
  render() {
    return (
      <React.Fragment>
        <table className="table">
          <TableBody
            recipes={this.state.recipes}
            onDelete={this.handleDelete}
          />
        </table>
      </React.Fragment>
    );
  }
}

export default Table;
