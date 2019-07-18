import allCountries from './allCountriesData.js'
import jvmCountries from './jVectorMap-Date.js';

class Map {
    constructor() {
        this.searchCountryClass = document.querySelector('.countries__search');
        this.visitedCountries = ["PL"]
        this.listOfCountries = Object.values(jvmCountries)
        this.ifExist = false;
        this.index = 0;
        this.getContinent();
        this.initializeMap();
        this.searchCountry();


    }

    getContinent() {
        let listAllCountries = Object.values(allCountries)
        this.listOfCountries.forEach((element, index) => {
            listAllCountries.filter((ele) => {
                if (element.name == ele[1]) {
                    element.continent = ele[0]
                }
            })
        })
    }

    addVisitedCountry(code) {

        if (this.visitedCountries.length != 0) {
            for (let i = 0; i < this.visitedCountries.length; i++) {
                if (this.visitedCountries[i] == code) {
                    this.ifExist = true;
                    this.index = i;
                    break;
                } else this.ifExist = false
            }
        } else {
            this.ifExist = false;
        }

        if (this.ifExist == false) {
            this.visitedCountries.push(code)
            document.querySelector('.header__counter-visited--number').textContent = this.visitedCountries.length;
        } else if (this.ifExist == true) {
            this.visitedCountries.splice(this.index, 1)
            document.querySelector('.header__counter-visited--number').textContent = this.visitedCountries.length;
        }
        console.log(this.ifExist)
        console.log(this.visitedCountries)
    }


    initializeMap() {
        $(() => {
            $('.map-container__map').vectorMap({
                map: 'world_mill',
                backgroundColor: '#5CADD1',
                regionsSelectable: true,
                regionStyle: {
                    selected: {
                        fill: '#148300'
                    }
                },
                selectedRegions: {
                    "PL": " "
                },
                onRegionClick: (event, string) => {
                    const map = $('.map-container__map').vectorMap('get', 'mapObject');
                    const regionName = map.getRegionName(string);
                    const code = string
                    console.log(code)
                    this.addVisitedCountry(code);



                    console.log(code)
                    //console.log(this.visitedCountries)



                    //console.log(event)
                    //console.log("Code: " + code);
                    //console.log("Region Name: " + regionName);

                    //const newRegion = map.setSelectedRegions('EH');
                }
            });
        })
    }


    searchCountry() {
        this.searchCountryClass.addEventListener('input', (event) => {
            event.preventDefault();
            const value = event.target.value;

            this.listOfCountries.forEach((element) => {
                let elementValue = element.code
                if (value.toLowerCase() == elementValue.toLowerCase()) {
                    const map = $('.map-container__map').vectorMap('get', 'mapObject');
                    map.setSelectedRegions(value.toUpperCase());
                    console.log(this.ifExist)
                }
            })

        })
    }
}

const mainMap = new Map();