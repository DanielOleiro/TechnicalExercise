import axios from "axios";

const ApiUrl = "http://localhost:8888/";

export async function getByMonthSales(categoryId, productId, brandId){
    return await axios.get(`${ApiUrl}sales/category/${categoryId}/product/${productId}/brand/${brandId}`)
}

export async function getCategories(){
    return await axios.get(`${ApiUrl}category`)
}

export async function getProducts(categoryId){
    return await axios.get(`${ApiUrl}category/${categoryId}/product`)
}

export async function getBrands(categoryId, productId){
    return await axios.get(`${ApiUrl}category/${categoryId}/product/${productId}/brand`)
}
