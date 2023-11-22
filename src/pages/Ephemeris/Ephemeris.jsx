import { useState } from "react";
import { RiAiGenerate } from "react-icons/ri";
import { useEphemerisStore } from "../../store/Ephemeris";
import { Loader,Aside,Table } from "../../components/index";

export function Ephemeris() {
  const [open, setOpen] = useState(false);
  const { ephemeris, loading } = useEphemerisStore();
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="p-5 o 1xl:flex 1xl:py-0 1xl:pl-0">
      <div className="flex justify-end">
        <button
          className="flex items-center gap-2 px-2 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg 1xl:hidden focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => handleClick()}
        >
          <RiAiGenerate /> Crear Efemérides
        </button>
      </div>
      <div className="left">
        <Aside isVisible={open} setVisible={handleClick} />
      </div>
      <div className="min-h-[calc(100vh-80px)] content flex-[2]">
        {loading ? (
          <Loader className="absolute" />
        ) : ephemeris===null?((
          <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
            <img
              src="/images/dinace_logo.png"
              alt="dinace logo"
              width={"250px"}
              height={"250px"}
            />
            <p className="px-5 font-medium">
              Para comenzar, por favor ingresa la fecha y/o lugar para generar
              efemérides.
            </p>
          </div>
        )):(
          <Table info={ephemeris?.result}/>
        )}
      </div>
    </div>
  );
}
