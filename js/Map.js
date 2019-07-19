import allCountries from './allCountriesData.js'
import jvmCountries from './jVectorMap-Date.js';

class Map {
    constructor() {
        this.searchCountryClass = document.querySelector('.countries__search');
        this.searchingTypeClass = document.querySelector('.coutries__searching-type');
        this.findedCountriesClass = document.querySelector('.countries__finded');
        this.visitedCountries = ["PL"]
        this.listOfCountries = Object.values(jvmCountries)
        this.ifExist = false;
        this.index = 0;

        this.deletedCountryFromListOfCountries = [];
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

    addVisitedCountry() {
        this.findedCountriesClass.addEventListener('click', (event) => {
            if (event.target.dataset.id) {
                if (this.visitedCountries.length != 0) {
                    for (let i = 0; i < this.visitedCountries.length; i++) {
                        if (this.visitedCountries[i] == event.target.dataset.id) {
                            this.ifExist = true;
                            this.index = i;
                            break;
                        } else this.ifExist = false
                    }
                } else {
                    this.ifExist = false;
                }

                if (this.ifExist == false) {
                    this.visitedCountries.push(event.target.dataset.id)
                    document.querySelector('.header__counter-visited--number').textContent = this.visitedCountries.length;

                    this.listOfCountries.forEach((element, index) => {
                        if (element.code == event.target.dataset.id) {
                            this.listOfCountries.splice(index, 1);
                            this.deletedCountryFromListOfCountries.push(element)
                        }
                    })
                    console.log(this.deletedCountryFromListOfCountries)





                }




                const map = $('.map-container__map').vectorMap('get', 'mapObject');
                map.setSelectedRegions(event.target.dataset.id);
                this.searchCountryClass.value = ""

                let child = this.findedCountriesClass.lastElementChild;
                while (child) {
                    this.findedCountriesClass.removeChild(child);
                    child = this.findedCountriesClass.lastElementChild;
                }

                //console.log(this.visitedCountries)
                //console.log(this.listOfCountries)
            }
        })





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

                    console.log(this.visitedCountries)
                    
                }
            });
        })
    }

    createElement(code, countryName) {
        const divElement = document.createElement("div");
        divElement.classList.add("single-country");
        divElement.dataset.id = `${code}`;
        this.findedCountriesClass.appendChild(divElement);

        const imgElement = document.createElement("img");
        imgElement.classList.add("single-country__flag");
        imgElement.src = `./images/flag/${code.toLowerCase()}.png`;
        imgElement.alt = `${code} flag`;
        document.querySelector(`[data-id = "${code}"]`).appendChild(imgElement);

        const countryNameElement = document.createElement("h3");
        countryNameElement.classList.add("single-country__name");
        countryNameElement.textContent = `${countryName}`;
        document.querySelector(`[data-id = "${code}"]`).appendChild(countryNameElement);

        const binElement = document.createElement("i")
        binElement.classList.add('single-country__bin', 'far', 'fa-trash-alt');
        binElement.dataset.idb = `${code}`
        document.querySelector(`[data-id = "${code}"]`).appendChild(binElement);
    }


    searchCountry() {
        this.searchCountryClass.addEventListener('input', (event) => {
            event.preventDefault();
            const value = event.target.value;

            let child = this.findedCountriesClass.lastElementChild;
            while (child) {
                this.findedCountriesClass.removeChild(child);
                child = this.findedCountriesClass.lastElementChild;
            }

            this.listOfCountries.forEach((element) => {
                if (this.searchingTypeClass.value == "code") {
                    if (element.code.toLowerCase().includes(value.toLowerCase())) {
                        this.createElement(element.code, element.name)
                        this.addVisitedCountry();
                    }
                } else if (this.searchingTypeClass.value == "country-name") {
                    if (element.name.toLowerCase().includes(value.toLowerCase())) {
                        console.log(element.name)
                    }
                }




            })
        })
    }
}

const mainMap = new Map();