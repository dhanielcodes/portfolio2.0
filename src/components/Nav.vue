<template>
    <div>
        <div class="nav">
            <router-link to="/"><img src="../assets/logo.svg" alt="" class="logo"></router-link>
            <div class="links">
                <router-link class="resume a" to="/resume">RESUME</router-link>
                <a href="#" class="a">Reach out</a>
            </div>
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
:root{
    --p: #5252525b;
}
.nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3vh 0;
    width: 100%;
    font-size: 20px
}
a{
    color: white;
}
.a{
    padding: 10px 30px;
    background: #5252525b;
    border-radius: 1000px;
    text-decoration: none;
}
.resume{
    font-weight: 500;
    text-decoration: none;
    justify-self: center;
    margin-right: 30px;
}
@media(max-width: 789px){
    .nav{
        font-size: 14px    
    }
    .logo{
        width: 120px
    }
    .resume{
        margin-right: 10px;
    }
    .a{
        padding: 10px 10px;
    }
}
</style>