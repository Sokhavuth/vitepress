<script setup>
    const props = defineProps(['page'])
    const currentPage = props.page
    const postAmount = 20
    import { data as Posts } from '../data/posts.data.js'
    Posts.sort((a, b)=>new Date(b.frontmatter.pudate) - new Date(a.frontmatter.pudate))
    const startIndex = (currentPage - 1) * postAmount
    const endIndex = startIndex + postAmount
    const lastPage = Math.ceil(Posts.length/postAmount)
    const pageNumbers = [...Array(lastPage).keys()]
    const posts = Posts.slice(startIndex, endIndex)

    function changePage(e){
        document.location = `/vitepress/archive?page=${e.target.value}`
    }
</script>

<template>
<section class="Home region">
    <div class="container">
        <div class="wrapper" v-for="post in posts">
            <a :href="`/vitepress${post.url}`">
                <img :src="post.frontmatter.thumb" />
                <img class="play-icon" src="/images/play.png" />
            </a>
            <div class="date">{{new Date(post.frontmatter.pudate).toLocaleDateString('it-IT')}}</div>
            <a class="title" :href="`/vitepress${post.url}`">
                <div >{{post.frontmatter.title}}</div>
            </a>
        </div>
    </div>
    <div class="pagination">
        <span>ទំព័រ </span>
        <select v-model="currentPage" @change="changePage($event)">
            <option v-for="pageNumber in pageNumbers">{{ pageNumber+1 }}</option>
        </select>
        <span> នៃ {{lastPage}}</span>
    </div>
</section>
</template>

<style scoped>
.Home .container{
    display: grid;
    grid-template-columns: repeat(4, calc(100% / 4 - 11.25px));
    grid-gap: 30px 15px;
    padding: 30px 0;
}
.Home .container .wrapper a{
    position: relative;
    padding-top: 56.25%;
    overflow: hidden;
    width: 100%;
    display: block;
}
.Home .container .wrapper a img{
    position: absolute;
    width: 100%;
    min-height: 100%;
    top: 0;
    left: 0;
}
.Home .container .wrapper a .play-icon{
    width: auto;
    min-height: auto;
    width: 15%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}
.Home .container .wrapper .title{
    padding-top: 0;
}
.Home .container .wrapper .title div{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.Home .pagination{
    display: block;
    text-align: center;
}
@media only screen and (max-width:600px){
    .Home .container{
        grid-template-columns: 100%;
        padding: 30px 10px;
    }
}
</style>