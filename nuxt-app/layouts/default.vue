<template>
    <div class="bg-sky-100 py-2 ">
        <p class=" text text-gray-700">default layout</p>
        <Header/>
        <slot name="header" />
        <slot />
        <Footer/>
        <slot name="footer" />
    </div>
</template>
<script>
import Header from '../components/header1.vue'
import Footer from '../components/footer.vue'
export default {
        components: {
            Header,
            Footer
        }
    }
</script>