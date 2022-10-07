import axios from "axios"

export default class productService {
    getProducts() {
        return axios.get("http://localhost:8082/api/products/getall")
    }

}
