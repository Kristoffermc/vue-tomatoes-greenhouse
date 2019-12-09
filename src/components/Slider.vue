<template>
    <div v-if="post">
        <p>
            Status: {{this.post.status}}
            <br>
            Message: {{this.post.message}}
            <br>
            ID: {{this.post.data[0]._id}}
            <br>
            Name: {{this.post.data[0].name}}
            <br>
            Master: {{this.post.data[0].master}}

        </p>
        <br><br>
        <custom-slider min="0" max="100" step="1" :values="sliderValues" raising v-model="slider" />
        {{ slider }}
    </div>
</template>

<script>
    import CustomSlider from "vue-custom-range-slider";

    // import the styling, css or scss
    import "vue-custom-range-slider/dist/vue-custom-range-slider.css";
    import RestService from "../services/RestService";


    const restService = new RestService();
    export default {
        components: {
            CustomSlider
        },
        data() {
            return {
                post: null,
                slider: "40",
                sliderValues: [
                    {
                        label: "Not light at all",
                        value: "0"
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
        },
        created: async function() {
            restService.getData().then(res => {
                this.post = res.data
            });
        }
    };
</script>
<style>

</style>
