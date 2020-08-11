import FetchApi from './fetchApi';

export const getAllProducts = async() => {
  const result = await FetchApi.get('product/getAll');
  console.log(result)
  return result.data;
}

export const getProductsByCategory = async(category_id) => {
  const result = await FetchApi.get(`product/getByCategory?category_id=${category_id}`);
  return result.data
}

export const getAllCategory = async() => {
  const result = await FetchApi.get('category/getAll');
  return result.data;
}