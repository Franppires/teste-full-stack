import Image from "next/image";

export default async function List() {
  const response = await fetch('https://api.punkapi.com/v2/beers');
  const product = await response.json();

  return (
    <main
      className='flex flex-col justify-center items-center'
      style={{
        backgroundImage: 'url("/glass.jpg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
      }}
    >
      {/* <h2 className='text-6xl font-bold pt-24 text-yellow'>Beer List</h2> */}
      <input
        type='text'
        className='w-1/2 p-4 rounded-full text-dark-brown bg-gray mt-36 mb-28 text-center'
        placeholder='get your beer'
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 '>
        {product.map((beer: any) => (
          <div
            key={beer.id}
            className='w-300 p-4 flex flex-col gap-rounded cursor-pointer bg-dark-brown rounded-md'
          >
            <Image src={beer.image_url} alt={beer.name} width={66} height={96} className='	' />
            <h2 className='text-xl font-semibold'>{beer.name}</h2>
            <p className='text-gray-700'>{beer.tagline}</p>
            <p className='text-gray-300 mb-4'>
              {beer.description.length > 100
                ? `${beer.description.slice(0, 100)}...`
                : beer.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
