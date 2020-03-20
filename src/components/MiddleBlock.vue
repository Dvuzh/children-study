<template>
    <div class="middle-block j-center a-center">
        <div class="title">Наши задания </div>
    </div>
</template>


<script>
export default {
  name: 'MiddleBlock',
//   props: {
//     msg: String
//   }
}
</script>

<style scoped>
.middle-block{
    background-color: #fe677a;
    display: flex;
    height: 120px;
}

.j-center{
    justify-content: center;    
}
.a-center{
    align-items: center;
}

.middle-block .title{
    color: white;
    /* font-family: 'Ubuntu Condensed', Calibri, 'AppleGothic', 'MgOpen Modata', sans-serif;
    font-size: 40px;
    line-height: 46px;
    font-weight: bold;
    font-style: normal;
    text-transform: uppercase;
    text-decoration: none; */
}


</style>