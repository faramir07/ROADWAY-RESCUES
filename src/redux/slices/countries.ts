import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/indext";
import { CountriesType } from "../../types/interfaceCountries";

interface InitialSliceCountriesType {
  allCountries?: CountriesType[];
  filterCountries?: CountriesType[];
}

const initialState: InitialSliceCountriesType = {
  allCountries: undefined,
  filterCountries: undefined,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    allCountries: (state, action: PayloadAction<CountriesType[]>) => {
      state.allCountries = action.payload;
    },
    filterAlphabeticalAsc: (state) => {
      if (state.filterCountries && state.filterCountries.length < 0) {
        state.filterCountries = [...state.filterCountries].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (state.allCountries) {
        state.filterCountries = [...state.allCountries].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
    },
    filterAlphabeticalDesc: (state) => {
      if (state.filterCountries && state.filterCountries.length < 0) {
        state.filterCountries = [...state.filterCountries].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      } else if (state.allCountries) {
        state.filterCountries = [...state.allCountries].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
    },
    filterByRegion: (state, action: PayloadAction<string>) => {
      if (state.allCountries) {
        state.filterCountries = state.allCountries.filter(
          (country) => country.region === action.payload
        );
      }
    },
    filterByCountry: (state, action: PayloadAction<string>) => {
      if (action.payload === "") {
        state.filterCountries = [];
        return;
      }

      if (state.allCountries) {
        const countryName = action.payload;

        // Encuentra el país seleccionado
        const selectedCountry = state.allCountries.find(
          (country) => country.name === countryName
        );

        if (selectedCountry) {
          const countriesLess = state.allCountries.filter(
            (country) => country.area < selectedCountry.area
          );

          // Ordena los países con áreas más pequeñas de mayor a menor
          const sortedCountriesLess = countriesLess.sort(
            (a, b) => b.area - a.area
          );

          // Construye el nuevo array con el país seleccionado al principio y los demás ordenados
          const newFilteredCountries = selectedCountry
            ? [selectedCountry, ...sortedCountriesLess]
            : [];

          state.filterCountries = newFilteredCountries;
        }
      }
    },
  },
});

export const {
  allCountries,
  filterAlphabeticalAsc,
  filterAlphabeticalDesc,
  filterByRegion,
  filterByCountry,
} = countriesSlice.actions;

export const selectCountries = (state: RootState) => state.countriesSlice;

export default countriesSlice.reducer;
