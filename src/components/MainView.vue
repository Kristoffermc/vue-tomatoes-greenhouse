<template>
    <div>
        <div>
            <graphs/>
        </div>
        <div>
            <slider/>
        </div>
        <div>
            <testsocket/>
        </div>
    </div>
</template>

<script>
    import Slider from "./Slider";
    import Graphs from "./Graphs";
    import testsocket from "./testsocket";
    export default {
        name: "MainView",
        components: {Graphs, Slider, testsocket}
    }
</script>

<style scoped>

</style>
