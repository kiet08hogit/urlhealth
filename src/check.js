import axios from "axios";


async function checkUrlStatus(url) {
    try {
        const response = await axios.get(url);
        const date = Date.now();
        return {
            url: url,
            status: response.status,
            checkedAt: date
        }
    } catch (error) {
        if (error.response) {
            return {
                url: url,
                status: error.response.status,
                checkedAt: Date.now()
            };
        } else {
            throw new Error("Network error or invalid URL");
        }
    }
}
export { checkUrlStatus };