import { useEffect } from "react";
import { axiosCountries } from "../../redux/util/coutries";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/indext";
import { CoutriesList } from "./CountriesList";

export const Countries = () => {
  const dispatch = useAppDispatch();

  const { allCountries, filterCountries } = useAppSelector(
    (state) => state.countriesSlice
  );

  useEffect(() => {
    const getData = async () => {
      await axiosCountries(dispatch);
    };

    getData();
  }, [dispatch]);

  return (
    <>
      <div>
        {filterCountries && filterCountries?.length > 0 ? (
          <CoutriesList countriesData={filterCountries} />
        ) : (
          <CoutriesList countriesData={allCountries} />
        )}
      </div>
    </>
  );
};
