import {recipes_definite_link} from "~/utils/appConfig.js";

export const fetchRecipesList = async () => {
    try {
        const res = await fetch(recipes_link);
        if (res?.status === 200) {
            return res.json();
        }
    } catch (e) {
        console.log('Error name: ' + e?.name, 'Error message: ' + e?.message);
    }
}

export const fetchDefiniteRecipe = async (id) => {
    try {
        const res = await fetch(recipes_definite_link(id));
        if (res?.status === 200) {
            return res.json();
        }
    } catch (e) {
        console.log('Error name: ' + e?.name, 'Error message: ' + e?.message);
    }
}