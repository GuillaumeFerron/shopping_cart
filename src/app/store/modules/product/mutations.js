import * as types from './mutation-types.js'

const mutations = {
	[types.UPDATE_PRODUCT_ITEMS] (state, payload) {
		state.productItems = payload;
	}
};

export default mutations