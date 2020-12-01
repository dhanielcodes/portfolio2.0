<template>
    <div class="socials">
        <a class="as" href=""><img src="../assets/linkedin.svg" alt="" srcset=""></a> 
        <a class="as" href=""><img src="../assets/twitter.svg" alt="" srcset=""></a>
        <a class="as" href=""><img src="../assets/instagram.svg" alt="" srcset=""></a>
        <a class="as" href=""><img src="../assets/google.svg" alt="" srcset=""></a>
        <a class="as" href=""><img src="../assets/github.svg" alt="" srcset=""></a>
        <a class="as" href=""><img src="../assets/dribbble.svg" alt="" srcset=""></a>
        <a href=""><img src="../assets/behance.svg" alt="" srcset=""></a>

    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
.socials{
    padding: 10px 15px 5px 15px;
    background: #5252525b;
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    widows: 300px;
    border-radius: 1000px
}
.socials .as{
    margin-right: 10px;
}

</style>