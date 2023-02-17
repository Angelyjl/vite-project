import request from "@/utils/request";

// 登陆接口
export function login(data: object){
    return request({
        url:"api/auth/login",
        method: "post",
        data,
    });
}
export function user(){
    return request({
        url: "/api/admin/user",
        method:'GET'
    });
}export function logout(){
    return request({
        url: "/api/auth/logout",
        method:'POST'
    });
}