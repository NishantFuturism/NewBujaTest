import '../../public/assets1/css/bundle.css';
import '../../public/assets/css/style.min.css';
import '../../public/assets1/css/default.min.css';
import '../../public/assets1/css/responsive.min.css';
import '../../public/assets1/css/font-awesome.min.css';
import '../components/Header/Header.css';
import dynamic from 'next/dynamic'
import loadable from '@/utils/loadable';
import LogoLoader from '@/components/LoadingIndicator/LogoLoader';

// const LazyComponent = dynamic(() => import('../components/Footer/Subfooter'), {
//     loading: () => <LogoLoader/> , ssr : true // Fallback shown while loading
//   });
// export default loadable(LazyComponent);

const LoadableMyComponent = loadable(() => import('../components/Footer/Subfooter'));







const DynamicLoadableMyComponent = dynamic(() => Promise.resolve(LoadableMyComponent), {
  loading: () => <LogoLoader/> , 
  ssr: true,
});

export default DynamicLoadableMyComponent;

