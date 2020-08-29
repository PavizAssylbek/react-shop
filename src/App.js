import React from 'react';
import Products from './components/Products'

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

  render() {
    return (
      <div className="grid-container" >
        <header>
          Its Just Header
        </header>
        <main>
          <div className="content">
            <div className="main">
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
