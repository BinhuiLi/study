<template>
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <Button @click="showinfo">点我提示学校名称</Button>
    </div>
</template>

<script>
    export default{
        name:'school-info',
        data(){
            return {
                name:'尚硅谷',
                address:'北京昌平'
            }
        },
        methods:{
            showinfo(){
                alert(this.name)
            }
        }
    }
</script>

<style>
    .demo{
        background-color: orange;
    }
</style>