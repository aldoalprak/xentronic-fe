import FetchApi from './fetchApi';

export const getAccount = async(data) => {
  const {
    limit,
    page,
    sort,
    order,
    q
  } = data
  let query = "";
  if(limit) query += `_limit=${limit}&`;
  if(page) query += `_page=${page}&`;
  if(sort) query += `_sort=${sort}&`;
  if(order) query += `_order=${order}&`;
  if(q) query += `q=${q}&`;
  
  const result = await FetchApi.get(`/secure/_self/account?${query}`);
  return result.data;
}

export const getTransaction = async(data) => {
  const {
    limit,
    page,
    sort,
    order,
    q
  } = data
  let query = "";
  if(limit) query += `_limit=${limit}&`;
  if(page) query += `_page=${page}&`;
  if(sort) query += `_sort=${sort}&`;
  if(order) query += `_order=${order}&`;
  if(q) query += `q=${q}&`;
  
  const result = await FetchApi.get(`/secure/_self/transaction?${query}`);
  return result.data;

}

export const loginApi = async(data) => {
  const result = await FetchApi.post(`/login`, data);
  console.log(result)
  if(result.data) {
    return result.data.accessToken;
  } else {
    alert("Please try again. Wrong username/password");
  }
}

export const getTransactionType = async() => {
  const result = await FetchApi.get('/secure/system/transaction-type');
  return result.data
}