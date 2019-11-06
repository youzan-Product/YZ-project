<template>
    <div class="general">
        <Mainheader></Mainheader>
        <Down></Down>
        <RealTime></RealTime>
    </div>
</template>

<script>
import Mainheader from "@/components/Mainheader.vue";
import Down from "@/views/home/Down.vue";
import RealTime from "@/views/home/RealTime.vue"

export default {
  name: "general",
  components: {
    Mainheader,
    Down,
    RealTime,
  }
};
</script>
<style lang="scss" scoped>
</style>

