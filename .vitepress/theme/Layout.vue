<script setup>
import { useData } from 'vitepress'
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'
import Latest from './components/Latest.vue'
import Paginate from './components/Paginate.vue'

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter } = useData()
const urlParams = new URLSearchParams(window.location.search)
const page = urlParams.get('page')
</script>

<template>
  <Header />
  <div v-if="frontmatter.home">
    <Menu pageURL="/" />
    <Latest />
    <Home />
  </div>
  <div v-else-if="frontmatter.paginate">
    <Menu pageURL="Paginate" />
    <Paginate :page="page" />
  </div>
  <div v-else>
    <Menu pageURL="Other" />
    <a href="/">Home</a>
    <Content />
  </div>
  <Footer />
</template>
