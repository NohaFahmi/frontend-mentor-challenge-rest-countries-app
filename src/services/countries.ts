import {ICountry} from "../interfaces/countries.interface";

export const CountriesService = () => {
    return {
        getAllCountries: ():Promise<ICountry[]> => {
            return fetch(
                "https://restcountries.com/v2/all")
                .then((res) => res.json())
                .then((countries) => {
                    return countries;
                });
        },
        getCountryByCode: (code: string):Promise<ICountry> => {
            return fetch(
                `https://restcountries.com/v2/alpha/${code}`)
                .then((res) => res.json())
                .then((country) => {
                    return country;
                });
        },
        getCountryBorders: (codes: string[]):Promise<{name: string}[]> => {
            return fetch(
                `https://restcountries.com/v2/alpha?codes=${codes}&fields=name`)
                .then((res) => res.json())
                .then((countries) => {
                    return countries;
                })
        },
        filterCountriesByName: (name: string):Promise<ICountry[]> => {
            return fetch(`https://restcountries.com/v2/name/${name}`)
                .then((res) => res.json())
                .then((countries)=>{
                return countries;
            })
        },
        getCountriesInRegion: (region: string): Promise<ICountry[]> => {
            return fetch(`https://restcountries.com/v2/region/${region}`)
                .then((res) => res.json())
                .then((countries) => {
                    return countries;
                })
        }
    }
}

