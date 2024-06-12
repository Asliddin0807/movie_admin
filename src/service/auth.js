import axios from 'axios'

const AuthService = {
    async auth(param){
        let data = await axios.post('/login', param)
        return data
    }
}

export default AuthService