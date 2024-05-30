import axios from "axios"

const http = axios.create({
  baseURL: 'https://api.api-onepiece.com/v2/'
});


export const getBoat = async () => {
    try{
        const boat = await http.get('boats/fr')
        return boat.data

    }catch(error){
        console.log(error)
        throw error
    }
}

