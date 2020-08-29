import React from 'react';
import Products from './components/Products'
import Filter from "./components/Filter"

import data from "./data.json"

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: ""
    }
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
              <Products products={this.state.products} />
            </div>
            <aside className="sidebar">

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
