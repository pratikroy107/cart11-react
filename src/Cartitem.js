import React from 'react';

class CartItem extends React.Component {
    //creating default state in constructor

    //either bind like this(below) or use arrow func... never use normal function
    // this.increaseQuantity = this.increaseQuantity.bind(this);

    increaseQuantity = () => {
        //this.state.qty++;
        //setState = shallow merging happens here, i.e., react will only chng qty & will not touch other values & will automatically re-render our component
        //setState is asynchronous- if i print qty value after setState is called we'll get previous value... but if called along with setState by putting comma, then value will be the new

        //2 forms =>
        //setState form 1
        this.setState({
            qty: this.state.qty + 1
        });

        //setState form 2
        /*this.setState ((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });*/
        //console.log(this.state.qty);
    }

    decreaseQuantity = () => {
        if (this.state.qty !== 0) {
            this.setState({
                qty: this.state.qty - 1
            });
        }
    }

    deleteQuantity = () => {
        this.setState({
            qty: 0
        });
    }

    render() {
        //console.log("this.pros => ", this.props);
        const { price, title, qty} = this.props.product;
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
                            onClick={this.increaseQuantity}
                        />
                        <img alt="decrease"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            onClick={this.decreaseQuantity}
                        />
                        <img alt="delete"
                            className="action-icons"
                            src="https://cdn-icons.flaticon.com/png/512/3569/premium/3569930.png?token=exp=1636986179~hmac=e1fdcca6ed35446ca395dc34634f89aa"
                            onClick={this.deleteQuantity}
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