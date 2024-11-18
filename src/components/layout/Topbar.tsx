// Modules
import { useState } from 'react';

// Components
import CustomButton from '../forms/CustomButton';

// Classes
import AppRoutes from '../../routes';
import ButtonClass from '../../classes/ButtonClass';

type Props = {
  hasBackground: boolean;
};

export default function Topbar(props: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const headerButtons = [
    { label: AppRoutes.serviciosRoute.title },
    { label: AppRoutes.sobreNosotrosRoute.title, url: AppRoutes.sobreNosotrosRoute.route },
    { label: AppRoutes.financiamientoRoute.title, url: AppRoutes.financiamientoRoute.route },
    { label: AppRoutes.contactanosRoute.title, url: AppRoutes.contactanosRoute.route },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServiceOptions = () => {
    setIsServiceOpen(!isServiceOpen);
  };

  const navStyle = `
    px-4 md:px-8 h-20 flex justify-between items-center gap-4 absolute z-10 w-full 
    ${props.hasBackground ? 'bg-white' : ''} transition duration-500 ease-in-out
  `;

  return (
    <div className="flex text-center">
      <nav className={navStyle}>
        <a href="/">
          <img
            src="/images/mi-energia-logo/logo1.png"
            className={`h-10 ${props.hasBackground ? 'block' : 'hidden md:block'}`}
          />
          <img
            src="/images/mi-energia-logo/logo2.png"
            className={`h-10 ${props.hasBackground ? 'hidden' : 'block md:hidden'}`}
          />
        </a>

        {/* Botón hamburguesa para dispositivos móviles */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            ☰ {/* Icono de menú hamburguesa */}
          </button>
        </div>

        {/* Menú en pantallas grandes */}
        <div className={`hidden md:flex gap-4`}>
          {headerButtons.map((button, key) => (
            button.url == undefined ? (
              <div key={key} className="relative">
                <CustomButton
                  buttonClass={ButtonClass.TransparentButtonsClass(`hover:bg-gray-100 ${props.hasBackground ? '' : 'text-white'}`)}
                  onClick={toggleServiceOptions}
                >
                  {button.label}
                </CustomButton>
                {isServiceOpen && <ServicesOptions />}
              </div>
            ) : (
              <a href={button.url} key={key}>
                <CustomButton
                  buttonClass={ButtonClass.TransparentButtonsClass(`hover:bg-gray-100 ${props.hasBackground ? '' : 'text-white'}`)}
                >
                  {button.label}
                </CustomButton>
              </a>
            )
          ))}
        </div>

        {/* Menú desplegable para móviles */}
        {isMenuOpen && (
          <div className="flex flex-col md:hidden bg-white w-full p-4 absolute top-20 left-0 z-20">
            {headerButtons.map((button, key) => (
              button.url == undefined ? (
                <div key={key} className="relative">
                  <CustomButton
                    buttonClass={ButtonClass.TransparentButtonsClass(`hover:bg-gray-100 text-gray-800`)}
                    onClick={toggleServiceOptions}
                  >
                    {button.label}
                  </CustomButton>
                  {isServiceOpen && <ServicesOptions />}
                </div>
              ) : (
                <a href={button.url} key={key}>
                  <CustomButton
                    buttonClass={ButtonClass.TransparentButtonsClass(`hover:bg-gray-100 text-gray-800`)}
                  >
                    {button.label}
                  </CustomButton>
                </a>
              )
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}

function ServicesOptions() {
  const servicesList = [
    { label: AppRoutes.sistemaFotovoltaicoComercialEIndustrial.title, url: AppRoutes.sistemaFotovoltaicoComercialEIndustrial.route },
    { label: AppRoutes.sistemaFotovoltaicoResidencialEHibrido.title, url: AppRoutes.sistemaFotovoltaicoResidencialEHibrido.route },
    { label: AppRoutes.montaCargas.title, url: AppRoutes.montaCargas.route },
    { label: AppRoutes.sistemaBess.title, url: AppRoutes.sistemaBess.route },
    { label: AppRoutes.electromovilidadRoute.title, url: AppRoutes.electromovilidadRoute.route },
    { label: AppRoutes.monitoreoRoute.title, url: AppRoutes.monitoreoRoute.route },
    { label: AppRoutes.iluminariasRoute.title, url: AppRoutes.iluminariasRoute.route },
  ];

  return (
    <div className="flex flex-col p-4 bg-gray-100 rounded-lg mt-2">
      {servicesList.map((service, key) => (
        <a key={key} href={service.url} className="mb-2">
          <CustomButton buttonClass={ButtonClass.TransparentButtonsClass('hover:bg-gray-200')}>
            <span className="font-medium text-gray-800">{service.label}</span>
          </CustomButton>
        </a>
      ))}
    </div>
  );
}
