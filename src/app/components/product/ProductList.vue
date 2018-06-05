<template>
	<div id="products" class="box">
		<div class="products--header has-text-centered">
			<i class="fa fa-2x fa-user-circle"></i>
		</div>
		<div class="product-list">
			<div class="product-list--item" v-for="(item, index) in productItems" :key="index">
				<div>
					<h2 class="has-text-weight-bold">{{ item.title }}
						<span class="tag
                is-primary
                is-pulled-right
                has-text-white" @click="addCartItem(item)">
              Add to Cart
            </span>
					</h2>
					<p>{{ item.description }}</p>
					<span class="has-text-primary has-text-weight-bold">
            <i class="fa fa-usd"></i> {{ item.price }}
          </span>
				</div>
			</div>
		</div>
		<div class="product-count has-text-right">
			<span class="has-text-weight-bold"># of products: {{ productItems.length }}</span>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';

	export default {
		name: 'ProductList',
		created() {
			this.$store.dispatch('getProductItems');
		},
		computed: {
				...mapGetters([
						'productItems'
				])
		},
		methods: {
				...mapActions([
						'addCartItem'
				])
		}
	}
</script>

<style scoped>
	.tag {
		cursor: pointer;
	}

	.products--header {
		border-bottom: 1px solid #E8E8E8;
		padding-bottom: 15px;
	}

	.product-list {
		padding-top: 10px;
	}

	.product-list--item {
		padding: 10px 0;
	}
</style>
