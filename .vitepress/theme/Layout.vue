<script setup>
import { useData } from 'vitepress'
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <Header />
  <Menu pageURL="/" />
  <div v-if="frontmatter.home">
    <h1>{{ site.title }}</h1>
    <p>{{ site.description }}</p>
    <p>welcome</p>
  </div>
  <div v-else>
    <a href="/">Home</a>
    <Content />
  </div>
</template>
