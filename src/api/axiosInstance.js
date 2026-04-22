// we create this axios instance because we dont have to repeat the boiler code again and again
// instead we can use
// axios.get or axios.post

const axisoInstance = axios.create({
    baseUrl:"http://localhost:3000",
    timeout:5000,
});

export default axisoInstance;