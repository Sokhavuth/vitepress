<!--src/layouts/Menu.astro-->
<script setup>
const props = defineProps(['pageURL'])

let home = ''
let Khmer = ''
let Thai = ''
let Chinese = ''
let Korean = ''
let Travel = ''
let contact = ''
let about = ''

if(props.pageURL === '/'){
    home = 'active'
}else if(props.pageURL === 'Khmer'){
    Khmer = 'active'
}else if(props.pageURL === 'Thai'){
    Thai = 'active'
}else if(props.pageURL === 'Chinese'){
    Chinese = 'active'
}else if(props.pageURL === 'Korean'){
    Korean = 'active'
}else if(props.pageURL === 'Travel'){
    Travel = 'active'
}else if(props.pageURL === 'contact'){
    contact = 'active'
}else if(props.pageURL === 'about'){
    about = 'active'
}

function myFunction() {
    var x = document.getElementById("myTopnav")
    if (x.className === "topnav") {
        x.className += " responsive"
    } else {
        x.className = "topnav"
    }
}
</script>

<template>
<section class='menu'>
    <nav class="nav">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <div class="region">
            <div class="topnav" id="myTopnav">
                <a href="/vitepress" :class="`home ${home}`">ទំព័រ​ដើម</a>
                <a href="/vitepress/Khmer/1" :class="`Khmer ${Khmer}`">រឿង​ខ្មែរ</a>
                <a href="/vitepress/Thai/1" :class="`Thai ${Thai}`">រឿង​ថៃ</a>
                <a href="/vitepress/Chinese/1" :class="`Chinese ${Chinese}`">រឿង​ចិន</a>
                <a href="/vitepress/Korean/1" :class="`Korean ${Korean}`">រឿង​កូរ៉េ</a>
                <a href="/vitepress/Travel/1" :class="`Travel ${Travel}`">​ដើរលេង</a>
                <a href="/vitepress/page/contact" :class="`contact ${contact}`">ទំនាក់ទំនង</a>
                <a href="/vitepress/page/about" :class="`about ${about}`">អំពីយើង​ខ្ញុំ</a>
                <a href="javascript:void(0);" class="icon" @click="myFunction">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>
    </nav>    
</section>
</template>

<style>
nav{
    background-color: rgb(189, 59, 11);
}
.topnav {
    background-color: rgb(189, 59, 11);
    overflow: hidden;
  }
  .topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 9px 16px;
    text-decoration: none;
    font-size: 14px;
  }
  .topnav a:hover {
    background-color: var(--background-dark);
    color: white;
  }
  .topnav a.active {
    background-color: var(--background-dark);
    color: white;
  }
  .topnav .icon {
    display: none;
  }

@media screen and (max-width: 600px) {
    .topnav a:not(:first-child) {display: none;}
    .topnav a.icon {
      float: right;
      display: block;
    }
}
  
@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>