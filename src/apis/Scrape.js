import axios from 'axios'
const React_App_Backend_URL=process.env.React_App_Backend_Url
export const getScrapping=async (domain)=>{
    try {
        console.log(React_App_Backend_URL);
        const result=await axios.get(`${React_App_Backend_URL}/scrape?id=${domain}`,{
            validateStatus(status) {
                return status === 200 || status === 400; // Only resolve these status codes
            }
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}