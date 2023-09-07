<script setup>
import { ref } from 'vue'
import ArrowUp from '@/components/icons/ArrowUp.vue';
const questions = ref([
  { question: "Are you available for hire?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit dolorem reiciendis possimus ipsum sit rerum aspernatur provident dignissimos id?", isOpen: false },
  { question: "What technologies do you use?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit dolorem reiciendis possimus ipsum sit rerum aspernatur provident dignissimos id?", isOpen: false },
  { question: "Question 3", answer: "Answer 3", isOpen: false },
  { question: "Question 4", answer: "Answer 4", isOpen: false },
]);

const toggleAccordion = (index) => {
  questions.value.forEach((q, i) => {
    q.isOpen = i === index ? !q.isOpen : false;
  });
};

const showDescription = ref([])
for (let i = 0; i < questions.length; i++) {
  showDescription.value.push(false);
}
</script>

<template>
  <div class="rounded-3xl border border-myGray-500 px-8 py-5 h-full bg-myWhite">
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

  <!-- <div class="text-lg font-semibold">
    <div v-for="(question, index) in questions" :key="question"
      :class="[index === questions.length - 1 ? 'border-b' : '']" class="border-t border-myGray-500/80 py-6 px-6">
      <div class="flex items-center justify-between ">
        <div class="flex items-center gap-x-10">
          <div><span v-if="index < 9">0</span>{{ index + 1 }}</div>
          <div>{{ question.question }}</div>
        </div>
        <div class="cursor-pointer transition-all duration-[0.3s]"
          @click="showDescription[index] = !showDescription[index]" :class="{ 'rotate-90': showDescription[index] }">
          <ArrowUp class="w-6" />
        </div>
      </div>
      <div class="text-myGray-200 text-sm font-normal leading-6"
        :class="['description', { show: showDescription[index] }]">
        {{ question.answer }}
      </div>
    </div>
  </div> -->
</template> 

<style scoped>
.description {
  height: 0;
  margin-top: 0px;
  overflow: hidden;
  transition: height, margin-top 0.3s ease;
}

.description.show {
  height: fit-content;
  margin-top: 16px;
}
</style>