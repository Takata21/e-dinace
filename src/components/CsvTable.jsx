import { Headers } from '../assets/constant'
import { csvToObjectArray } from '../utils/ephemerisUtils'

export function CsvTable({ info }) {
  const data = csvToObjectArray(info)
  console.log(data)
  return <div></div>
}
