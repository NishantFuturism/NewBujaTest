import LogoLoader from '@/components/LoadingIndicator/LogoLoader';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const NavigationLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = (url) => {
      setIsLoading(true)
    };
  
    const handleRouteChangeComplete = (url) => {
      setIsLoading(false)
    };
  
    const handleRouteChangeError = (err, url) => {
      setIsLoading(false)
    };
  
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);
  
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router]);

  return (
    <>
      {isLoading ? <LogoLoader isGlobal/> : ''}
    </>
  )
}
export default NavigationLoader;