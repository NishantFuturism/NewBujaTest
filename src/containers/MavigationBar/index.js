import dynamic from 'next/dynamic';
import loadable from '@/utils/loadable';

const LoadableMyComponent = loadable(() => import('./mavigationBar'), {
  fallback: <div className="shimmer-container">
  <div className="shimmer"></div>
</div>,
});

const DynamicLoadableMyComponent = dynamic(() => Promise.resolve(LoadableMyComponent), {
  ssr: true,
  });

export default DynamicLoadableMyComponent;
