/*
Authors: Amber Kusma and Emily Balboni
Date: 4/21/23
Professor Ruby
Practice 6
*/
import React, { Component } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";

class TableBody extends Component {
  render() {
    const { recipes } = this.props;

    //returning tbody that has mapped our array of recipe values, creates a card for each of the values in the array
    //displaying them in a row, delete button removes a card
    return (
      <tbody>
        <Row>
          {recipes.map((recipe, index) => (
            <Col className="col-3">
              <body>
                <div class="card" style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title">{recipe.name}</h5>
                    <p class="card-text">{recipe.type}</p>
                    <p class="card-text">{recipe.summary}</p>
                    <button
                      onClick={() => {
                        this.props.onDelete(recipe);
                      }}
                      type="button"
                      class="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </body>
            </Col>
          ))}
        </Row>
      </tbody>
    );
  }
}

export default TableBody;
