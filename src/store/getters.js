/*
* @Author: Star
* @Date:   2019-03-28 11:31:20
* @Last Modified by:   Star
* @Last Modified time: 2019-03-28 14:47:23
*/

export const saleProducts =  (state) => {
	let saleProducts = state.products.map(product => {
		return {
			name: product.name,
			price: product.price / 2
		}
	})
	return saleProducts;
}