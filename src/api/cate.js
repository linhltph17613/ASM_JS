import instance from "./instance";
export const getAll = () => {
    const url = "/cates";
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/cates/${id}`;
    return instance.delete(url);

};
export const get = (id) => {
    const url = `/cates/${id}`;
    return instance.get(url);

};
export const add = (cate) => {
    const url = `/cates`;
    return instance.post(url, cate);

};