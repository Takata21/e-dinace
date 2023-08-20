export function InfoCard({ label, desc }) {
  return (
    <li className="dark:border-[#ffffff50] border border-gray-200 py-4 px-4 flex justify-between items-center lg:flex-col lg:justify-start lg:items-start lg:w-64 bg-[#f7f7f9] rounded-sm dark:bg-gray-800">
      <span className="text-lg font-semibold uppercase opacity-50 dark:text-white">
        {label.replace(/([A-Z])/g, ' $1')}
      </span>
      <span className="w-1/2 text-right uppercase font-Antonio lg:text-left lg:w-auto lg:text-xl">
        {desc}
      </span>
    </li>
  )
}
