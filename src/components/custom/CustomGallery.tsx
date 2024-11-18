// Modules
import { useEffect, useRef } from 'react';

type Props = {
  photos: string[];
}

export default function CustomGallery(props: Props) {

  // Props
  const { photos } = props;

  const scrollAmount = 1000;
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Función para desplazarse a la izquierda
  function scrollLeft() {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      assignInterval();
    }
  }

  // Función para desplazarse a la derecha
  function scrollRight() {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      assignInterval();
    }
  }

  // Asignar intervalo para desplazamiento automático
  function assignInterval() {
    if (intervalRef.current) clearInterval(intervalRef.current); // Limpiar intervalo previo
    intervalRef.current = setInterval(validateCanScroll, 5000); // Iniciar intervalo para mover cada 5 segundos
  }

  // Función para validar si el carrusel debe reiniciar o continuar
  function validateCanScroll() {
    if (carouselRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = carouselRef.current;
      if (clientWidth + scrollLeft === scrollWidth) {
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' }); // Regresar al inicio
      } else {
        scrollRight(); // Desplazar a la derecha
      }
    }
  }

  // Hook de efecto para activar el intervalo al cargar el componente
  useEffect(() => {
    assignInterval();
    return () => clearInterval(intervalRef.current!); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  return (
    
      <div className="bg-gray-200 overflow-auto  gap-8 p-8 md:p-16 lg:px-40 xl:px-60 rounded-lg shadow-lg">
      {/* Título para la galería */}
      <h2 className="text-3xl font-semibold text-center ">Galería de Proyectos</h2>

      {/* Contenedor de imágenes */}
      <div className="flex gap-6 overflow-x-auto" ref={carouselRef}>
        {photos.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="gallery"
            className="h-[50vh] object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
}
