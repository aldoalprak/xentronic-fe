import FetchApi from './fetchApi';

export const getAllProducts = async() => {
  const result = await FetchApi.get('product/getAll');
  console.log(result)
  return result.data;
}

export const getProductsByQuery = async(category_id) => {
  const result = await FetchApi.get(`product/getByQuery?category_id=${category_id}`);
  return result.data
}

export const getProductById = async(id) => {
  const result = await FetchApi.get(`product/getById/${id}`);
  return result.data;
}

export const getAllCategory = async() => {
  const result = await FetchApi.get('category/getAll');
  return result.data;
}

export const sendPayment = async() => {
  const result = await FetchApi.post('user/sendPayment');
  return result.data
}
