import debounce from "just-debounce-it";
import { GalaxiesCard, Loader } from "../components";
import SearchForm from "../components/SearchForm";
import { useSearch } from "../hooks/useSearch";
import { useCallback } from "react";
import { useGalaxies } from "../hooks/useGalaxies";
import { clsx } from "clsx";
export function Galaxies() {
  const { search, searchError, setSearch } = useSearch();
  const { getGalaxies, galaxies, loading } = useGalaxies({ search });

  const debounceGetConstellations = useCallback(
    debounce((search) => {
      getGalaxies({ search });
    }, 300),
    [getGalaxies]
  );
  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    debounceGetConstellations(newSearch);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    getGalaxies({ search });
  };
  return (
    <div className="p-5">
      <section>
        <SearchForm
          search={search}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchError={searchError}
          emptyMessage={"Por favor, ingresa una galaxia."}
        />
      </section>
      <div
        className={clsx(
          {
            "grid-cols-[repeat(auto-fill,minmax(300px,1fr))] ": loading !== true,
          },
          "grid items-center justify-center w-full min-h-screen gap-5 p-5 dark:bg-[#18202b]"
        )}
        data-test-id="galaxies"
      >
        {loading ? (
          <div className="relative h-full">
            <Loader />
          </div>
        ) : galaxies?.length > 0 ? (
          galaxies.map((galaxy) => (
            <GalaxiesCard
              key={galaxy.id}
              galaxy={galaxy.galaxy.original}
              id={galaxy.id}
            />
          ))
        ) : (
          <h2 className="flex justify-center w-full mx- col-span-full">
            No hay resultados para su búsqueda
          </h2>
        )}
      </div>
    </div>
  );
}
