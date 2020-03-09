import React, { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";
import API from "../utils/API";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    products: [],
    name: "",
    source: "",
    shortDescription: "",
    image: ""
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getProducts("")
      .then(res => {
        console.log(res);
        this.setState({
          products: res.data,
          name: res.data.name,
          source: res.data.source,
          shortDescription: res.data.shortDescription,
          image: res.data.image
        });
      })
      .catch(err => console.log(err));
  };

  loadCategory = category => {
    API.getCategory(category)
      .then(res => {
        this.setState({
          products: res.data,
          name: res.data.name,
          source: res.data.source,
          shortDescription: res.data.shortDescription,
          image: res.data.image
        });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    console.log("this was clicked");
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  saveProductToCart = () => {
    API.saveProduct({
      title: this.state.title,
      seller: this.state.seller,
      description: this.state.description,
      thumbnail_url: this.state.thumbnail_url
    }).catch(err => console.log(err));
    console.log("Save products click");
  };

  render() {
    return (
      <Container className="justify-content-md-center">
        <Row className="justify-content-md-center">
          <h1>Pick a category</h1>
        </Row>
        <Row className="justify-content-md-center">
          <Button
            value={this.state.camera}
            onClick={() => this.loadCategory("camera")}
          >
            Camera
          </Button>
          <Button
            value={this.state.television}
            onClick={() => this.loadCategory("television")}
          >
            Television
          </Button>
          <Button
            value={this.state.computer}
            onClick={() => this.loadCategory("computer")}
          >
            Computer
          </Button>
          <Button
            value={this.state.monitor}
            onClick={() => this.loadCategory("monitor")}
          >
            Monitor
          </Button>
        </Row>
      </Container>
    );
  }
}

export default Home;
