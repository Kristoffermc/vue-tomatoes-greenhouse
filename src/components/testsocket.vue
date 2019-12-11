<template>
    <!-- Det er her alt HTML skal skrives -->
    <div>
        <!-- Variablen bliver vist her! -->
        {{socket222}}
    </div>
</template>

<script>
    // Imports & setup
    import io from "socket.io-client";

    var socket = io.connect("http://piebrain.net:3002");

    export default {
        name: "testsocket",
        data() {
            return {
                // Variablen der skal vise indholdet fra websockets
                socket222: null
            }
        },
        methods: {
            getDataFromApi() {
                window.console.log('So far so good');

                // Her er connection til websocket
                socket.on('sensordata/1', function (data) {

                    // Sætter "socket222" til at være lig med det data man får fra websocket (Du kan se i console i browseren at der rent faktisk bliver printet data)
                    this.socket222 = data;

                    // OBS: I vue skal man bruge "window.console.log()" i stedet for "console.log()"
                    window.console.log(this.socket222);

                });
            }
        },
        // Created() bliver kørt når hjemmesiden bliver "Created" altså på opstart
        created() {
            this.getDataFromApi();
        }
    }
</script>

<style scoped>

</style>
