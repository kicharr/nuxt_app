import {frequentlyAskedQuestions, frequentlyAskedQuestionsSliced, reviewsList} from "~/utils/appConfig.js";

export const fetchQuestionsAsked = async (limit) => {
    try {
        const res = await fetch(frequentlyAskedQuestions(limit));
        return res.json();
    } catch (e) {
        console.log(e?.name)
    }
};

export const fetchQuestionsAskedSliced = async (skipped, limit) => {
    try {
        const res = await fetch(frequentlyAskedQuestionsSliced(skipped, limit));
        return res.json();
    } catch (e) {
        console.log(e?.name)
    }
};

export const fetchReviewsList = async (skipped, limit) => {
    try {
        const res = await fetch(reviewsList);
        return res.json();
    } catch (e) {
        console.log(e?.name)
    }
};

