import { csvToObjectArray } from "../utils/ephemerisUtils";
import { Headers } from "../assets/constant";
import { EphemerisInfo } from "./index";
export function Table({ info }) {
  console.log(info);
  const data = csvToObjectArray(info);
  return (
    <div className="mx-5 overflow-y-auto h-[calc(100vh-80px)] w-full scroll-table">
      <h2 className="my-2 text-2xl font-bold">
        Información de Efemérides Generada(s)
      </h2>
      <EphemerisInfo />
      <div className="1xl:hidden">
        {data?.map((ephem, i) => (
          <dl
            key={ephem.tkt}
            className="[&>*:nth-child(odd)]:bg-gray-300 dark:[&>*:nth-child(odd)]:bg-gray-900 "
          >
            <div className="grid justify-between grid-cols-2 gap-5 border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <dt className="pl-2 text-sm font-bold">{Headers[0].original}</dt>
              <dd className="">{ephem?.date}</dd>
            </div>
            <div className="grid justify-between grid-cols-2 gap-5 border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
              <dt className="pl-2 text-sm font-bold">{Headers[1].original}</dt>
              <dd className="">{ephem?.raIcrf}</dd>
            </div>
            <div className="grid justify-between grid-cols-2 gap-5 border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
              <dt className="pl-2 text-sm font-bold">{Headers[2].original}</dt>
              <dd className="">{ephem?.decIcrf}</dd>
            </div>
            <div className="grid justify-between grid-cols-2 gap-5 border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
              <dt className="pl-2 text-sm font-bold">{Headers[3].original}</dt>
              <dd className="">{ephem?.ApMag}</dd>
            </div>
            <div className="grid justify-between grid-cols-2 gap-5 border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
              <dt className="pl-2 text-sm font-bold">{Headers[4].original}</dt>
              <dd className="">{ephem?.sBrt}</dd>
            </div>
            <div className="grid justify-between grid-cols-2 gap-5 border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
              <dt className="pl-2 text-sm font-bold">{Headers[5].original}</dt>
              <dd className="">{ephem?.delta}</dd>
            </div>
            <div className="grid justify-between grid-cols-2 gap-5 border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
              <dt className="pl-2 text-sm font-bold">
                {Headers[6].abbreviation}
              </dt>
              <dd className="">{ephem?.delDot}</dd>
            </div>
            <div className="grid justify-between grid-cols-2 gap-5 border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
              <dt className="pl-2 text-sm font-bold">{Headers[7].original}</dt>
              <dd className="">{ephem?.sotr}</dd>
            </div>
            <div className="grid justify-between grid-cols-2 gap-5 border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
              <dt className="pl-2 text-sm font-bold">
                {Headers[8].abbreviation}
              </dt>
              <dd className="">{ephem?.sto}</dd>
            </div>
            <div className="grid justify-between grid-cols-2 gap-5 border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
              <dt className="pl-2 text-sm font-bold">{Headers[9].original}</dt>
              <dd className="">{ephem?.cnst}</dd>
            </div>
          </dl>
        ))}
      </div>

      <table
        className="hidden w-full my-5 xl:table md:overflow-x-auto"
        data-testid="ephemeris-result"
      >
        <thead>
          <tr>
            {Headers.map((text, index) => (
              <th data-testid="th" key={index} className="text-sm text-left">
                {text?.abbreviation}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((ephem) => (
            <tr key={ephem.date}>
              <td className="py-2 text-sm text-left">{ephem?.date}</td>
              <td className="py-2 text-sm text-left">{ephem?.raIcrf}</td>
              <td className="py-2 text-sm text-left">{ephem?.decIcrf}</td>
              <td className="py-2 text-sm text-left">{ephem?.ApMag}</td>
              <td className="py-2 text-sm text-left">{ephem?.sBrt}</td>
              <td className="py-2 text-sm text-left">{ephem?.delta}</td>
              <td className="py-2 text-sm text-left">{ephem?.delDot}</td>
              <td className="py-2 text-sm text-left">{ephem?.sotr}</td>
              <td className="py-2 text-sm text-left">{ephem?.sto}</td>
              <td className="py-2 text-sm text-left">{ephem?.cnst}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
