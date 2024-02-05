import {fetchDefiniteRecipe, fetchRecipesList} from "~/stores/recipes/serverInterationMethods.js";

export const useRecipesStore = defineStore('recipes', () => {
    const recipesList = ref([]);
    const recipeItem = ref({});
    const recipesListTotal = ref();

    const fetchAllRecipes = async () => {
        const res = await fetchRecipesList();
        if (res) {
            recipesList.value = res?.recipes;
        }
    }
    const getDefiniteRecipe = async (id) => {
        const res = await fetchDefiniteRecipe(id);
        recipeItem.value = res;
    }


    return {
        recipesList,
        recipeItem: computed(() => recipeItem.value),
        fetchAllRecipes,
        getDefiniteRecipe
    }
})