import axios from "axios";
import { allCountries } from "../slices/countries";
import { CountriesType } from "../../types/interfaceCountries";
import { Dispatch } from "@reduxjs/toolkit";

export const axiosCountries = async (dispatch: Dispatch) => {
  try {
    const response = await axios.get<CountriesType[]>(
      "https://restcountries.com/v2/all?fields=name,region,area"
    );
    const data = response.data;

    dispatch(allCountries(data));
  } catch (error) {
    console.log(error);
  }
};
