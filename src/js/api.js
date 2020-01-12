const API_KEY = 'PCNA0Y5-GMCMXYD-N5RTXDE-SZ4KDZH';

const api = (API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1') => {
    const beersAPIEndpoint =  `${API_URL}/beers`;
    return {
        getBeers: async text => {
            try {
                const requestUrl = text ? `${beersAPIEndpoint}?search=${text}&limit=10` : `${beersAPIEndpoint}?limit=10`;
                const response = await fetch(requestUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-KEY': API_KEY,
                    },
                });
                if (response.status >= 400) {
                    const error = { message: 'Error on response', status: response.status };
                    throw error;
                }
                if (!response.ok) {
                    throw new Error('Error fetching beers');
                }

                const data = await response.json();
                return data;
            } catch (e) {
                console.error(e.message);
                throw e;
            }
        },
    };
};

export default api;