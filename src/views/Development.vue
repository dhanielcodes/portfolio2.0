<template>
    <div>
        <h1 class="scroll">scroll</h1>
        <router-link to="/design" class="design">DESIGN</router-link>
        <header>
            <h1 class="headline">DEVELOPMENT.</h1>
        </header>
        <div class="main">
            <div class="proj">
                <h1>Boton UI (CSS library)<span> - CSS, Vuejs</span></h1>
                <p>A small Minal Css Library for getting nice custom styled buttons</p>
                <div class="btns">
                   <a href="https://github.com/devdanielcodes/botonui">Repo</a><a href="boton.vercel.app">Link</a>
                </div>
            </div>
            <div class="proj">
                <h1>Mind-Q<span> - Vuejs</span></h1>
                <p>Mind-Q is a minimal small quiz web app</p>
                <div class="btns">
                    <a href="https://github.com/devdanielcodes/Mind-q">Repo</a><a href="https://mind-q-quiz.vercel.app/">Link</a>
                </div>
            </div>
            <div class="proj">
                <h1>Github Users<span> - Vuejs</span></h1>
                <p>Type in a github username to see his or her stats</p>
                <div class="btns">
                    <a href="https://github.com/devdanielcodes/Github-Users">Repo</a><a href="https://getgithubuser.vercel.app/">Link</a>
                </div>
            </div>
            <div class="proj">
                <h1>Jots<span> - Vuejs</span></h1>
                <p>A Demo writing app for taking down notes etc</p>
                <div class="btns">
                    <a href="https://github.com/devdanielcodes/Jots">Repo</a><a href="https://jots.vercel.app/">Link</a>
                </div>
            </div>
            <div class="proj">
                <h1>Muzikk<span> - Vuejs</span></h1>
                <p>A web app for listening to old viral songs.</p>
                <div class="btns">
                    <a href="https://github.com/devdanielcodes/Music-player">Repo</a><a href="https://musikk.vercel.app/">Link</a>
                </div>
            </div>
            <div class="proj">
                <h1>Work me<span> - Vuejs</span></h1>
                <p>A web app for getting in workout reps. Also beginner friendly.</p>
                <div class="btns">
                    <a href="https://github.com/devdanielcodes/work-me">Repo</a><a href="https://workme.vercel.app/">Link</a>
                </div>
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
*{
    color: white
}
.design{
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 10;
    padding: 10px 20px;
    font-size: 24px;
    text-decoration: none;
    background: #5252525b;
    border-radius: 5px; 
}
header{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 80vh;
    width: 100%;
}
.headline{
    font-size: 50px;
    justify-self: flex-start;
    position: relative;
    width: 100%;
}
.headline::after{
    content: '';
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translateY(-50%);
    width: 100%;
    height: 4px;
    background: white;
    justify-self: flex-start
}
.scroll{
    font-size: 50px;
    position: absolute;
    bottom: 100px;
    left:30px;
}
.main{
    margin-top: 200px;
    margin-bottom: 100px;
}
.proj{
    margin-top: 50px;
    padding-bottom: 40px;
    border-bottom: 1px solid white
}
.btns{
    margin-top: 50px
}
.proj a{
    margin-right: 20px;
    padding: 10px;
    background: #5252525b;
    text-decoration: none;
}
span{
    font-weight: 200;
    font-size: 20px
}
@media (max-width: 600px){
    .proj h1, .headline{
        font-size: 25px;
    }
}
</style>