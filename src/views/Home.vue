<template>
    <div class="home">
        <div class="main">
            <div class="cont">
                <h1>YO !</h1>
                <h2>Yes am designer and a developer, but I<br>can be whichever. Choose your path !</h2>
            </div>
            <img src="https://res.cloudinary.com/devdaniel/image/upload/v1606792139/Group_63_1_kovz8k.png" alt="" srcset="">
        </div>
        <hr>
        <div class="routes">
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
.home{
    color: #FFFFFF;
    position: relative;
    z-index: 1;
    height: 85vh;
}
.main{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;
}
.main img{
    width: 300px;
    object-fit: contain;
    pointer-events: none;
}
h1{
    font-size: 60px;
}
h2{
    font-size: 35px;
    font-weight: 200
}
.routes{
    margin-top: 50px;
}
.routes a{
    padding: 30px;
    color: white;
    font-size: 20px;
    text-decoration: none;
    background: #5252525b;
    margin-right: 10px;
}
@media (min-width: 1800px) {
    h1{
        font-size: 160px;
    }
    h2{
        font-size: 60px
    }
    .routes a{
        font-size: 50px
    }
    .main img{
        width: 600px
    }
}
@media (max-width: 1084px){
    h1{
        font-size: 40px
    }
    h2{
        font-size: 25px;
    }
}
@media (max-width: 892px){
    .main{
        margin-top: 75px
    }
    .main img{
        display: none;
    }
    .routes a{
        font-size: 14px
    }
}
</style>