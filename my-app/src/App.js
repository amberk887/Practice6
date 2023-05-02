/*
Authors: Amber Kusma and Emily Balboni
Date: 4/21/23
Professor Ruby
Practice 6
*/
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/table";
import recipes, { getRecipes } from "./services/recipesService";
import { Tab } from "bootstrap";
import TableBody from "./components/tableBody";
import Table from "./components/table";
import { Container, Col, Row, Form, Collapse } from "react-bootstrap";

//dispalying table and displaying number of recipes
function App() {
  const count = recipes.length;
  return (
    <div className="container">
      <h3>There are {count} recipes</h3>

      <Table />
    </div>
  );
}

export default App;
