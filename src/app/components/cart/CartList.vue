<template>
	<div id="cart">
		<div class="cart--header has-text-centered">
			<i class="fa fa-2x fa-shopping-cart"></i>
		</div>
		<ul v-if="cartItems.length > 0">
			<li class="cart-item" v-for="(item, index) in cartItems" :key="index">
				<div>
					<p class="cart-item--title is-inline">{{ item.title }}</p>
					<div class="is-pulled-right">
						<i class="fa fa-arrow-circle-up cart-item--modify" @click="addCartItem(item)"></i>
						<i class="fa fa-arrow-circle-down cart-item--modify" @click="removeCartItem(item)"></i>
					</div>
					<div class="cart-item--content">
            <span class="cart-item--price
                has-text-primary
                has-text-weight-bold">
              {{ item.price }} each
            </span>
						<span class="cart-item--quantity
                has-text-grey
                is-pulled-right">
              Quantity: {{ item.quantity }}
            </span>
					</div>
				</div>
			</li>
			<div class="cart-details">
				<p>Total Quantity: <span class="has-text-weight-bold">{{ cartQuantity }}</span></p>
				<p class="cart-remove-all--text" @click="removeAllCartItems">
					<i class="fa fa-trash"></i>Remove all
				</p>
			</div>
		</ul>
		<div class="content has-text-centered" v-else>Add items</div>
		<button class="button is-primary">
			Checkout (<span class="has-text-weight-bold">{{ cartTotal }}$</span>)
		</button>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';

	export default {
		name: 'CartList',
		created() {
			this.$store.dispatch('getCartItems')
		},
		computed: {
			...mapGetters([
				'cartItems',
				'cartTotal',
				'cartQuantity'
			])
		},
		methods: {
			...mapActions([
				'addCartItem',
				'removeCartItem',
				'removeAllCartItems'
			])
		}
	}
</script>

<style scoped>
	#cart {
		height: 100%;
		padding: 30px 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.cart-empty-text {
		padding: 10px 0;
	}

	.cart--header {
		border-bottom: 1px solid #E8E8E8;
		padding-bottom: 15px;
	}

	.cart-item {
		padding: 10px 0;
	}

	.cart-item i:hover {
		cursor: pointer;
	}

	.cart-details {
		font-size: 12px;
		display: flex;
		justify-content: space-between;
		padding: 15px;
	}

	.cart-remove-all--text {
		cursor: pointer;
	}

	.cart-remove-all--text .fa {
		padding-right: 5px;
	}
</style>
