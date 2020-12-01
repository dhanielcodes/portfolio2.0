<template>
    <div class="design">
        <router-link to="/development" class="development">DEVELOPMENT</router-link>
        <h1 class="scroll">scroll</h1>
        <header>
            <h1 class="headline">DESIGN.</h1>
        </header>
        <div class="main">
            <div class="grid">
                <div class="mam">
                    <h1>Music app concept</h1>
                    <div class="misc">
                        <img src="../assets/dribbble.svg" alt="" srcset="">
                        <a href="">Live Interaction</a>
                    </div>
                </div>    
            </div>
            <div class="grid">
                <div class="mam">
                    <h1>Music app concept</h1>
                    <div class="misc">
                        <img src="../assets/dribbble.svg" alt="" srcset="">
                        <a href="">Live Interaction</a>
                    </div>
                </div>
                
            </div>
            <div class="grid">
                <div class="mam">
                    <h1>Music app concept</h1>
                    <div class="misc">
                        <img src="../assets/dribbble.svg" alt="" srcset="">
                        <a href="">Live Interaction</a>
                    </div>
                </div>
                
            </div>
            <div class="grid">
                <div class="mam">
                    <h1>Music app concept</h1>
                    <div class="misc">
                        <img src="../assets/dribbble.svg" alt="" srcset="">
                        <a href="">Live Interaction</a>
                    </div>
                </div>
                
            </div>
            <div class="grid">
                <div class="mam">
                    <h1>Music app concept</h1>
                    <div class="misc">
                        <img src="../assets/dribbble.svg" alt="" srcset="">
                        <a href="">Live Interaction</a>
                    </div>
                </div>
                
            </div>
            <div class="grid">
                <div class="mam">
                    <h1>Music app concept</h1>
                    <div class="misc">
                        <img src="../assets/dribbble.svg" alt="" srcset="">
                        <a href="">Live Interaction</a>
                    </div>
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
.development{
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
    left: 30px;
}
.main{
    margin-top: 200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    width: 100%;
    margin-bottom: 150px;
}
.grid{
    background: black;
    height: 500px;
    padding: 30px;
    position: relative;

}
.grid .mam{
    position: absolute;
    bottom: 40px;
    left: 40px;
}
.grid .misc{
    display: flex;
    margin-top: 10px
}
.grid .misc img{
    margin-right: 20px;
}
.grid .misc a{
    padding: 10px 20px;
    background: #5252525b;
    border-radius: 1000px;
    text-decoration: none;
}
@media (max-width: 1011px) {
    .main{
        margin-top: 200px;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 10px;
        width: 100%;
        margin-bottom: 150px;
    }
    .grid .mam h1{
        font-size: 20px
    }
}
@media (max-width: 600px){
    .headline{
        font-size: 25px;
    }
}
</style>