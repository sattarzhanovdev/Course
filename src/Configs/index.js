import axios from "axios";

export const getConsutation = (data) => axios.post('/consultation', data)