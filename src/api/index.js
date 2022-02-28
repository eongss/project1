// axios api 구조화 -> /src/api/index.js 생성후 따로 작성
import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:8080',
});

function registerUser(userData) {
	return instance.post('signup', userData);
}

export { registerUser };
