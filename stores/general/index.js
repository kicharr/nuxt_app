import {
    fetchQuestionsAsked,
    fetchQuestionsAskedSliced,
    fetchReviewsList
} from "~/stores/general/serverInterationMethods.js";

export const useGeneralStore = defineStore('general', () => {
    let questionsAskedList = reactive([]);
    let reviewsList = reactive([]);
    let questionsAskedListTotal = ref();
    const getQuestionsAsked = async (limit) => {
        const res = await fetchQuestionsAsked(limit);
        if (!questionsAskedList.length) {
            res?.posts.forEach(resItem => questionsAskedList.push(resItem))
        }
        questionsAskedListTotal.value = res?.total
    }
    const getQuestionsAskedSliced = async (limit, disableLoader) => {
        const res = await fetchQuestionsAskedSliced(questionsAskedList.length, limit);
        res?.posts.forEach(resItem => questionsAskedList.push(resItem))
        disableLoader();
        questionsAskedListTotal.value = res?.total
    }

    const getReviewsList = async () => {
        const res = await fetchReviewsList();
        res?.comments.forEach(review => {
            reviewsList.push(review);
        })
    }

    return {
        questionsAskedList: computed(() => questionsAskedList),
        questionsAskedListTotal,
        reviewsList,
        getReviewsList,
        getQuestionsAsked,
        getQuestionsAskedSliced
    }
})