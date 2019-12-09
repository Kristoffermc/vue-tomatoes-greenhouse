<template>
    <div>
        <div>
            <graphs/>
        </div>
        <div style="width: 100%">
            <slider/>
        </div>
    </div>
</template>

<script>
    import Slider from "./Slider";
    import Graphs from "./graphs";
    export default {
        name: "MainView",
        components: {Graphs, Slider}
    }
</script>

<style scoped>

</style>
