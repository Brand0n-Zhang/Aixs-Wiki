
import axios from 'axios';
import { baseUrl } from './base';
import { ElMessage } from 'element-plus';
export const Request = {
    post: (url: string, params: any): any => {
        return new Promise((resolve) => {
            axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

            axios.post(baseUrl + url, params).then((res: any) => {
                if (res.data.code == 200) {
                    resolve(res);
                } else {
                    ElMessage.error(res.data.msg);
                }
            });
        });
    },
    get: (url: string, params: any): any => {
        return new Promise((resolve) => {
            axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

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

export const getAxisDetail = (params: any) => {
    return Request.get('getAxisDetail', params);
};

export const register = (params: any) => {
    return Request.post('register', params);
};

export const login = (params: any) => {
    return Request.post('login', params);
};
