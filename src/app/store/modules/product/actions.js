import axios from 'axios'
import * as types from './mutation-types'

const actions = {
	getProductItems({commit}) {
		axios.get('/api/products').then((response) => {
			commit(types.UPDATE_PRODUCT_ITEMS, response.data)
		});
	},
	addProductItem ({ commit }, productItem) {
		axios.post('/api/product', productItem).then((response) => {
			commit(types.UPDATE_PRODUCT_ITEMS, response.data)
		});
	},
	removeProductItem ({ commit }, productItem) {
		axios.post('/api/product/delete', productItem).then((response) => {
			commit(types.UPDATE_PRODUCT_ITEMS, response.data)
		});
	},
	removeAllProductItems ({ commit }) {
		axios.post('/api/product/delete/all').then((response) => {
			commit(types.UPDATE_PRODUCT_ITEMS, response.data)
		});
	}
}

export default actions