'use client'
import dynamic from 'next/dynamic'
import '../../../../public/assets1/css/bundle.css';
import '../../../../public/assets/css/style.min.css';
import '../../../../public/assets1/css/default.min.css';
import '../../../../public/assets1/css/responsive.min.css';
import '../../../../public/assets1/css/font-awesome.min.css';
import '../../../components/Header/Header.css';
import loadable from '@/utils/loadable';
import LogoLoader from '@/components/LoadingIndicator/LogoLoader';
import { Component } from 'react';

// const LazyComponent = dynamic(() => import('./myReorder'), {
//     loading: () => <LogoLoader/> , ssr : true // Fallback shown while loading
//   });
// export default loadable(LazyComponent);


const LoadableMyComponent = loadable(() => import('./myReorder'));







const DynamicLoadableMyComponent = dynamic(() => Promise.resolve(LoadableMyComponent), {
  loading: () => <LogoLoader/> , ssr : true
});

export default DynamicLoadableMyComponent;