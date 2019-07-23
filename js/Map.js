import allCountries from './allCountriesData.js'
import jvmCountries from './jVectorMap-Date.js';

class Map {
    constructor() {
        this.searchCountryClass = document.querySelector('.countries__search');
        this.searchingTypeClass = document.querySelector('.coutries__searching-type');
        this.findedCountriesClass = document.querySelector('.countries__finded');
        this.visitedCountryClass = document.querySelector('.visitedCountries');
        this.barOfAllCountries = document.querySelector('.instruction__countryList');
        this.visitedContinentClass = document.querySelectorAll('.singleCountryContinent');
        this.instructionButton = document.querySelector('.instruction__button');
        this.visitedCountries = [];
        this.listOfCountries = Object.values(jvmCountries)
        this.ifExist = false;
        this.index = 0;
        this.listOfContinents = ['Asia', 'Africa', 'AmericaN', 'AmericaS', 'Europe', 'Oceania', 'Antarctica'];
        this.showInstruction();
        this.getContinent();
        this.barListOfAllCountries();
        this.initializeMap();
        this.searchCountry();
        this.changeSelectValue();
        this.deleteCountryBin();

    }

    showInstruction(){
        this.instructionButton.addEventListener('click',() => {
            document.querySelector('.instruction').classList.toggle('instruction--active')
            document.querySelector('.instruction__content-container').classList.toggle('instruction__content-container--active');
        })
    }

    barListOfAllCountries() {
        this.barOfAllCountries.addEventListener('click', () => {
            this.listOfCountries.forEach(element => {
                document.querySelector('.countryListContainer__countries').innerHTML += `${element.name} : ${element.code} <br>`
            })
            document.querySelector('.countryListContainer').classList.add('countryListContainer--active');
            document.querySelector('.countryListContainer__icon').classList.add('countryListContainer__icon--active')
        });

        document.querySelector('.countryListContainer__icon').addEventListener('click', () => {
            document.querySelector('.countryListContainer__countries').textContent = ""
            document.querySelector('.countryListContainer__icon').classList.remove('countryListContainer__icon--active')
            document.querySelector('.countryListContainer').classList.remove('countryListContainer--active');
        })
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

    clearChilds(className) {

        let child = className.lastElementChild;
        while (child) {
            className.removeChild(child);
            child = className.lastElementChild;
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
                            this.addVisitedCountryContinent();
                        }
                    })
                    document.querySelector('.header__counted-visited--number').textContent = this.visitedCountries.length;
                }

                const map = $('.map-container__map').vectorMap('get', 'mapObject');
                map.setSelectedRegions(event.target.dataset.id);
                this.searchCountryClass.value = ""

                this.clearChilds(this.findedCountriesClass);

                document.querySelector('.countryListContainer__countries').textContent = ""
                document.querySelector('.countryListContainer__icon').classList.remove('countryListContainer__icon--active')
                document.querySelector('.countryListContainer').classList.remove('countryListContainer--active');

            }
        })





    }

    createCountryContinent(name, code, continent) {
        const div = document.createElement("div");
        div.classList.add("singleCountryContinent__container");
        div.dataset.idcountry = `${code}`;
        document.querySelector(`.visitedCountries__wrapper--${continent}`).appendChild(div);

        const img = document.createElement("img");
        img.classList.add("singleCountryContinent__flag");
        img.src = `./images/flag/${code.toLowerCase()}.png`;
        img.alt = `${code} flag`;
        document.querySelector(`[data-idcountry = "${code}"]`).appendChild(img);

        const countryName = document.createElement("h3");
        countryName.classList.add("singleCountryContinent__name");
        countryName.textContent = `${name}`;
        document.querySelector(`[data-idcountry = "${code}"]`).appendChild(countryName);

        const bin = document.createElement("i")
        bin.classList.add('singleCountryContinent__bin', 'far', 'fa-trash-alt');
        bin.dataset.idb = `${code}`
        document.querySelector(`[data-idcountry = "${code}"]`).appendChild(bin);
    }


    addVisitedCountryContinent() {
        if (this.visitedCountries != 0) {
            this.visitedCountryClass.classList.add('visitedCountries--active')
            this.visitedCountries.forEach((element, index) => {
                for (let i = 0; i < this.listOfContinents.length; i++) {
                    if (this.listOfContinents[i] == element.continent) {
                        document.querySelector(`.visitedCountries__continent--${element.continent}`).classList.add('visitedCountries__continent--active');
                        this.createCountryContinent(element.name, element.code, element.continent)
                        break;
                    }
                }
            })
        } else {
            this.visitedCountryClass.classList.remove('visitedCountries--active')
        }

    }

    checkIfCountryContinentExist() {
        if (this.visitedCountries != 0) {
            this.visitedCountryClass.classList.add('visitedCountries--active');

            this.listOfContinents.forEach(element => {
                let counter = 0;
                for (let i = 0; i < this.visitedCountries.length; i++) {
                    if (this.visitedCountries[i].continent == element)
                        counter++;
                }

                if (counter == 0) {
                    document.querySelector(`.visitedCountries__continent--${element}`).classList.remove('visitedCountries__continent--active');
                }
            })



        } else {
            this.visitedCountryClass.classList.remove('visitedCountries--active')
            this.listOfContinents.forEach(ele => {
                if (document.querySelector(`.visitedCountries__continent--${ele}`).classList.contains('visitedCountries__continent--active')) {
                    document.querySelector(`.visitedCountries__continent--${ele}`).classList.remove('visitedCountries__continent--active')
                }
            })
        }
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
                        document.querySelector('.header__counted-visited--number').textContent = this.visitedCountries.length;

                        this.visitedContinentClass.forEach(element => {
                            let child = element.lastElementChild;
                            while (child) {
                                element.removeChild(child);
                                child = element.lastElementChild;
                            }
                        })

                        this.addVisitedCountryContinent();
                    } else if (this.ifExist == true) {
                        this.listOfCountries.push(this.visitedCountries[this.index]);
                        document.querySelector(`[data-idcountry = "${this.visitedCountries[this.index].code}"]`).remove();
                        this.visitedCountries.splice(this.index, 1);
                        this.checkIfCountryContinentExist();
                        document.querySelector('.header__counted-visited--number').textContent = this.visitedCountries.length;
                    }
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

    }

    changeSelectValue() {
        document.querySelector('.coutries__searching-type').addEventListener('change', () => {
            this.searchCountryClass.value = ""
            this.clearChilds(this.findedCountriesClass);
        })
    }

    searchCountry() {
        this.searchCountryClass.addEventListener('input', (event) => {
            event.preventDefault();
            const value = event.target.value;
            this.clearChilds(this.findedCountriesClass);

            this.visitedContinentClass.forEach(element => {
                let child = element.lastElementChild;
                while (child) {
                    element.removeChild(child);
                    child = element.lastElementChild;
                }
            })
            

            this.listOfCountries.forEach((element) => {
                if (this.searchingTypeClass.value == "code") {
                    if (element.code.toLowerCase().includes(value.toLowerCase())) {
                        this.createElementCountries(element.code, element.name)
                        this.addVisitedCountry();
                        this.visitedCountryClass.classList.remove('visitedCountries--active')
                    }
                } else if (this.searchingTypeClass.value == "country-name") {
                    if (element.name.toLowerCase().includes(value.toLowerCase())) {
                        this.createElementCountries(element.code, element.name)
                        this.addVisitedCountry();
                        this.visitedCountryClass.classList.remove('visitedCountries--active')
                    }
                }
            })

            if (this.searchCountryClass.value == "") {
                this.clearChilds(this.findedCountriesClass);
                this.addVisitedCountryContinent();
            }
        })

    }

    deleteCountryBin() {
        document.querySelector('.visitedCountries__container').addEventListener('click', event => {
            if (event.target.dataset.idb) {
                const code = event.target.dataset.idb
                let id = 0;

                this.visitedCountries.forEach((element,index) => {
                    if(element.code == code){
                        id = index;
                    }
                })

                this.listOfCountries.push(this.visitedCountries[id]);
                document.querySelector(`.visitedCountries__wrapper--${this.visitedCountries[id].continent}`).removeChild(document.querySelector(`[data-idcountry = "${this.visitedCountries[id].code}"]`))
                this.visitedCountries.splice(id, 1);
                this.checkIfCountryContinentExist();
                document.querySelector('.header__counted-visited--number').textContent = this.visitedCountries.length;
                
                const map = $('.map-container__map').vectorMap('get', 'mapObject');
                map.clearSelectedRegions();
                this.visitedCountries.forEach(element => {
                    map.setSelectedRegions(element.code)
                }) 
            }
        })

    }
}

const mainMap = new Map();