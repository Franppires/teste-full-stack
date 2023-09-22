'use client ';
import Link from 'next/link';

export default function Login() {
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
      <form
        action=''
        className='bg-dark-brown bg-opacity-50 p-16 rounded-lg flex flex-col justify-center py-auto'
      >
        <h2 className='text-3xl pb-8 flex justify-center font-bold'>Hello, welcome back!</h2>
        <label htmlFor='email'>E-mail</label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Type your e-mail'
          className='mb-8 mt-2 bg-gray rounded text-dark-brown p-2 px-4'
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Type your password'
          className='mb-8 mt-2 bg-gray rounded text-dark-brown p-2 px-4'
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <input
              id='remember_me'
              name='remember_me'
              type='checkbox'
              className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
            />
            <label htmlFor='remember_me' className='ml-2 block text-sm text-gray-900'>
              Remember me
            </label>
          </div>

          <div className='text-sm'>
            <Link href='#' className='hover:text-yellow hover:underline'>
              Forgot your password?
            </Link>
          </div>
        </div>

        <button
          type='button' // Altere para 'submit' se você estiver enviando o formulário para autenticação
          className='bg-dark-green hover:bg-green mt-6 mb-6 p-2 rounded text-gray'
          // onClick={handleLogin}
        >
          Access
        </button>
        <Link href='/create' className='text-center text-sm hover:underline hover:text-yellow'>
          Create account
        </Link>
        {/* criar a pagina de cadastro  */}
      </form>
    </main>
  );
}
