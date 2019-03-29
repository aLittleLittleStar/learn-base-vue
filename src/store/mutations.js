/*
* @Author: Star
* @Date:   2019-03-28 11:31:38
* @Last Modified by:   Star
* @Last Modified time: 2019-03-28 15:12:53
*/
export const minusPrice = (state, payload) => {
	let newPrice = state.products.forEach(product => {
		product.price -= payload
	})
}