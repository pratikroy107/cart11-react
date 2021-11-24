import React from 'react';

const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img
                    style={styles.cartIcon}
                    src="https://cdn-icons.flaticon.com/png/512/3002/premium/3002254.png?token=exp=1637686577~hmac=d7f47fcd4c5c30c0595953665d9da901"
                    alt="cart-icon"
                />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    );
}


const styles = {
    cartIcon: {
        height: 32,
        marginRight: 22
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 1,
        top: -9
    }
};

export default Navbar;