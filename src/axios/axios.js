import axios from "axios";

const JSON_PLACE_HOLDER = "https://candidate.neversitup.com/todo/users/auth"
const OPEN_API = "https://candidate.neversitup.com/todo/users/auth"

const init = async () =>{
    const API1 = axios.post(`${OPEN_API}`)

    const [ token ] = await Promise.all([
        API1,
    ])

    console.log({
        token : token.data.length
    })
}