const API_KEY = 'PCNA0Y5-GMCMXYD-N5RTXDE-SZ4KDZH';

const api = (API_URL = 'web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1') => {
    const searchAPIEndpoint = `${API_URL}search/shows?q=`;
    const showsAPIEndpoint =  `${API_URL}shows`;
    return {
        getBeers: async text => {
            try {
                const requestUrl = text ? `${searchAPIEndpoint}${text}` : showsAPIEndpoint;
                const response = await fetch(showsAPIEndpoint);
                if (!response.ok) {
                    throw new Error('Error fetching beers');
                }
                const data = await response.json();
            } catch (e) {
                console.log(e.message);
                throw e;
            }
        },
    };
};

export default api;