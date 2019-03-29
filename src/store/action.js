/*
* @Author: Star
* @Date:   2019-03-28 11:31:11
* @Last Modified by:   Star
* @Last Modified time: 2019-03-28 16:07:34
*/
export const minusPriceAsync = (context, payload) => {
	setTimeout(() => {
		context.commit('minusPrice', payload);
	}, 1000)
}