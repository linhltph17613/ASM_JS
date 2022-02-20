import instance from "./instance";
export const getAll = () => {
    const url = "/product";
    return instance.get(url);
};

export const get = (id) => {
    const url = `/product/${id}`;
    return instance.get(url);

};

export const add = (post) => {
    const url = `/product`;
    return instance.post(url, post);

};

export const remove = (id) => {
    const url = `/product/${id}`;
    return instance.delete(url);

};

export const update = (post) => {
    const url = `/product/${post.id}`;
    return instance.put(url, post);

};
export const limit = () => {
    const url = `product?_limit=3&_sort=id&_order=desc`;
    return instance.get(url);
};