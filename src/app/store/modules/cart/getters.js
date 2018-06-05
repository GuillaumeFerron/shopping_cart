const getters = {
	cartItems: state => state.cartItems,
	cartQuantity: state => {
		return state.cartItems.reduce((acc, cartItem) => cartItem.quantity + acc, 0);
	},
	cartTotal: state => {
		return state.cartItems.reduce((acc, cartItem) => (cartItem.quantity * cartItem.price) + acc, 0).toFixed(2);
	}
};

export default getters