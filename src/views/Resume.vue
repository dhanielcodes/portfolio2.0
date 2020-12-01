<template>
    <div>
        <h1>DANIEL ADEKOYA</h1>
        <h2>I’m a Frontend (Vuejs) / Visual Developer and UI Designer.<br> I live for asthetics.</h2>

        <a href="https://docs.google.com/document/d/e/2PACX-1vQNIAyJ53JZSh9H5PWDktdG1RgDvtb_fSnE4v5Jt5KjvGssmpXqoAuknLIoveFSdSuBJVIkh4oM0FDe/pub" target="_blank">RESUME</a>
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
div{
    color: white;
}

h1{
    font-size: 60px;
    margin-bottom: 50px
}
h2{
    font-size: 30px;
    margin-bottom: 70px
}
a{
    padding: 20px;
    text-decoration: none;
    color: #FFFFFF;
    background: #5252525b;
    font-size: 25px;
}
@media(max-width: 789px){
    h1{
        font-size: 30px
    }
    h2{
        font-size: 16px
    }
}
</style>