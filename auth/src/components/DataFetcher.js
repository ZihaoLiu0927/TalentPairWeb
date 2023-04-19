import axios from 'axios';

export async function useFetchData(url, method = 'GET', payload = null) {

  let data = null;
  let error = null;

  console.log({
    url,
    method,
    name: payload.name,
    email: payload.email,
    password: payload.password,
  });

  try {
      const response = await axios({
        url,
        method,
        data: payload,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      data = response.data;
    } catch (error) {
      error = error;
    } finally {
      
    };

  return { data, error };
};