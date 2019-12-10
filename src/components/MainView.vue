<template>
    <div>
        <div>
            <graphs/>
        </div>
        <div>
            <slider/>
        </div>
    </div>
</template>

<script>
    import Slider from "./Slider";
    import Graphs from "./Graphs";
    export default {
        name: "MainView",
        components: {Graphs, Slider}
    }
</script>

<style scoped>

</style>
