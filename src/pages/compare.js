/**
 *
 * Asynchronously loads the component for Products
 *
 */
import dynamic from 'next/dynamic'
// import LoadingIndicator from '../components/LoadingIndicator';
import LogoLoader from '@/components/LoadingIndicator/LogoLoader';
import loadable from '@/utils/loadable';
import '../components/Header/Header.css';
import '../../public/assets1/css/bundle.css';
import '../../public/assets/css/style.min.css';
import '../../public/assets1/css/default.min.css';
import '../../public/assets1/css/responsive.min.css';
import '../../public/assets1/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css';

const LazyComponent = dynamic(() => import('../containers/Products/index'), {
    loading: () => <LogoLoader/> // Fallback shown while loading
  });
export default LazyComponent;

// const LoadableMyComponent = loadable(() => import('../containers/Products/index'));







// const DynamicLoadableMyComponent = dynamic(() => Promise.resolve(LoadableMyComponent), {
//   loading: () => <LogoLoader/> , 
// });

// export default DynamicLoadableMyComponent;

