import { Provider } from 'react-redux';
import { CookiesProvider } from "react-cookie";
import { GoogleOAuthProvider } from '@react-oauth/google';
//import { useStore } from '../redux/store';
import configureStore from '@/configureStore';
import { AccessTokenProvider } from '../AccessTokenProvider';
import { ConstantsValues } from '@/containers/MainPage/api/homeServices';
import Context from '@/context';
import Layout from '@/Layout';
import { useRouter } from 'next/router';
import Constants from '@/containers/App/constants';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {
    if (Cookies.get('sublocalityvalue') && Cookies.get('sublocalityvalue')=="" && Cookies.get('pincodevalue') && Cookies.get('pincodevalue')=="") {
      Cookies.set('sublocalityvalue', ConstantsValues.defaultLocation);
      Cookies.set('pincodevalue', ConstantsValues.pincode);
    } else if (!Cookies.get('sublocalityvalue') && !Cookies.get('pincodevalue')) {
      Cookies.set('sublocalityvalue', ConstantsValues.defaultLocation);
      Cookies.set('pincodevalue', ConstantsValues.pincode);
    }
    
    const store = configureStore({});
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('generatedtoken')
      if(localStorage.getItem('CustGUID') && !Cookies.get('CustGUID')) {
        Cookies.set('CustGUID', window.atob(localStorage.getItem('CustGUID')))
      }
    }
    //Cookies.remove('accessTokenAuthentication');

    

    // if (typeof window !== 'undefined' && window.localStorage) {
    //   (function (){        
    //     fetch(`${Constants.urls.baseUrl}${Constants.endPoints.token}`, {
    //       method: 'POST',
    //       headers: {
    //         accept: 'application/x-www-form-urlencoded',
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //       },
    //       body:
    //         'username=FCAPICL0100145&password=JHASGjnknkjhIhAjksnjansasasMKLAHNSJHGASB02012121&grant_type=password',
    //     })
    //     .then(res => res.json())
    //     .then(
    //       result => {
    //         if (result) {
    //           localStorage.setItem('generatedtoken', result.access_token)
    //         }
    //       },
    //     );
    //   })()
    // }

    const router = useRouter();


   //Old test ID
    //761974021170-sgabqvrl0lli4rjtalfgiqg8trt87aq6.apps.googleusercontent.com

    //Live ID
    //1028275409428-6g381q56uu3k19pgqib0jvpsghm6s649.apps.googleusercontent.com

  return (
    <GoogleOAuthProvider clientId="1028275409428-6g381q56uu3k19pgqib0jvpsghm6s649.apps.googleusercontent.com">
      
    <Provider store={store}>
      <Layout>
      <CookiesProvider>
      <AccessTokenProvider>
      <Context>
      <Component {...pageProps} key={router.asPath} />
      </Context>
      </AccessTokenProvider>
      </CookiesProvider>
      </Layout>
    </Provider>
    </GoogleOAuthProvider>
  );
}

export default MyApp;