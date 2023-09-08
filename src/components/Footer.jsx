import React from 'react'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="relative flex items-center py-5 bg-footer-Bg">
      <img
        src="/images/logo-footer.png"
        width={100}
        alt="utp logo"
        className="hidden lg:block lg:w-28"
      />
      <div className="p-5 font-medium text-center text-white lg:text-left lg:text-[13px]">
        <h5>Universidad Tecnológica de Panamá - {year}</h5>
        <p>
          Avenida Universidad Tecnológica de Panamá, Vía Puente Centenario,
          Campus Metropolitano Víctor Levi Sasso.
        </p>
        <p>
          Teléfono: <br className="md:hidden" /> 560-3000 o marque gratuitamente
          al <br className="md:hidden" /> Centro de Atención Ciudadana 3-1-1
        </p>
        <p>
          Correo electrónico: <br className="md:hidden" />
          buzondesugerencias@utp.ac.pa
        </p>
      </div>
      <div className="absolute right-5 bottom-5"></div>
    </footer>
  )
}
