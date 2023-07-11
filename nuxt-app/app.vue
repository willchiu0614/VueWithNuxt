<template>
  <div id="app">
  <div class="m-4 bg-orange-200 h-full border-2 border-orange-600">
    <p class=" text-2 text-slate-600 text-black ">這裡是最外層 app.vue</p>
    <button class="ml-1 px-1 rounded-md bg-white text-black hover:text-red-200" @click="changeBGColor">{{color}}</button>
    <component :is="useBlueBG ? BlueBGButton : PinkBGButton" />
  </div>
</div>
</template>
<script  setup>
const useBlueBG = ref(false)
let color = ref("blue");
const BlueBGButton = resolveComponent('blueBG')
const PinkBGButton = resolveComponent('pinkBG')
const changeBGColor = function(){
  console.log("useBlueBG:",useBlueBG)
  color.value=color.value=="blue" ? "pink" : "blue"
  useBlueBG.value=!useBlueBG.value;
}

</script>
