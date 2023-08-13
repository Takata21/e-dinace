export function InfoCard({ label, desc }) {
  return (
    <li className="border-[#ffffff50] border py-4 px-4 flex justify-between items-center lg:flex-col lg:justify-start lg:items-start lg:w-64">
      <span className="text-lg font-semibold text-white uppercase opacity-50">
        {label.replace(/([A-Z])/g, ' $1')}
      </span>
      <span className="w-1/2 text-right uppercase font-Antonio lg:text-left lg:w-auto lg:text-xl">
        {desc}
      </span>
    </li>
  )
}
