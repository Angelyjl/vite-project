import request from "@/utils/request";

// 登陆接口
export function login(data: object){
    return request({
        url:"api/auth/login",
        method: "post",
        data,
    })
}