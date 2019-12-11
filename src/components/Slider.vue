<template>
    <div>
        <custom-slider id="slider" min="-1" max="100" step="1" @change="lol(''+slider)" :values="sliderValues" raising v-model="slider" />
    </div>


</template>

<script>
    import CustomSlider from "vue-custom-range-slider";

    // import the styling, css or scss
    import "vue-custom-range-slider/dist/vue-custom-range-slider.css";
    import RestService from "../services/RestService";

    const restService = new RestService();

    export default {
        name: "Slider",
        components: {
            CustomSlider
        },
        methods: {
            lol(value) {
                restService.changeLight(value);
            }
        },
        data() {
            return {
                listOfInfo: [],
                slider: "40",
                handleSlider: "",
                sliderValues: [
                    {
                        label: "No light",
                        value: "-1"
                    },
                    {
                        label: "A tiny bit",
                        value: "20"
                    },
                    {
                        label: "Its ok",
                        value: "40"
                    },
                    {
                        label: "Its very good",
                        value: "60"
                    },
                    {
                        label: "Its AMAZING!",
                        value: "80"
                    },
                    {
                        label: "ITS PERFECT!!",
                        value: "100"
                    }
                ]
            };
        }
    };
</script>
<style>
    .slider {
        width: 80%;
    }
</style>
