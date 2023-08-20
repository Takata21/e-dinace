import { GalaxiesCard } from '../components'
import { SearchGalaxy } from '../components/SearchGalaxy'
import { SelectGalaxy } from '../components/SelectGalaxy'

export function Galaxies() {
  const galaxies = [
    {
      id: '14c1a9ea-547f-4bf4-8dea-6076e949b83e',
      galaxy: {
        original: 'Andromeda Galaxy',
        translated: 'Galaxia de Andrómeda',
      },
    },
    {
      id: '24d555a4-1b6c-4a90-8ef6-0bb40e393c0f',
      galaxy: {
        original: 'Antennae Galaxies',
        translated: 'Galaxias de las Antenas',
      },
    },
    {
      id: 'fddc3203-dc1e-488f-b454-6605b8e517be',
      galaxy: {
        original: 'Backward Galaxy',
        translated: 'Galaxia Reversa',
      },
    },
    {
      id: '7c5e11a4-352d-4fae-a8f5-86b33615db5c',
      galaxy: {
        original: 'Black Eye Galaxy',
        translated: 'Galaxia del Ojo Negro',
      },
    },
    {
      id: '8a48b108-9cf7-4fa5-9dfe-3bdad1a4aa17',
      galaxy: {
        original: "Bode's Galaxy",
        translated: 'Galaxia de Bode',
      },
    },
    {
      id: '2690e59b-f467-41ba-994f-dc4248247af7',
      galaxy: {
        original: 'Butterfly Galaxies',
        translated: 'Galaxias de Mariposa',
      },
    },
    {
      id: '4e721c51-24ce-4f05-8a29-7892a9040cbe',
      galaxy: {
        original: 'Cartwheel Galaxy',
        translated: 'Galaxia de la Rueda de Carro',
      },
    },
    {
      id: 'ff4e06eb-e76a-4e34-a073-31d731cb9eb9',
      galaxy: {
        original: 'Cigar Galaxy',
        translated: 'Galaxia del Cigarro',
      },
    },
    {
      id: 'd90a9b74-a502-4421-9d7a-c94bd1d24e40',
      galaxy: {
        original: 'Circinus Galaxy',
        translated: 'Galaxia del Compás',
      },
    },
    {
      id: 'cffb936c-7b4b-4937-b368-1ef30c50993d',
      galaxy: {
        original: 'Coma Pinwheel Galaxy',
        translated: 'Galaxia de la Rueda de Carro de Coma',
      },
    },
    {
      id: '86b2e9c3-f822-4c73-9f05-7186f621f92f',
      galaxy: {
        original: 'Comet Galaxy',
        translated: 'Galaxia del Cometa',
      },
    },
    {
      id: '7b33a52a-eab6-45c9-a623-ad638001a0fe',
      galaxy: {
        original: 'Condor Galaxy',
        translated: 'Galaxia del Cóndor',
      },
    },
    {
      id: '0769a29e-f7b6-4f44-98a4-e9a41b4390b4',
      galaxy: {
        original: 'Cosmos Redshift 7',
        translated: 'Cosmos Desplazamiento al Rojo 7',
      },
    },
    {
      id: '1590feea-40f4-4221-8c48-4ceec18ab9a0',
      galaxy: {
        original: 'Eye of Sauron',
        translated: 'Ojo de Sauron',
      },
    },
    {
      id: 'bbe7b2cd-0bdd-48d8-b9b4-3f8370e81ed6',
      galaxy: {
        original: 'Fireworks Galaxy',
        translated: 'Galaxia de los Fuegos Artificiales',
      },
    },
    {
      id: 'a6609fc4-dab7-44c9-bf8d-428111a4664c',
      galaxy: {
        original: 'Hockey Stick Galaxies',
        translated: 'Galaxias del Palo de Hockey',
      },
    },
    {
      id: '4ecf0a05-0e7e-4bb0-88b6-cbfb427b1d00',
      galaxy: {
        original: "Hoag's Object",
        translated: 'Objeto de Hoag',
      },
    },
    {
      id: 'bf193d8e-35d0-44ce-9c44-2a2a1964ab50',
      galaxy: {
        original: 'Large Magellanic Cloud',
        translated: 'Gran Nube de Magallanes',
      },
    },
    {
      id: '320560be-7db3-4b9f-8214-7e5f90d35308',
      galaxy: {
        original: 'Lindsay-Shapley Ring',
        translated: 'Anillo de Lindsay-Shapley',
      },
    },
    {
      id: 'f1ee1320-7d39-4e0c-852d-a29a45577c83',
      galaxy: {
        original: 'Little Sombrero Galaxy',
        translated: 'Galaxia Pequeño Sombrero',
      },
    },
    {
      id: '4f1567e4-2ab8-46fb-ab69-d714a72783ff',
      galaxy: {
        original: 'Malin 1',
        translated: 'Malin 1',
      },
    },
    {
      id: '57d35f03-198f-4990-b05b-30cfa63a3524',
      galaxy: {
        original: 'Medusa Merger',
        translated: 'Fusión de Medusa',
      },
    },
    {
      id: '87aeae10-7ec7-4cd4-b1e6-15990588f859',
      galaxy: {
        original: 'Sculptor Dwarf Galaxy',
        translated: 'Galaxia Enana Escultor',
      },
    },
    {
      id: '15ce4cf0-2787-495b-a1cb-8b2484292291',
      galaxy: {
        original: 'Mice Galaxies',
        translated: 'Galaxias Ratón',
      },
    },
    {
      id: 'd055de1a-3337-41f2-968f-afda7587917f',
      galaxy: {
        original: 'Small Magellanic Cloud',
        translated: 'Nube Menor de Magallanes',
      },
    },
    {
      id: '22ebbc26-9fd5-45ab-babb-07debb8cab4f',
      galaxy: {
        original: "Mayall's Object",
        translated: 'Objeto de Mayall',
      },
    },
    {
      id: '4f9d6aaf-41bc-4709-a79e-ab9e0a6eecff',
      galaxy: {
        original: 'Milky Way',
        translated: 'Vía Láctea',
      },
    },
    {
      id: '598e674e-2fe7-4e09-9cab-24e690164382',
      galaxy: {
        original: 'Needle Galaxy',
        translated: 'Galaxia Aguja',
      },
    },
    {
      id: 'bfcbf3bf-b20b-4ccc-b284-9c477816e739',
      galaxy: {
        original: 'Wolf-Lundmark-Melotte',
        translated: 'Wolf-Lundmark-Melotte',
      },
    },
    {
      id: '108c9485-88bc-41d0-9fca-2d016b6f1c69',
      galaxy: {
        original: 'Peekaboo Galaxy',
        translated: 'Galaxia Peekaboo',
      },
    },
    {
      id: 'c2aa57c3-96d4-46f0-bb20-770a75f3caa4',
      galaxy: {
        original: 'Pinwheel Galaxy',
        translated: 'Galaxia Molinillo',
      },
    },
    {
      id: '5cfddca5-54f2-4f31-b1df-177de34c411c',
      galaxy: {
        original: 'Sculptor Galaxy',
        translated: 'Galaxia Escultor',
      },
    },
    {
      id: 'a7dcdbde-c3fe-4dcb-a7d9-ff9a188dcd98',
      galaxy: {
        original: 'Sombrero Galaxy',
        translated: 'Galaxia Sombrero',
      },
    },
    {
      id: '2b149268-b477-4feb-832c-71eeda1ea387',
      galaxy: {
        original: 'Southern Pinwheel Galaxy',
        translated: 'Galaxia del Molinillo del Sur',
      },
    },
    {
      id: '220b4cce-2fe7-40d7-bde8-54281c49b603',
      galaxy: {
        original: 'Sunflower Galaxy',
        translated: 'Galaxia Girasol',
      },
    },
    {
      id: 'f41a1a5e-a9ff-42ee-9596-a8e3f2084766',
      galaxy: {
        original: 'Tadpole Galaxy',
        translated: 'Galaxia Renacuajo',
      },
    },
    {
      id: '9dd4b82c-6422-42c2-9126-f341d91f4326',
      galaxy: {
        original: 'Triangulum Galaxy',
        translated: 'Galaxia Triángulo',
      },
    },
    {
      id: '1d0708df-1256-4bae-abab-9edf038ea562',
      galaxy: {
        original: 'Whirlpool Galaxy',
        translated: 'Galaxia Remolino',
      },
    },
  ]

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] items-center justify-center w-full min-h-screen gap-5 p-5 dark:bg-[#18202b]">
      <div className="lg:col-span-4">
        <SearchGalaxy />
        <SelectGalaxy />
      </div>
      {galaxies.map((galaxy) => (
        <GalaxiesCard
          key={galaxy.id}
          galaxy={galaxy.galaxy.original}
          id={galaxy.id}
        />
      ))}
    </div>
  )
}
