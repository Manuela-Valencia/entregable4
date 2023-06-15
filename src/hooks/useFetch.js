import axios from "axios";
import { useState } from "react";

const useFetch = (baseUrl) => {

    // ESTADO
    const [apiInfo, setInfoApi] = useState()

    //READ 
    const getAllApi = (path)=> {
        const url = `${baseUrl}${path}/`
        axios.get(url)
            .then(res => {
                setInfoApi(res.data)
            })
            .catch(err => console.log(err))
    }

    //CREATE
    const createNewRegister = (path, data) => {
        const url = `${baseUrl}${path}/`
        axios.post(url, data)
            .then(res => {
                setInfoApi([...apiInfo, res.data])
            })
            .catch(err => console.log(err))
    }

    //DELETE
    const deleteUserRegister = (path,id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.delete(url)
            .then(res => {
                const apiFilterRemove = apiInfo.filter(element => element.id !== id)
                setInfoApi(apiFilterRemove)
            })
            .catch(err => console.log(err))
    }

    //UPDATE
    const updateRegister = (path,id,data) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.put(url, data)
            .then(res => {
                const userUpdate = apiInfo.map(element => {
                    if (element.id === id) return data
                    return element
                })
                setInfoApi(userUpdate)
            })
            .catch(err => console.log(err))
    }

    return [apiInfo, getAllApi, createNewRegister, deleteUserRegister, updateRegister]
};

export default useFetch;