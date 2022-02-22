import instance from "./instance";
export const getAll = () => {
    const url = "/products";
    return instance.get(url);
};

export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);

};

export const add = (post) => {
    const url = `/products`;
    return instance.post(url, post);

};

export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);

};

export const update = (post) => {
    const url = `/products/${post.id}`;
    return instance.put(url, post);

};
export const limit = () => {
    const url = `products?_limit=3&_sort=id&_order=desc`;
    return instance.get(url);
};
export const CateProduct = () => {
    const url = `/products?_expand=cate`;
    return instance.get(url);

};