// Modules
import { useState } from 'react';

// Components
import CustomButton from '../forms/CustomButton';

// Classes
import AppRoutes from '../../routes';
import ButtonClass from '../../classes/ButtonClass';

type Props = {
  hasBackground:boolean;
}

export default function Topbar (props:Props) {

  // States
  const [ isMouseInTopBar, setIsMouseInTopBar ] = useState(false);
  const [ isMouseInServiceButton, setIsMouseInServiceButton ] = useState(false);

  const headerButtons = [
    { label:AppRoutes.serviciosRoute.title },
    { label:AppRoutes.sobreNosotrosRoute.title, url:AppRoutes.sobreNosotrosRoute.route },
    { label:AppRoutes.financiamientoRoute.title, url:AppRoutes.financiamientoRoute.route },
    { label:AppRoutes.contactanosRoute.title, url:AppRoutes.contactanosRoute.route }
  ];

  // Styles
  const navStyle = `
    px-4 md:px-8 h-20 flex justify-center items-center gap-4 absolute z-10 w-full 
    ${props.hasBackground ? 'bg-white' : ''} transition duration-500 ease-in-out group-hover/main-container:bg-white
  `;

  // Toggle
  function toggleIsMouseInTopBar () {
    if (isMouseInServiceButton) setIsMouseInServiceButton(false);
    setIsMouseInTopBar(!isMouseInTopBar);
  }

  function toggleIsMouseInServiceButton () {
    setIsMouseInServiceButton(!isMouseInServiceButton);
  }

  function toggleIsMouseInAnyOtherButton () {
    setIsMouseInServiceButton(false);
  }

  return (
    <div 
      className='flex text-center group/main-container' 
      onMouseEnter={toggleIsMouseInTopBar} 
      onMouseLeave={toggleIsMouseInTopBar}
    >

      <nav className={navStyle}>

        <a href="/" className="mr-auto">

          <img
            src='/images/mi-energia-logo/logo1.png'
            className={`h-10 ${props.hasBackground ? 'block' : 'hidden group-hover/main-container:block'}`}
          />

          <img 
            src='/images/mi-energia-logo/logo2.png' 
            className={`h-10 group-hover/main-container:hidden ${props.hasBackground ? 'hidden' : 'block'}`}
          />

        </a>

        <div className="flex gap-4 items-center justify-center">

          <div className="hidden md:flex gap-4">

            { 
              headerButtons.map((button, key) => (button.url == undefined)
              
                ? 
                
                <div className='group/service-container' key={key}>

                  <CustomButton
                    buttonClass={ButtonClass.TransparentButtonsClass(`hover:bg-gray-100 ${props.hasBackground ? '' : 'text-white group-hover/main-container:text-gray-800'}`)} 
                    onEnter={toggleIsMouseInServiceButton}
                  >{button.label}</CustomButton>

                  {isMouseInServiceButton && <ServicesOptions/>}

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

      </nav>

    </div>
  )
}

function ServicesOptions () {

  const servicesList = [
    { 
      label:AppRoutes.sistemaFotovoltaicoComercialEIndustrial.title,
      url:AppRoutes.sistemaFotovoltaicoComercialEIndustrial.route 
    },
    { 
      label:AppRoutes.sistemaFotovoltaicoResidencialEHibrido.title,
      url:AppRoutes.sistemaFotovoltaicoResidencialEHibrido.route 
    },
    {
      label:AppRoutes.montaCargas.title,
      url:AppRoutes.montaCargas.route 
    },
    { 
      label:AppRoutes.sistemaBess.title, 
      url:AppRoutes.sistemaBess.route 
    },
    { 
      label:AppRoutes.electromovilidadRoute.title, 
      url:AppRoutes.electromovilidadRoute.route 
    },
    { 
      label:AppRoutes.monitoreoRoute.title,
      url:AppRoutes.monitoreoRoute.route 
    },
    { 
      label:AppRoutes.iluminariasRoute.title,
      url:AppRoutes.iluminariasRoute.route 
    },
  ];

  return (
    <div 
      className={`
        flex flex-col p-6 top-20 absolute left-0 w-full items-center justify-center gap-6 text-center bg-white
        animate__animated animate__fadeIn animate__faster
      `}
    >
      <div className='flex flex-wrap gap-4 justify-center'>
        {servicesList.map((service, key) => (
          <a key={key} href={service.url}>
            <CustomButton buttonClass={ButtonClass.TransparentButtonsClass('hover:bg-gray-100')}>
              <span className='font-medium text-gray-800'>{service.label}</span>
            </CustomButton>       
          </a>
        ))}
      </div>
    </div>
  )
}
