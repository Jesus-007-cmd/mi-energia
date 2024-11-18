// Modules
import { useState } from 'react'

// Classes
import ButtonClass from '../../../classes/ButtonClass';

// Sections
import HouseSection from './HouseSection';
import CompanySection from './CompanySection';

export default function SelectHouseOrCompanySection () {

  // Vars
  const [ isShowingHouseSection, setIsShowingHouseSection ] = useState(true);

  // Toggle
  const toggleSection = (isShowing:boolean) => { setIsShowingHouseSection(isShowing) }

  const houseMainImage = {
    backgroundImage:'url(/images/screens/financiamiento/img4.jpg)',
    backgroundSize:'cover',
    backgroundPosition:'center',
    height:'100vh'
  }
  
  const companyMainImage = {
    backgroundImage:'url(/images/screens/financiamiento/img5.jpg)',
    backgroundSize:'cover',
    backgroundPosition:'center',
    height:'100vh'
  }

  const currentBackground = (isShowingHouseSection) 
    ? houseMainImage 
    : companyMainImage;

  const beneficiosList4 = [
    'No se requiere un capital inicial por parte de la empresa',
    'Facturación de cada mes por concepto de renta',
    'Al término puede existir un valor de venta residual o renovación del contrato',
  ];

  return (

    
<section className=" text-center bg-gray-50 text-center flex flex-col gap-8 p-8 md:p-16 lg:px-40 xl:px-60 rounded-lg shadow-lg">
      <div className='h-screen p-6 flex items-end justify-center' style={currentBackground}>

        <div className="flex gap-4">

          <button 
            className={isShowingHouseSection ? ButtonClass.WhiteButtonClass : ButtonClass.BlackButtonClass} 
            onClick={() => toggleSection(true)}
          >Para Casas</button>
        
          <button 
            className={isShowingHouseSection ? ButtonClass.BlackButtonClass : ButtonClass.WhiteButtonClass}
            onClick={() => toggleSection(false)}
          >Para Empresas</button>

        </div>

      </div>

      {isShowingHouseSection ? <HouseSection/> : <CompanySection/>}

      {!isShowingHouseSection && <div className="p-6 gap-6 bg-gray-700 text-white grid grid-cols-1 md:grid-cols-2 ">

        <div className='p-6 flex flex-col rounded border'>

          <h3 className="text-2xl font-semibold">Arrendamiento</h3>

          <p>
            Este instrumento te permite como arrendador contar con los beneficios de un sistema 
            solar sin inversión inicial y gozando de las deducciones fiscales que ofrece el esquema. 
            El arrendador mantiene la propiedad del sistema fotovoltaico hasta el término del plazo.
          </p>

          <ul className="list-disc pl-6">
            {beneficiosList4.map((beneficio) => <li>{beneficio}</li>)}
          </ul>

        </div>

        <div className="flex flex-col p-6 rounded border">

          <h3 className="text-2xl font-semibold">PPA (Power Purchase Agreement)</h3>

          <p>
            Si aún no estás preparado para invertir en energía solar, 
            podemos instalar un sistema fotovoltaico en tus instalaciones a coste 0.
          </p>

          <p>
            Nosotros nos encargamos de la operación y mantenimiento, permitiendo que tu 
            empresa se beneficie de energía limpia y logre un mayor nivel de sostenibilidad.
            En este esquema se paga una renta mensual relacionado con la energía solar 
            generada pero a un precio más bajo que la energía que ofrece el suministrador local.
          </p>

        </div>

      </div>}

    </section>

  )

}