<script setup>
import { useData } from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <link href="/fonts/setup.css" rel="stylesheet" />
  <div v-if="frontmatter.home">
    <h1>{{ site.title }}</h1>
    <p>{{ site.description }}</p>
    <p>Hello</p>
  </div>
  <div v-else>
    <a href="/">Home</a>
    <Content />
  </div>
</template>
