import { useLocation } from 'react-router';
import { AuthLayoutContext } from './interfaces';
import { useEffect, useState } from 'react';

export default function AuthLayout({ image, content }: AuthLayoutContext) {
  const currentURL = useLocation();
  const [isNotMainPage, setIsNotMainPage] = useState(false);
  useEffect(() => {
    if (currentURL.pathname !== '/') setIsNotMainPage(true);
  }, [currentURL]);
  return (
    <main className='grid md:grid-cols-2 p-2 md:p-4 min-h-screen'>
      <section className='grid px-6 h-screen md:h-auto'>
        <div className='self-center grid gap-10 mt-6'>
          <img
            src='/common/afac-logo.svg'
            alt='asociacion de familias de acogida de chile'
            className={`mx-auto md:mx-0`}
          />
          {content}
        </div>
        <div
          className={`${
            isNotMainPage ? 'hidden' : ''
          } self-end mx-auto md:mx-0 pb-12`}
        >
          <img src='/auth/family-one-auth-logo.svg' alt='family one' />
        </div>
      </section>
      <section className='hidden md:block max-h-screen'>
        <div className='h-full w-full relative'>
          <div className='absolute -left-6 top-6 w-full h-[95%] rounded border-2 border-[#E0662D]'></div>
          {image}
        </div>
      </section>
    </main>
  );
}
