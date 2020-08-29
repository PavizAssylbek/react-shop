import React from 'react';
import Products from './components/Products'
import Filter from "./components/Filter"
import Cart from "./components/Cart"

import data from "./data.json"

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: [],
      size: "",
      sort: ""
    }
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems
    this.setState({ cartItems: cartItems.filter(x => x._id !== product._id) })
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems;
    let alreadyInCart = false
    cartItems.forEach(item => {
      if (item._id === product._id) {
        item.count++
        alreadyInCart = true
      }
    })
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 })
    }
    this.setState({ cartItems })
  }

  filterProducts = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      this.setState({ size: e.target.value, products: data.products })
    } else {
      this.setState({
        size: e.target.value,
        products: data.products.filter(product => product.availableSizes.indexOf(e.target.value) >= 0)
      })
    }
  }

  sortProducts = (event) => {
    // impl
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
              ? a.price < b.price
                ? 1
                : -1
              : a._id < b._id
                ? 1
                : -1
        ),
    }));
  };

  render() {
    return (
      <div className="grid-container" >
        <header>
          Its Just Header
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
              <Products
                products={this.state.products}
                addToCart={this.addToCart}
              />
            </div>
            <aside className="sidebar">
              <Cart
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
              />
            </aside>
          </div>
        </main>
        <footer>
          Its Just Footer
        </footer>
      </div>
    );
  }
}

export default App;
