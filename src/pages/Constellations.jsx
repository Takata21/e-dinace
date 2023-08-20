import { SearchConstellations } from '../components/SearchConstellations'
import { SelectConstellations } from '../components/SelectConstellations'
import { ConstellationCard } from '../components/index'
export function Constellations() {
  const constellations_ = [
    { name: 'Andromeda' },
    { name: 'Antlia' },
    { name: 'Apus' },
    { name: 'Aquarius' },
    { name: 'Aquila' },
    { name: 'Ara' },
    { name: 'Aries' },
    { name: 'Auriga' },
    { name: 'Bootes' },
    { name: 'Caelum' },
    { name: 'Camelopardalis' },
    { name: 'Cancer' },
    { name: 'Canes Venatici' },
    { name: 'Canis Major' },
    { name: 'Canis Minor' },
    { name: 'Capricornus' },
    { name: 'Carina' },
    { name: 'Cassiopeia' },
    { name: 'Centaurus' },
    { name: 'Cepheus' },
    { name: 'Cetus' },
    { name: 'Chamaeleon' },
    { name: 'Circinus' },
    { name: 'Columba' },
    { name: 'Coma Berenices' },
    { name: 'Corona Australis' },
    { name: 'Corona Borealis' },
    { name: 'Corvus' },
    { name: 'Crater' },
    { name: 'Crux' },
    { name: 'Cygnus' },
    { name: 'Delphinus' },
    { name: 'Dorado' },
    { name: 'Draco' },
    { name: 'Equuleus' },
    { name: 'Eridanus' },
    { name: 'Fornax' },
    { name: 'Gemini' },
    { name: 'Grus' },
    { name: 'Hercules' },
    { name: 'Horologium' },
    { name: 'Hydra' },
    { name: 'Hydrus' },
    { name: 'Indus' },
    { name: 'Lacerta' },
    { name: 'Leo' },
    { name: 'Leo Minor' },
    { name: 'Lepus' },
    { name: 'Libra' },
    { name: 'Lupus' },
    { name: 'Lynx' },
    { name: 'Lyra' },
    { name: 'Mensa' },
    { name: 'Microscopium' },
    { name: 'Monoceros' },
    { name: 'Musca' },
    { name: 'Norma' },
    { name: 'Octans' },
    { name: 'Ophiuchus' },
    { name: 'Orion' },
    { name: 'Pavo' },
    { name: 'Pegasus' },
    { name: 'Perseus' },
    { name: 'Phoenix' },
    { name: 'Pictor' },
    { name: 'Pisces' },
    { name: 'Piscis Austrinus' },
    { name: 'Puppis' },
    { name: 'Pyxis' },
    { name: 'Reticulum' },
    { name: 'Sagitta' },
    { name: 'Sagittarius' },
    { name: 'Scorpius' },
    { name: 'Sculptor' },
    { name: 'Scutum' },
    { name: 'Serpens' },
    { name: 'Sextans' },
    { name: 'Taurus' },
    { name: 'Telescopium' },
    { name: 'Triangulum' },
    { name: 'Triangulum Australe' },
    { name: 'Tucana' },
    { name: 'Ursa Major' },
    { name: 'Ursa Minor' },
    { name: 'Vela' },
    { name: 'Virgo' },
    { name: 'Volans' },
    { name: 'Vulpecula' },
  ]

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center justify-center w-full min-h-screen gap-5 p-5 dark:bg-[#18202b]">
      <div className="lg:col-span-4">
        <SearchConstellations />
        <SelectConstellations />
      </div>
      {constellations_.map((constellation) => (
        <ConstellationCard
          key={constellation.name}
          constellation={constellation.name}
        />
      ))}
    </div>
  )
}
