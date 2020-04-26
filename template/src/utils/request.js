// import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';

const service = axios.create({
    timeout: 40000,
    transformRequest: [data => qs.stringify(data)],
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    // withCredentials: true
});
// request拦截器
service.interceptors.request.use(
    config => {
        // 上送参数处理，做请求参数的包装

        return config;
    },
    error => {
        return Promise.reject(error.message);
    }
);

// respone拦截器
service.interceptors.response.use(
    response => {
        // 通过业务错误对应的code码处理

        // if(response.data.code == 1){
        //     return Promise.reject(response.data.message)
        // }

        return response.data;
    },
    error => {
        // HTTP请求异常处理

        // if (error.code === 'ECONNABORTED') {
        //     Message.error('接口请求超时');
        // }
        return Promise.reject(error.message);
    }
);

const URLS = {
    // 默认项目只有一个base Apihost
    // 如果涉及到多业务线，可以添加语义化的API映射
    
    // base api 
    baseApi:  process.env.VUE_APP_BASE_API,
    
    // Server API
    // serverApi: process.env.VUE_APP_BASE_API,
    
    // Node Api
    // nodeApi:  process.env.VUE_APP_NODE_API
};

export default function(config) {
    const uri = URLS[config['type']];
    if (!uri) throw '未获取到该type对应的baseURL';
    config.baseURL = uri;
    return service(config);
}
