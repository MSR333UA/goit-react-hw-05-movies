import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <Oval height="100" width="100" color="grey" ariaLabel="loading" />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
