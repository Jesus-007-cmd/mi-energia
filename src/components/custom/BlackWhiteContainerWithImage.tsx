type Props = {
	sectionRows: SectionRow[];
  }
  
  export type SectionRow = {
	image: string;
	title: string;
	subtitle: string;
	description: string;
  }
  
  export default function BlackWhiteContainerWithImage (props: Props) {
	return (
	  <section className='py-12 px-4 md:px-12 max-w-screen-lg mx-auto'>
		{(props.sectionRows || []).map((row, key) => {
		  const imageStyle = {
			backgroundImage: `url(${row.image})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			borderRadius: '8px',
		  }
  
		  const imageClasses = (index: number) => {
			return `h-[45vh] w-full ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`
		  }
  
		  const textContainerClasses = (index: number) => {
			return `p-6 ${index % 2 === 0 ? 'bg-neutral-800 text-white' : 'bg-white text-black'} flex flex-col justify-center`
		  }
  
		  return (
			<div className="flex flex-col md:flex-row gap-8 mb-12" key={key}>
			  {/* Text container */}
			  <div className={textContainerClasses(key)}>
				<h4 className="text-sm font-semibold">{row.subtitle}</h4>
				<h3 className="text-2xl font-semibold mb-4">{row.title}</h3>
				<p className="text-base">{row.description}</p>
			  </div>
  
			  {/* Image container */}
			  <div style={imageStyle} className={imageClasses(key)} />
			</div>
		  )
		})}
	  </section>
	)
  }
  