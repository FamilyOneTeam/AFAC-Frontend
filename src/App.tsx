import { Link } from 'react-router-dom';
import AuthLayout from './common/layouts/auth-layout';
import { Button } from './components/ui';

function App() {
  return (
    <>
      <AuthLayout
        image={
          <img
            className="h-[95%] rounded w-full object-cover"
            src="/auth/welcome-screen.svg"
            alt="bienvenido/a"
          />
        }
        content={
          <>
            <h1 className="font-bold text-4xl">
              Bienvenido al Sistema de <br /> Gestión de Datos de <br /> AFAC
            </h1>
            <Button
              variant={"primary"}
              className="mt-8 text-lg w-full md:w-3/4"
            >
              <Link to={'/auth/ingresar'} className='w-full'>Continuar</Link>
            </Button>
          </>
        }
      ></AuthLayout>
    </>
  );
}

export default App
