// User authorization
export const USER_AUTHORIZATION_URL = 'https://dummyjson.com/auth/login';
// Frequently Asked Questions
export const frequentlyAskedQuestions = (limit) => `https://dummyjson.com/posts?limit=${limit ? limit : 20}`;
// Frequently Asked Questions
export const frequentlyAskedQuestionsSliced = (skipped, limit) => `https://dummyjson.com/posts?limit=${limit}&skip=${skipped}`;
// Fetch reviews list
export const reviewsList = 'https://dummyjson.com/comments';
//Authorization
export const login_link = 'https://dummyjson.com/auth/login';
// Recipes
export const recipes_link = 'https://dummyjson.com/recipes';
// Definite recipes
export const recipes_definite_link = (id) =>  `https://dummyjson.com/recipes/${id}`;
