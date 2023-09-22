export default function Home() {
  return (
    <main
      className='flex min-h-screen flex-col items-center justify-between p-24'
      style={{
        backgroundImage: 'url("/beer.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <section className='bg-dark-brown bg-opacity-50 p-24 rounded-lg flex flex-col justify-center items-center gap-14 py-auto'>
        <h2 className='text-4xl font-semibold'>Are you a craft beer enthusiast?</h2>
        <p className='text-xl font-semibold'>
          Looking for an easy way to manage your collection of beer-related products?
        </p>
        <p className='text-xl font-semibold'>
          Want to explore a wide variety of beers from around the world?
        </p>
        <p className='text-xl font-semibold'>If so, you're in the right place!</p>
      </section>
    </main>
  );
}
