import * as types from './mutation-types.js'

const mutations = {
	[types.UPDATE_CART_ITEMS] (state, payload) {
		return state.cartItems = payload;
	}
};

export default mutations