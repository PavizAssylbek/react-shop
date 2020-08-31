import React from 'react';
import Products from './components/Products'
import Filter from "./components/Filter"
import Cart from "./components/Cart"

import store from "./store"

import { Provider } from 'react-redux';

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div className="grid-container" >
          <header>
            Its Just Header
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter />
                <Products />
              </div>
              <aside className="sidebar">
                <Cart />
              </aside>
            </div>
          </main>
          <footer>
            Its Just Footer
        </footer>
        </div>
      </Provider>
    );
  }
}

export default App;
