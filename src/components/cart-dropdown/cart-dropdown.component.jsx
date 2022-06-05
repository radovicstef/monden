import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items"></div>
            <button className="cart-go-to-checkout">go to checkout</button>
        </div>
    )
}

export default CartDropdown;