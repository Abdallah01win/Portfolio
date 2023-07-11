<script setup>
import AboutMe from '../components/AboutMe.vue';
import Hero from '../components/Hero.vue';
import Projects from '../components/Projects.vue';
import TechStack from '../components/TechStack.vue';
import Services from '../components/Services.vue';
import Contact from '../components/Contact.vue';
</script>

<template>
  <main>
    <Hero />
    <Projects />
    <AboutMe />
    <!-- <div class="orbit">

      <ul class="orbit-wrap">

        <li class="orbit-center">
          <i class="orbit-center__icon fa fa-code"></i>
        </li>

        <li>
          <ul class="ring-0">
            <li><i class="orbit-icon fa fa-git"></i></li>
            <li><i class="orbit-icon fa fa-free-code-camp"></i></li>
            <li><i class="orbit-icon fa fa-meetup"></i></li>
            <li><i class="orbit-icon fa fa-codepen"></i></li>
          </ul>
        </li>

        <li>
          <ul class="ring-1">
            <li><i class="orbit-icon fa fa-podcast"></i></li>
            <li><i class="orbit-icon fa fa-css3"></i></li>
            <li><i class="orbit-icon fa fa-html5"></i></li>
          </ul>
        </li>
        <li>
          <ul class="ring-2">
            <li><i class="orbit-icon fa fa-windows"></i></li>
            <li><i class="orbit-icon fa fa-safari"></i></li>
            <li><i class="orbit-icon fa fa-edge"></i></li>
            <li><i class="orbit-icon fa fa-linux"></i></li>
            <li><i class="orbit-icon fa fa-apple"></i></li>
            <li><i class="orbit-icon fa fa-chrome"></i></li>
            <li><i class="orbit-icon fa fa-android"></i></li>
            <li><i class="orbit-icon fa fa-firefox"></i></li>
          </ul>
        </li>
        <li>
          <ul class="ring-3">
            <li><i class="orbit-icon fa fa-coffee"></i></li>
            <li><i class="orbit-icon fa fa-terminal"></i></li>
            <li><i class="orbit-icon fa fa-heart-o"></i></li>
          </ul>
        </li>

      </ul>

    </div> -->
    <Services />
    <TechStack />
    <Contact />
  </main>
</template>
