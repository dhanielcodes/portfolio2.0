<template>
    <div class="not-found">
        <img src="../assets/404.svg" alt="" srcset="">
        <div class="main">
            <h1>Page not found</h1>
            <router-link to="/design">DESIGN</router-link>
            <router-link to="/development">DEVELOPMENT</router-link>
        </div>
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
.not-found{
    color: white
}
.routes{
    margin-top: 50px;
}
a{
    padding: 30px;
    color: white;
    font-size: 20px;
    text-decoration: none;
    background: #5252525b;
    margin-right: 10px;
}
.main{
    position: fixed;
    display: grid;
    place-items: center;
    top: 0;
    right: 0;
    width: 35%;
    height: 100vh;
    padding: 150px 0;
}
img{
    position: fixed;
        top: 50%;
        left: 10%;
        transform: translate(0%, -50%)
}
@media(max-width: 971px){
    .main{
        width: 100%;
    }
    img{
        position: fixed;
        top: 50%;
        left: 50%;
        opacity: .5;
        transform: translate(-50%, -50%)
    }
    a{
        background: #000000
    }
}
</style>