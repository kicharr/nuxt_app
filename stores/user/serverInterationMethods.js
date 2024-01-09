import {login_link} from "~/utils/appConfig.js";

export const fetchReviewsList = async ({login, password}) => {
    try {
        const response = await fetch(login_link, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: login,
                password: password,
            })
        })
        return response.json();
    } catch (e) {
        console.log(e?.name)
    }
};