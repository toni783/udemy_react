import axios from 'axios'

const axiosOrders = axios.create({
    baseURL: 'https://react-my-burger-36ace.firebaseio.com/',
})
export default axiosOrders
