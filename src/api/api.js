import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://api.rabota.ua/vacancy/search',
});

export const getJobs = (currentPage = 0, pageSize = 10, keyWords = '') => {
    return instance.get(`?parentId=1&page=${currentPage}&count=${pageSize}&keyWords=${keyWords}`)
        .then(res => {return res.data} )
}

