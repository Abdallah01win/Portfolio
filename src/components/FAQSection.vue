<script setup>
import { ref, computed } from 'vue'
const questions = ref([
  { question: "Are you available for hire?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit dolorem reiciendis possimus ipsum sit rerum aspernatur provident dignissimos id?", isOpen: false },
  { question: "What technologies do you use?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit dolorem reiciendis possimus ipsum sit rerum aspernatur provident dignissimos id?", isOpen: false },
  { question: "Question 3", answer: "Answer 3", isOpen: false },
  { question: "Question 4", answer: "Answer 4", isOpen: false },
  { question: "Question 5", answer: "Answer 5", isOpen: false },
]);

const toggleAccordion = (index) => {
  questions.value.forEach((q, i) => {
    q.isOpen = i === index ? !q.isOpen : false;
  });
};
</script>

<template>
  <div class="rounded-3xl border border-myGray-500 px-8 py-5 h-full">
    <div class="text-2xl font-semibold">Q&A</div>
    <div class="/overflow-y-scroll">
      <div v-for="(question, index) in questions" :key="index" @click="toggleAccordion(index)">
        <button type="button"
          class="flex items-center justify-between w-full py-4 pr-4 font-medium text-left text-myGray-500  border-b border-myGray-500">
          <span :class="{ 'text-myDark-100': question.isOpen }">{{ question.question }}</span>
          <svg :class="{ 'text-myDark-100 rotate-180': question.isOpen }" class="w-3 h-3 shrink-0" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
              d="M9 5 5 1 1 5" />
          </svg>
        </button>
        <div v-if="question.isOpen" class="p-4 leading-6 text-myDark-400">
          {{ question.answer }}
        </div>
      </div>
    </div>
  </div>
</template> 