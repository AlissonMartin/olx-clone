import Cookies from "js-cookie"

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

    const res = await fetch(`http://localhost:5000${endpoint}`, {
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
    const res = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const json = res.json()
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
        let response = await fetch('http://localhost:5000/states')
        let json = response.json()
        return json

    }
}


export default OlxApi