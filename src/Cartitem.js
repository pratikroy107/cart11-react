import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }

    increaseQuantity = () => {

    }

    render() {
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty : {qty}</div>
                    <div className="cart-item-actions">
                        {/*buttons*/}
                        <img alt="increase"
                        className="action-icons" 
                        src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1636986152~hmac=b7c09d07334c133943e324f37715fd3e"
                        onClick= {this.increaseQuantity}
                        />
                        <img alt="decrease"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        />
                        <img alt="delete"
                        className="action-icons"
                        src="https://cdn-icons.flaticon.com/png/512/3569/premium/3569930.png?token=exp=1636986179~hmac=e1fdcca6ed35446ca395dc34634f89aa"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        //using comma coz object, using camel case for JS property
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;