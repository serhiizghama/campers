import axios from 'axios';

const campersApi = axios.create({
	baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
});

export default campersApi;
