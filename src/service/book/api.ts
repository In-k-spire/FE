import { server } from "@/api/instance/instance"
import { BookType } from "@/type/book";

export const getBook = async (id : number) => {
    const {data}  = await server.get('/', {params : {id : id}})
    return data;
}

export const setBook = async (book : BookType) => {
    const {data} = await server.post('/' , {data : book})
    return data;
}