type Props = {
	sectionRows: SectionRow[];
  }
  
  export type SectionRow = {
	image: string;
	title: string;
	subtitle: string;
	description: string;
  }
  
  export default function BlackWhiteContainerWithImage(props: Props) {
	return (
		<section className="bg-gray-50 text-center flex flex-col gap-8 p-8 md:p-16 lg:px-40 xl:px-60 rounded-lg shadow-lg">
		{(props.sectionRows || []).map((row, key) => {
		  const imageStyle = {
			backgroundImage: `url(${row.image})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			borderRadius: '8px',
			transition: 'transform 0.3s ease',
		  }
  
		  const imageClasses = (index: number) => {
			return `h-[55vh] w-full md:basis-[70%] md:w-auto ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} rounded-lg shadow-lg hover:scale-105`
		  }
		  const textContainerClasses = (index: number) => {
			return `p-8 md:basis-[30%] ${index % 2 === 0 ? 'bg-neutral-800 text-white' : 'bg-gray-200 text-black'} flex flex-col justify-center rounded-lg shadow-md`
		  }
  
		  return (
			<div className="flex flex-col md:flex-row gap-8 mb-12 transition-all duration-300 hover:shadow-lg hover:translate-y-1 " key={key}>
			  {/* Text container */}
			  <div className={textContainerClasses(key)}>
				<h4 className="text-sm font-semibold tracking-wide text-gray-300 uppercase">{row.subtitle}</h4>
				<h3 className="text-3xl font-bold mb-4">{row.title}</h3>
				<p className="text-lg leading-relaxed">{row.description}</p>
			  </div>
  
			  {/* Image container */}
			  <div style={imageStyle} className={imageClasses(key)} />
			</div>
		  )
		})}
	  </section>
	)
  }
  