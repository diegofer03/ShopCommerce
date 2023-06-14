import { api } from "../../../script/api";

const endPoints = {
    products: {
      getProducts: (limit, offset) =>
        `${api}/products?limit=${limit}&offset=${offset}`,
      postProducts: `${api}/products/`,
      getProduct: (id) => `${api}/products/${id}`,
      putProducts: (id) => `${api}/products/${id}`,
      deleteProducts: (id) => `${api}/products/${id}`
    },
    users: {
      getUsers: `${api}/users`,
      postUsers: `${api}/users`
    },
    auth: {
      login: `${api}/auth/login`,
      profile: `${api}/auth/profile`
    },
    categories: {
      getCategories: `${api}/categories`,
      postCategories: `${api}/categories`,
      getCategoriesProduct: (id) => `${api}/categories/${id}/products`,
      putCategories: (id) => `${api}/categories/${id}`
    },
    files: {
      postFiles: `${api}/files/upload`,
      getFiles: (fileName) => `${api}/${fileName}`
    }
  }

  export {endPoints}