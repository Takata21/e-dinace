import React from 'react'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-footer-Bg flex items-center">
      <img
        src="/images/logo-footer.png"
        width={100}
        alt="utp logo"
        className="hidden md:block"
      />
      <div className="text-center p-5 md:text-left text-white font-medium">
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
    </footer>
  )
}
