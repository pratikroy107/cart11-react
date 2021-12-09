import Cart from "./Cart";
import Navbar from "./Navbar";
import React from "react";
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Smart Watch',
          qty: 5,
          img: 'https://media.istockphoto.com/photos/classic-chronograph-wristwatch-picture-id165853310?b=1&k=20&m=165853310&s=170667a&w=0&h=r7GGjisdP_sM96-jzaRXx-vK5ui79EO7CpPNfuGqda4=',
          id: 1
        },
        {
          price: 999,
          title: 'Phone',
          qty: 2,
          img: 'https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNtYXJ0JTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
          id: 2
        },
        {
          price: 1099,
          title: 'Laptop',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
          id: 3
        }
      ]
    }
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
      //products: products
      products
    })
  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty !== 0) {
      products[index].qty -= 1;
    }
    this.setState({
      //products: products
      products
    })
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      if (product.qty > 0)
        cartTotal += product.qty * product.price
      return '';
    });
    return cartTotal;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{ fontWeight: 700, padding: 10, fontSize: 30 }}>TOTAL : ₹ {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
