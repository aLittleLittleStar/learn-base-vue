/*
* @Author: Star
* @Date:   2019-03-30 19:10:43
* @Last Modified by:   Star
* @Last Modified time: 2019-03-30 19:29:52
*/
import axios from 'axios'

const getdata = (info) => {
	axios
		.get('https://api.coindesk.com/v1/bpi/currentprice.json')
		.then(response => (this.info = response))
}

export default getdata