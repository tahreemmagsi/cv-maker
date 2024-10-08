import { useUser } from '@clerk/clerk-react';
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Header from './components/ui/custom/header';
import Footer from './components/ui/custom/footer';
import { Toaster } from './components/ui/sonner';

function App() {
  const { isLoaded, isSignedIn, user } = useUser();

  // if (!isLoaded) {
  //   return <div>Loading...</div>;
  // }

  if (!isSignedIn&&isLoaded) {
    return <Navigate to={'/auth/sign-in'} />;
  }

  return (
    <>
    <Header/>
      <Outlet />
      <Footer/>
      <Toaster />

    </>
  );
}

export default App;
