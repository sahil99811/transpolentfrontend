import axios from 'axios'
const React_App_Bckend_URL=''
export const getScrapping=async (domain)=>{
    try {
        const result=await axios.get(`http://localhost:5000/scrape?id=${domain}`,{
            validateStatus(status) {
                return status === 200 || status === 400; // Only resolve these status codes
            }
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}