<template>
    <div class="matters">
        <div class="mat_menu" v-for="(item, idx) in 6" :key="idx">
            <div>
                <span class="menu_box">待发货订单</span>
                <span>0</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.matters{
    background: #f7f8fa;
    height: 88px;
    padding: 16px 16px 0px 0px;
    .mat_menu{
        width: 33.3%;
        height: 21px;
        float: left;
        margin-bottom: 15px;
        display: flex;
        justify-content: space-around;
        span{
            color: #323233;
            font-size: 14px;
            cursor: pointer;
        }
        span:nth-child(1):hover{
            color: #000;
            font-weight: bolder;
        }
        span:nth-child(2){
            margin-left: 10px;
            color: #df4545;
            font-size: 18px;
        }
    }
}
</style>

