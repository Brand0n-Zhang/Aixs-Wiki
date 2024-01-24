
import axios from 'axios';
import { baseUrl } from './base';

export const Request = {
    post: (url: string, params: any): any => {
        return new Promise((resolve) => {
            axios.post(baseUrl + url, params).then((res: any) => {
                if (res.data.code == 200) {
                    resolve(res);
                }
            });
        });
    },
    get: (url: string, params: any): any => {
        return new Promise((resolve) => {
            axios.get(baseUrl + url, { params: params }).then((res: any) => {
                if (res.data.code == 200) {
                    resolve(res);
                }
            });
        });
    }
};


export const getAxisList = (params: any) => {
    return Request.get('getAxisList', params);

};
