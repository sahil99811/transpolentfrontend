import axios from 'axios'
const React_App_Bckend_URL=''
export const getScrapping=async (domain)=>{
    try {
        const result=await axios.get(`http://localhost:5000/scrape?id=${domain}`);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}