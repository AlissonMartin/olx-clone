import Cookies from "js-cookie"
import qs from 'qs'

const BASEURL = 'http://localhost:5000'

const loginFetchPost = async(endpoint: string, body: {email:string, password:string, token?:string})=> {
    if (!body.token) {
        let token = Cookies.get('token')
        if (token) {
            body.token = token
        }
    }

    const formBody = new FormData
    formBody.set('email',body.email)
    formBody.set('password',body.password)

    const res = await fetch(`${BASEURL}${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
    })
    const json:any = await res.json()
    return json
}

const signupFetchPost = async (endpoint:string, body: {name:string, email:string, password:string, state:string})=> {
    const res = await fetch(`${BASEURL}${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const json = res.json()
    return json
}

const adsFetchGet = async (endpoint: string, params?: { state?: string, q?: string, sort?: string, offset?: number, cat?: string, limit?:number })=> {
    const res = await fetch(`${BASEURL}${endpoint}?${qs.stringify(params)}`)
    const json = await res.json()
    return json
}

const newAdFetchPost = async (body:FormData)=> {
        let token = Cookies.get('token')
        if (token) {
            body.append('token', token)
        }
    

        let response = await fetch('http://localhost:5000/ad/add', {
        method: 'POST',
        body
    })
    const json = await response.json()
    return json

}

const editInfoFetchPut = async (body:FormData)=> {
    const token = Cookies.get('token')

    if (token) {
        body.append('token', token)
    }

    let response = await fetch(`${BASEURL}/user/me`, { method: 'PUT', body })
    let json = response.json()
    return json
}

const deleteAdFetchDelete = async (params: {token: string, id: number})=> {
    const response = await fetch(`${BASEURL}/ad/${params.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(params)
    })
    const json = await response.json()
    return json
}

const OlxApi = {

    login: async (email:string, password:string)=> {
        let json = await loginFetchPost('/user/signin', {email, password})
        return json
    },

    signup: async (name:string, email:string, password:string, state:string)=> {
        let json = await signupFetchPost('/user/signup', {name, email, password, state})
        return json
    },

    getStates: async ()=> {
        let response = await fetch(`${BASEURL}/states`)
        let json = response.json()
        return json
    },

    getAds: async (options: { state?: string, q?: string, sort?: string, offset?: number, cat?: string, limit?:number, priceNeg?:number, order?:string})=> {
        const json = await adsFetchGet('/ad/list', options)
        return json
    },

    getCategories: async ()=> {
        const response = await fetch(`${BASEURL}/categories`)
        const json = response.json()
        return json
    },
    getAd : async (id:string)=> {
        const response = await fetch(`${BASEURL}/ad/${id}`)
        const json = response.json()
        return json
    },
    NewAd: async (fData:FormData) => {
        const json = await newAdFetchPost(fData)
        return json
    },
    getInfo: async (params: {token:string, status?: 1 | 0}) => {
        const response = await fetch(`${BASEURL}/user/me?${qs.stringify(params)}`)
        const json = await response.json()
        return json
    },
    editInfo: async (fData:FormData)=> {
        const json = await editInfoFetchPut(fData)
        return json
    },
    deleteAd: async (params: {token: string, id:number})=> {
        const json = await deleteAdFetchDelete(params)
        return json
    }
}


export default OlxApi