import { useState } from "react";
import { CountriesType } from "../../types/interfaceCountries";

interface PropsDataType {
  countriesData?: CountriesType[];
}

export const CoutriesList = ({ countriesData }: PropsDataType) => {
  const itemsPerPage = 50;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentCoutries = countriesData?.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="w-11/12 m-auto">
        {currentCoutries
          ? currentCoutries.map((country, index) => (
              <div
                key={index}
                className="my-3 p-3 gap-2 bg-slate-500 shadow-lg rounded-xl flex flex-col justify-center items-start"
              >
                <h1 className="text-lg pl-3 pr-10  text-white font-bold bg-slate-700">
                  Name: {country.name}
                </h1>
                <h1 className="text-lg pl-3 pr-10  text-white font-bold bg-slate-700">
                  Region: {country.region}
                </h1>
                <h1 className="text-lg pl-3 pr-10  text-white font-bold bg-slate-700">
                  Area: {country.area}/Km2
                </h1>
              </div>
            ))
          : null}
      </div>
      <div className="flex justify-center m-auto">
        {Array.from(
          { length: Math.ceil((countriesData?.length || 0) / itemsPerPage) },
          (_, i) => (
            <button className="m-5 w-10 text-lg font-bold  text-white rounded-lg bg-slate-500 " key={i}  onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </button>
          )
        )}
      </div>
    </>
  );
};
