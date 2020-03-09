# Online Marketplace

Online marketplace. An app that uses the Best Buy API to display the available items for sale. when an item is clicked on.

## Built With

- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React.js](https://reactjs.org/)
- [Node.JS](https://nodejs.org/en/)
- [Bootstrap](https://getbootstrap.com/)

## Installation Guide

First navigate to your terminal and clone the repository(https://github.com/kokevin678/online_marketplace.git). Then install the dependencies in terminal using by typing in "npm install". Run npm start in terminal using to run React.

## Demo

[Demo](/client/public/onlineMarket.gif)

## Code Snippets

Load product from Best Buy API

```js
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
```

Load category of product from Best Buy

```js
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
```

## Deployed Link

- [See Live Site]()

## Authors

**Kevin Ko**

- [Portfolio](https://kokevin678.github.io/responsive-portfolio/)
- [Github](https://github.com/kokevin678)
- [LinkedIn](https://www.linkedin.com/)
