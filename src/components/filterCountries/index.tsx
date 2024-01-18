import { useAppDispatch, useAppSelector } from "../../redux/hooks/indext";
import {
  filterAlphabeticalAsc,
  filterAlphabeticalDesc,
  filterByCountry,
  filterByRegion,
} from "../../redux/slices/countries";

export const FilterCountries = () => {
  const dispatch = useAppDispatch();

  const { allCountries } = useAppSelector((state) => state.countriesSlice);

  const region = allCountries?.map((country) => country.region);
  const country = allCountries?.map((country) => country.name);

  const filterAsc = () => {
    dispatch(filterAlphabeticalAsc());
  };

  const filterDes = () => {
    dispatch(filterAlphabeticalDesc());
  };

  const filterRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filterByRegion(event.target.value));
  };

  const filterCountry = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filterByCountry(event.target.value));
  };

  return (
    <>
      <div className="w-11/12  m-auto flex flex-row flex-nowrap justify-around items-center">
        <div className="flex flex-col gap-2 justify-center items-start">
          <h1>Ordenar por: </h1>
          <button
            className="w-32 rounded-lg bg-slate-500 shadow-lg text-white font-semibold"
            onClick={filterAsc}
          >
            Asc
          </button>
          <button
            className="w-32 rounded-lg bg-slate-500 shadow-lg text-white font-semibold"
            onClick={filterDes}
          >
            Desc
          </button>
        </div>
        <div className="flex flex-row gap-3 flex-nowrap justify-center items-center">
          <select
            className="w-40 px-3 rounded-lg bg-slate-500 shadow-lg text-white font-semibold"
            name="select"
            onChange={filterRegion}
          >
            <option value="">Elige la Region</option>
            {region?.map((region, index) => (
              <option key={index} value={region}>
                {region}
              </option>
            ))}
          </select>
          <select
            className="w-40 px-3 rounded-lg bg-slate-500 shadow-lg text-white font-semibold"
            name="select"
            onChange={filterCountry}
          >
            <option value="">Elige el Pais</option>
            {country?.map((region, index) => (
              <option key={index} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};
