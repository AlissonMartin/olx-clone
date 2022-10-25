const OlxApi = {

    login: async (email:string, password:string)=> {
            let response = await fetch('http://alunos.b7web.com.br:501')
            let json = await response.json
            return json
            }
    }


export default OlxApi