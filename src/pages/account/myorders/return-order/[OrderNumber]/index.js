'use client'
import dynamic from 'next/dynamic'
import '../../../../../../public/assets1/css/bundle.css';
import '../../../../../../public/assets/css/style.min.css';
import '../../../../../../public/assets1/css/default.min.css';
import '../../../../../../public/assets1/css/responsive.min.css';
import '../../../../../../public/assets1/css/font-awesome.min.css';
import loadable from '@/utils/loadable';
import LogoLoader from '@/components/LoadingIndicator/LogoLoader';

// const LazyComponent = dynamic(() => import('./returnMyOrder'), {
//     loading: () => <LogoLoader/> , ssr : false // Fallback shown while loading
//   });
// export default loadable(LazyComponent);


const LoadableMyComponent = loadable(() => import('./returnMyOrder'));







const DynamicLoadableMyComponent = dynamic(() => Promise.resolve(LoadableMyComponent), {
  loading: () => <LogoLoader/> , ssr : false
});

export default DynamicLoadableMyComponent;