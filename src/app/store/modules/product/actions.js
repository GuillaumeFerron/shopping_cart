import axios from 'axios'

const actions = {
	getProductItems({commit}) {
		axios.get('/api/products').then((response) => {
			commit('UPDATE_PRODUCT_ITEMS', response.data)
		});
	},
	addProductItem ({ commit }, productItem) {
		axios.post('/api/product', productItem).then((response) => {
			commit('UPDATE_PRODUCT_ITEMS', response.data)
		});
	},
	removeProductItem ({ commit }, productItem) {
		axios.post('/api/product/delete', productItem).then((response) => {
			commit('UPDATE_PRODUCT_ITEMS', response.data)
		});
	},
	removeAllProductItems ({ commit }) {
		axios.post('/api/product/delete/all').then((response) => {
			commit('UPDATE_PRODUCT_ITEMS', response.data)
		});
	}
}

export default actions