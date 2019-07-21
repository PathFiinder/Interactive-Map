import allCountries from './allCountriesData.js'
import jvmCountries from './jVectorMap-Date.js';

class Map {
    constructor() {
        this.searchCountryClass = document.querySelector('.countries__search');
        this.searchingTypeClass = document.querySelector('.coutries__searching-type');
        this.findedCountriesClass = document.querySelector('.countries__finded');
        this.visitedCountryClass = document.querySelector('.visitedCountries');
        this.visitedCountries = [];
        this.listOfCountries = Object.values(jvmCountries)
        this.ifExist = false;
        this.index = 0;
        //console.log(this.listOfCountries)
        this.listOfContinents = ['Asia','Africa','AmericaN','AmericaS','Europe','Oceania','Antarctica'];
        this.getContinent();
        this.initializeMap();
        this.searchCountry();
        this.changeSelectValue();

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

    clearChilds() {

        let child = this.findedCountriesClass.lastElementChild;
        while (child) {
            this.findedCountriesClass.removeChild(child);
            child = this.findedCountriesClass.lastElementChild;
        }
    }

    addVisitedCountry() {
        this.findedCountriesClass.addEventListener('click', (event) => {
            if (event.target.dataset.id) {

                if (this.visitedCountries.length != 0) {
                    for (let i = 0; i < this.visitedCountries.length; i++) {
                        if (this.visitedCountries[i].code == event.target.dataset.id) {
                            this.ifExist = true;
                            this.index = i;
                            break;
                        } else this.ifExist = false
                    }
                } else {
                    this.ifExist = false;
                }

                if (this.ifExist == false) {
                    this.listOfCountries.forEach((element, index) => {
                        if (element.code == event.target.dataset.id) {
                            this.visitedCountries.push(element)
                            this.listOfCountries.splice(index, 1);
                        }
                    })
                    document.querySelector('.header__counter-visited--number').textContent = this.visitedCountries.length;
                }

                const map = $('.map-container__map').vectorMap('get', 'mapObject');
                map.setSelectedRegions(event.target.dataset.id);
                this.searchCountryClass.value = ""

                this.clearChilds();
                // console.log(this.visitedCountries)
                //console.log(this.listOfCountries)
            }
        })





    }

    addVisitedCountryContinent(){
        if(this.visitedCountries != 0){
            this.visitedCountryClass.classList.add('visitedCountries--active')

            this.visitedCountries.forEach((element,index) => {
                //console.log(element.continent)

                /*this.listOfContinents.forEach((ele,id) => {
                    console.log(ele)
                    if(element.continent == ele){
                        document.querySelector(`.visitedCountries__continent--${element.continent}`).classList.add('visitedCountries__continent--active');
                        console.log(id)
                        //cos jak break !!!!
                    } else {
                        console.log(element.continent)
                        console.log(id,"nie")
                        document.querySelector(`.visitedCountries__continent--${element.continent}`).classList.remove('visitedCountries__continent--active');
                    }
                })*/
                console.log(this.visitedCountries)
                for(let i=0;i<this.listOfContinents.length;i++){
                    if(this.listOfContinents[i] == element.continent){
                        document.querySelector(`.visitedCountries__continent--${element.continent}`).classList.add('visitedCountries__continent--active');
                        console.log(element.continent + " tak")
                        break;
                    } 
                    if(this.listOfContinents[i] != element.continent){
                        document.querySelector(`.visitedCountries__continent--${element.continent}`).classList.remove('visitedCountries__continent--active');
                        console.log(element.continent + " nie")
                    }
                }
            })
            
           


        } else {
            this.visitedCountryClass.classList.remove('visitedCountries--active')
        }
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
                    //"PL": " "
                },
                onRegionClick: (event, string) => {
                    const map = $('.map-container__map').vectorMap('get', 'mapObject');
                    const regionName = map.getRegionName(string);
                    const code = string

                    if (this.visitedCountries.length != 0) {
                        for (let i = 0; i < this.visitedCountries.length; i++) {
                            if (this.visitedCountries[i].code == code) {
                                this.ifExist = true;
                                this.index = i;
                                break;
                            } else this.ifExist = false
                        }
                    } else {
                        this.ifExist = false;
                    }

                    if (this.ifExist == false) {
                        this.listOfCountries.forEach((element, index) => {
                            if (element.code == code) {
                                this.visitedCountries.push(element)
                                this.listOfCountries.splice(index, 1);
                            }
                        })
                        document.querySelector('.header__counter-visited--number').textContent = this.visitedCountries.length;
                        
                    } else if (this.ifExist == true) {
                        this.listOfCountries.push(this.visitedCountries[this.index]);
                        
                        this.visitedCountries.splice(this.index, 1);
                        document.querySelector('.header__counter-visited--number').textContent = this.visitedCountries.length;
                    }
                    //console.log(this.listOfCountries)
                    //console.log(this.visitedCountries)
                    
                }
            });
        })
    }

    createElementCountries(code, countryName) {
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

        /*const binElement = document.createElement("i")
        binElement.classList.add('single-country__bin', 'far', 'fa-trash-alt');
        binElement.dataset.idb = `${code}`
        document.querySelector(`[data-id = "${code}"]`).appendChild(binElement);*/
    }

    changeSelectValue(){
        document.querySelector('.coutries__searching-type').addEventListener('change',() => {
            this.searchCountryClass.value = ""
            this.clearChilds();
        })
    }

    searchCountry() {
        this.searchCountryClass.addEventListener('input', (event) => {
            event.preventDefault();
            const value = event.target.value;
            this.clearChilds();

            this.listOfCountries.forEach((element) => {
                if (this.searchingTypeClass.value == "code") {
                    if (element.code.toLowerCase().includes(value.toLowerCase())) {
                        this.createElementCountries(element.code, element.name)
                        this.addVisitedCountry();
                    }
                } else if (this.searchingTypeClass.value == "country-name") {
                    if (element.name.toLowerCase().includes(value.toLowerCase())) {
                        this.createElementCountries(element.code, element.name)
                        this.addVisitedCountry();
                    }
                }
            })

            if(this.searchCountryClass.value == ""){
                this.clearChilds();
            }
        })
    }
}

const mainMap = new Map();