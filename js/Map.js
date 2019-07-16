
class Map {
    constructor(){
        console.log("mapa")
        this.initializeMap();    }

    initializeMap() {
        console.log("init")

        $(() => {
            $('.map-container').vectorMap({map: 'world_mill'});
        })
    }
}

const map = new Map();