export const getClima = async (lat: number, long: number): Promise<any> => {
  try {
    const urlEndpoint = `https://weatherapi-com.p.rapidapi.com/current.json?q=${lat},${long}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3511a42f9cmsh6311d24c8062e6dp1a3975jsn9ff294a436bd',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    };

    return fetch(urlEndpoint, options);
  } catch (error) {
    return Promise.reject(error);
  }
};
