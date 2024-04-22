import LogoLoader from '@/components/LoadingIndicator/LogoLoader'
import dynamic from 'next/dynamic'
import '../../../../../../public/assets1/css/bundle.css';
import '../../../../../../public/assets/css/style.min.css';
import '../../../../../../public/assets1/css/default.min.css';
import '../../../../../../public/assets/css/responsive.min.css';
import '../../../../../../public/assets1/css/font-awesome.min.css';
const NoSSR = dynamic(() => import('./paymentsuccessful'), { ssr: true,loading: () => <LogoLoader/> })
 
export default function PaymentSuccessPage() {
  return (
    <div>
      <NoSSR />
    </div>
  )
}