// Modules
import { useState } from 'react';

// Components
import CustomButton from '../forms/CustomButton';

// Classes
import AppRoutes from '../../routes';
import ButtonClass from '../../classes/ButtonClass';

type Props = {
  hasBackground: boolean;
}

export default function Topbar(props: Props) {

  // States
  const [isMouseInTopBar, setIsMouseInTopBar] = useState(false);
  const [isMouseInServiceButton, setIsMouseInServiceButton] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const headerButtons = [
    { label: AppRoutes.serviciosRoute.title },
    { label: AppRoutes.sobreNosotrosRoute.title, url: AppRoutes.sobreNosotrosRoute.route },
    { label: AppRoutes.financiamientoRoute.title, url: AppRoutes.financiamientoRoute.route },
    { label: AppRoutes.contactanosRoute.title, url: AppRoutes.contactanosRoute.route }
  ];

  // Styles
  const navStyle = `
    px-4 md:px-8 h-20 flex justify-between items-center gap-4 absolute z-10 w-full 
    ${props.hasBackground ? 'bg-white' : ''} transition duration-500 ease-in-out group-hover/main-container:bg-white
  `;

  // Toggle
  function toggleIsMouseInTopBar() {
    if (isMouseInServiceButton) setIsMouseInServiceButton(false);
    setIsMouseInTopBar(!isMouseInTopBar);
  }

  function toggleIsMouseInServiceButton() {
    setIsMouseInServiceButton(!isMouseInServiceButton);
  }

  function toggleIsMouseInAnyOtherButton() {
    setIsMouseInServiceButton(false);
  }

  return (

    <div
      className='flex text-center group/main-container'
      onMouseEnter={toggleIsMouseInTopBar}
      onMouseLeave={toggleIsMouseInTopBar}
    >

      <nav className={navStyle}>

        <a href="/">

          <img
            src='/images/mi-energia-logo/logo1.png'
            className={`h-10 ${props.hasBackground ? 'block' : 'hidden group-hover/main-container:block'}`}
          />

          <img
            src='/images/mi-energia-logo/logo2.png'
            className={`h-10 group-hover/main-container:hidden ${props.hasBackground ? 'hidden' : 'block'}`}
          />

        </a>

        <div className="flex gap-4">

          <div className="hidden md:flex gap-4">

            {

              headerButtons.map((button, key) => (button.url == undefined)

                ?

                <div className='group/service-container' key={key}>

                  <CustomButton
                    buttonClass={ButtonClass.TransparentButtonsClass(`hover:bg-gray-100 ${props.hasBackground ? '' : 'text-white group-hover/main-container:text-gray-800'}`)}
                    onEnter={toggleIsMouseInServiceButton}
                  >{button.label}</CustomButton>

                  {isMouseInServiceButton && <ServicesOptions />}

                </div>

                :

                <a href={button.url} key={key}>

                  <CustomButton
                    buttonClass={ButtonClass.TransparentButtonsClass(`hover:bg-gray-100 ${props.hasBackground ? '' : 'text-white group-hover/main-container:text-gray-800'}`)}
                    onEnter={toggleIsMouseInAnyOtherButton}
                  >{button.label}</CustomButton>

                </a>

              )

            }

          </div>

        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl focus:outline-none">
            ☰
          </button>
        </div>
        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <MobileMenu
            headerButtons={headerButtons}
            isMouseInServiceButton={isMouseInServiceButton}
            setIsMouseInServiceButton={setIsMouseInServiceButton}
          />
        )}


        <div className="hidden md:block" />

      </nav>

    </div>

  )

}

function ServicesOptions() {
  const servicesList = [
    {
      label: AppRoutes.sistemaFotovoltaicoComercialEIndustrial.title,
      url: AppRoutes.sistemaFotovoltaicoComercialEIndustrial.route,
    },
    {
      label: AppRoutes.sistemaFotovoltaicoResidencialEHibrido.title,
      url: AppRoutes.sistemaFotovoltaicoResidencialEHibrido.route,
    },
    {
      label: AppRoutes.montaCargas.title,
      url: AppRoutes.montaCargas.route,
    },
    {
      label: AppRoutes.sistemaBess.title,
      url: AppRoutes.sistemaBess.route,
    },
    {
      label: AppRoutes.electromovilidadRoute.title,
      url: AppRoutes.electromovilidadRoute.route,
    },
    {
      label: AppRoutes.monitoreoRoute.title,
      url: AppRoutes.monitoreoRoute.route,
    },
    {
      label: AppRoutes.iluminariasRoute.title,
      url: AppRoutes.iluminariasRoute.route,
    },
  ];

  return (
    <div
      className={`
        flex p-6 top-20 absolute left-0 w-full items-center justify-center gap-6 text-center 
        bg-white/90 backdrop-blur-md shadow-lg animate__animated animate__fadeIn animate__faster
      `}
    >
      {servicesList.map((service, key) => (
        <a
          key={key}
          href={service.url}
          className={`
            py-4 px-6 bg-gray-100 rounded-lg shadow-md text-gray-800 font-medium 
            hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out
          `}
        >
          {service.label}
        </a>
      ))}
    </div>
  );
}


function MobileMenu({ headerButtons, isMouseInServiceButton, setIsMouseInServiceButton }: any) {
  const servicesList = [
    {
      label: AppRoutes.sistemaFotovoltaicoComercialEIndustrialRoute.title,
      url: AppRoutes.sistemaFotovoltaicoComercialEIndustrialRoute.route,
      icon: "fas fa-solar-panel", // Ejemplo con Font Awesome
    },
    {
      label: AppRoutes.sistemaFotovoltaicoResidencialEHibrido.title,
      url: AppRoutes.sistemaFotovoltaicoResidencialEHibrido.route,
      icon: "fas fa-home",
    },
    {
      label: AppRoutes.montaCargas.title,
      url: AppRoutes.montaCargas.route,
      icon: "fas fa-truck-loading",
    },
    {
      label: AppRoutes.sistemaBess.title,
      url: AppRoutes.sistemaBess.route,
      icon: "fas fa-battery-full",
    },
    {
      label: AppRoutes.electromovilidadRoute.title,
      url: AppRoutes.electromovilidadRoute.route,
      icon: "fas fa-car",
    },
    {
      label: AppRoutes.monitoreoRoute.title,
      url: AppRoutes.monitoreoRoute.route,
      icon: "fas fa-chart-line",
    },
    {
      label: AppRoutes.iluminariasRoute.title,
      url: AppRoutes.iluminariasRoute.route,
      icon: "fas fa-lightbulb",
    },
  ];

  return (
    <div className="absolute top-20 left-0 w-full bg-white flex flex-col items-center p-4 z-50 shadow-lg">
      {headerButtons.map((button: any, key: number) =>
        button.url ? (
          <a
            key={key}
            href={button.url}
            className="py-3 px-4 text-gray-800 hover:bg-gray-100 w-full text-center rounded-lg transition duration-300 ease-in-out"
          >
            {button.label}
          </a>
        ) : (
          <div key={key} className="relative w-full text-center">
            {/* Botón de "Servicios" */}
            <button
              onClick={() => setIsMouseInServiceButton(!isMouseInServiceButton)}
              className="py-3 px-4 text-gray-800 hover:bg-gray-1000 w-full text-center rounded-lg font-medium transition duration-300 ease-in-out"
            >
              {button.label}
            </button>

            {/* Submenú de servicios */}
            {isMouseInServiceButton && (
              <div className="grid grid-cols-1 items-center justify-center gap-4 bg-gray-50 mt-2 p-4 rounded-md shadow-md w-full border border-gray-200">
                {servicesList.map((service, index) => (
                  <a
                    key={index}
                    href={service.url}
                    className="flex items-center items-center justify-center py-2 px-3 bg-white rounded-lg shadow hover:bg-gray-100 transition duration-300 ease-in-out"
                  >
                    <i className={`${service.icon} text-blue-500 text-lg mr-3`} />
                    <span className="text-gray-700 font-medium">{service.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
}



