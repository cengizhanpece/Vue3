<script setup>
    import quizes from "../data/quizes.json";
    import {useRoute, useRouter} from "vue-router"
    import CompletionBar from "../components/CompletionBar.vue";
    import Question from "../components/Question.vue";
    import Results from "../components/Results.vue";
    import { ref, computed } from "vue";
    const route = useRoute();
    const router = useRouter();
    
    const quiz = quizes.find(q=> route.params.id == q.id);

    const questionNumber = ref(0);
    const rightAnswers = ref(0);
    const ifHasAnotherQuestion = computed(()=>{
        return questionNumber.value != quiz.questions.length;
    })
    const updateQuestion = (e) => {
        if(e) rightAnswers.value++;
        questionNumber.value++;
    }
</script>

<template>

    <div>
        <header>
            
            <CompletionBar v-if="ifHasAnotherQuestion" :maxStep="quiz.questions.length" :currentStep="questionNumber" />

        </header>
        <div>
            <Question v-if="ifHasAnotherQuestion" :question="quiz.questions[questionNumber]" @updateQuestion="updateQuestion"/>
            <Results v-else :correctAnswers="rightAnswers" :totalOptions="quiz.questions.length"/>
        </div>

        <button @click="router.push('/')">Go Home</button>
    </div>

    
    
</template>



<style scoped>
    header{
        margin-top: 20px;
    }
    header h4 {
        font-size: 30px;
    }

    
</style>