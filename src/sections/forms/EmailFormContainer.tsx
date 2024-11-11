// Modules
import { useState } from 'react';

// Classes
import ButtonClass from '../../classes/ButtonClass';
import InputClass from '../../classes/InputClass';

// Components
import CustomButton from '../../components/forms/CustomButton';

// Data
import { networkList } from '../../data/data';

export default function EmailFormContainer() {
  return (
    <div className="flex flex-col w-full"> {/* Contenedor general ocupa toda la pantalla */}
      <div className="p-24 pb-6 bg-gray-700 flex flex-col items-center justify-center text-white gap-4">

        <div className="flex flex-col gap-2 text-center md:w-1/2">
          <h4 className="text-2xl font-semibold">Contáctanos</h4>
          <p className="text-lg">
            En Mi Energía MX, estamos comprometidos a proporcionarte la
            mejor experiencia y a resolver todas tus inquietudes sobre 
            energía sostenible.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {networkList.map((row, key) => (
            <a href={row.url} key={key}>
              <CustomButton buttonClass={ButtonClass.TransparentButtonsClass('hover:bg-gray-800')}>
                <img src={row.logo} className="h-6 w-6 invert" />
              </CustomButton>
            </a>
          ))}
        </div>
      </div>


      <div className="flex flex-col items-center max-w-screen-lg mx-auto"> {/* Centrado y ancho máximo */}

        <EmailForm />
      </div>      
    </div>
  );
}

function ServicioOptionsContainer() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  function toggleOption(id: number) {
    setSelectedOption(selectedOption === id ? null : id);
  }

  const options = [
    { id: 1, name: 'Sistema Fotovoltaico Residencial e Híbrido' },
    { id: 2, name: 'Sistema Fotovoltaico Comercial e Industrial' },
    { id: 3, name: 'Sistema BESS' },
    { id: 4, name: 'Electromovilidad' },
    { id: 5, name: 'Monitoreo' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl cursor-pointer"> {/* Ajuste del ancho de los botones */}
      {options.slice(0, 4).map((option) => (
        <button
          key={option.id}
          className={`h-16 bg-gray-100 hover:bg-gray-300 border border-gray-300 flex justify-center items-center ${
            selectedOption === option.id ? 'bg-gray-400' : ''
          }`}
          onClick={() => toggleOption(option.id)}
        >
          <h4 className="text-purple-800 font-medium text-lg">{option.name}</h4>
        </button>
      ))}
      <button
        className={`col-span-2 h-16 bg-gray-100 hover:bg-gray-300 border border-gray-300 flex justify-center items-center ${
          selectedOption === options[4].id ? 'bg-gray-400' : ''
        }`}
        onClick={() => toggleOption(options[4].id)}
      >
        <h4 className="text-purple-800 font-medium text-lg">{options[4].name}</h4>
      </button>
    </div>
  );
}

function EmailForm() {
  return (
    <div className="flex flex-col p-8 gap-6 bg-gray-50 rounded-md shadow-md w-full max-w-screen-lg mx-auto">
      <h4 className="font-semibold text-2xl text-center">Servicio en el que estoy interesado</h4>
      <ServicioOptionsContainer />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium">Nombre</label>
          <input type="text" className={InputClass.whiteInputStyle} />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium">Correo</label>
          <input type="email" className={InputClass.whiteInputStyle} />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium">Asunto</label>
          <input type="text" className={InputClass.whiteInputStyle} />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium">Mensaje</label>
          <textarea className={InputClass.whiteInputStyle} rows={4}></textarea>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <CustomButton buttonClass={ButtonClass.YellowButtonClass}>Enviar</CustomButton>
      </div>
    </div>
  );
}