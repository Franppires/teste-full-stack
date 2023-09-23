'use client';
import { SubmitHandler, SubmitErrorHandler, useForm } from 'react-hook-form';

export type dateAccount = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirm: string;
};

export default function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<dateAccount>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<dateAccount> = async (data: dateAccount) => {
    try {
      var bodyData = new FormData();

      bodyData.append('name', data.name);
      bodyData.append('email', data.email);
      bodyData.append('phone', data.phone);
      bodyData.append('password', data.password);
      bodyData.append('confirm', data.confirm);

      // Configuração da solicitação POST
      const requestOptions = {
        method: 'POST',
        body: bodyData,
        // body: JSON.stringify(data)// Certifique-se de converter os dados em JSON
      };

      // Faça a solicitação POST para o servidor XAMPP
      const response = await fetch('http://localhost/beercraft/account/index.php', requestOptions);

      if (response.ok) {
        // Se a resposta for bem-sucedida, você pode lidar com a resposta aqui
        const responseData = await response.json(); // Use .json() para obter os dados da resposta
        console.log(responseData);
      } else {
        // Se a resposta não for bem-sucedida, lide com o erro aqui
        console.error('Erro na solicitação POST:', response.status, response.statusText);
      }
    } catch (error) {
      // Lide com erros de solicitação, se necessário
      console.error('Erro ao fazer a solicitação POST:', error);
    }
  };

  const onError: SubmitErrorHandler<dateAccount> = errors => console.log(errors);

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
        onSubmit={handleSubmit(onSubmit, onError)}
        className='bg-dark-brown w-1/2 bg-opacity-50 p-16 rounded-lg flex flex-col gap-6 justify-center'
      >
        <h2 className='text-3xl pb-8 flex justify-center font-bold'>Create Account</h2>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name'>Name</label>
          <input
            {...register('name', { required: 'The name is required' })}
            type='text'
            name='name'
            id='name'
            placeholder='Type your e-mail'
            className=' bg-gray rounded text-dark-brown p-2 px-4'
            onClick={() => clearErrors('name')}
          />
          {errors.name && <span className='text-red-400  '>{errors.name.message}</span>}
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='email'>Email</label>
          <input
            {...register('email', { required: 'The email is mandatory' })}
            type='email'
            name='email'
            id='email'
            placeholder='Type your email'
            className=' bg-gray rounded text-dark-brown p-2 px-4'
            onClick={() => clearErrors('email')}
          />
          {errors.email && <span className='text-red-400  '>{errors.email.message}</span>}
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='phone'>Phone</label>
          <input
            {...register('phone', { required: 'The phone is mandatory' })}
            type='tel'
            name='phone'
            id='phone'
            placeholder='Type your phone'
            className=' bg-gray rounded text-dark-brown p-2 px-4'
            onClick={() => clearErrors('phone')}
          />
          {errors.phone && <span className='text-red-400  '>{errors.phone.message}</span>}
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='password'>Password</label>
          <input
            {...register('password', {
              required: 'The password is mandatory',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
            })}
            type='password'
            name='password'
            id='password'
            placeholder='Type your password'
            className='bg-gray rounded text-dark-brown p-2 px-4'
            onClick={() => clearErrors('password')}
          />

          {errors.password && <span className='text-red-400  '>{errors.password.message}</span>}
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='password'>Confirm Password</label>
          <input
            {...register('confirm', { required: 'The confirm password is mandatory' })}
            type='password'
            name='confirm'
            id='confirm'
            placeholder='Type your confirm-confirm'
            className=' bg-gray rounded text-dark-brown p-2 px-4'
            onClick={() => clearErrors('confirm')}
          />
          {errors.password && <span className='text-red-400  '>{errors.password.message}</span>}
        </div>

        <button
          type='submit' // Altere para 'submit' se você estiver enviando o formulário para autenticação
          className='bg-dark-green hover:bg-green mt-6 mb-6 p-2 rounded text-gray'
          // onClick={handleLogin}
        >
          Create Account
        </button>
      </form>
    </main>
  );
}
