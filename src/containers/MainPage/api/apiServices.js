/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
import Constants from '../../App/constants';
import { ConstantsValues } from './homeServices';
import Cookies from 'js-cookie';

//import history from '../../../utils/history';
// function fetchtoken() {
//   fetch(`${Constants.urls.baseUrl}${Constants.endPoints.token}`, {
//     method: 'POST',
//     headers: {
//       accept: 'application/x-www-form-urlencoded',
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body:
//       'username=FCAPICL0100145&password=JHASGjnknkjhIhAjksnjansasasMKLAHNSJHGASB02012121&grant_type=password',
//   })
//     .then(res => res.json())
//     .then(
//       result => {
//         result && localStorage.setItem('generatedtoken', result.access_token);
//       },
//       function (error) {
//         // this.setState({ buttonload: false });
//         console.log(error);
//       },
//     );
// }


const refreshNewToken = async () => {
        
 const latestToken = await fetch(`${Constants.urls.baseUrl}${Constants.endPoints.token}`, {
    method: 'POST',
    headers: {
      accept: 'application/x-www-form-urlencoded',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:
      'username=FCAPICL0100145&password=JHASGjnknkjhIhAjksnjansasasMKLAHNSJHGASB02012121&grant_type=password',
  })
    .then(res => res.json())
    .then(
      result => {
        //console.log('==================================new token',result.access_token)
        Cookies.set('accessToken', result.access_token);
        if (typeof window !== 'undefined' && window.localStorage){
          localStorage.setItem('generatedtoken',result.access_token)
        }
        return result.access_token
       
      },
      
    );

    if(latestToken){
      return latestToken
    }else{
      return ''
    }
}

export const httpRequest = async (url, method, body,) => {
  let originalBody = body;
  if (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('generatedtoken')) {
    const dataBody = JSON.stringify(body)
  const token = localStorage.getItem('generatedtoken');
  //const token = "HVWcC7M_c0jg0kOEg5U0SDmajp37BfxojHvboS6CgbKzOSDLlviz6v5KyzoJoLkv5WP6AAg0f_e0_b0_udZGygAcMNSvUJGvT-Yfef9dwGwMdbKyH_nyOwRsQA5XXGtPSyajfGKZt2eddoVgbSe9G-lp12UWO8l7896KgSWMY-Sv06ugHvwHq_XpP-qnlGcN-fik08B4bWmK9EqLPGnESGYSdHS1UGk32XqXTip2SvM2GfsV-N1A_dGJjlcOSgAwBxivWUYpO1ff8HlecyaFF-7qc6sHBPlDIBSsRYDoiOXWV6LyC9-9kPOLK7UvRbYImsvndI3cCFLuPR-o8-WobcZoy96zxDo6vdafmzsa8es";
  const headers = {
    accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
  return fetch(url, {
    method,
    headers,
    // mode: 'no-cors',
    body: dataBody,
  })

    .then(async res => {
      
      if (res.status === 403) {
        //await refreshNewToken()
        const tokennew =  await refreshNewToken();
        if(tokennew){
          httpRequest(url, method, originalBody);
        }
      } else if (res.status === 500) {

        //router.push('/NotFoundPage')
      }
      return res.text();
    })
    .then(responseBodyAsText => {
      try {
        if (url.includes('/api/v1/updateCart') && (window.atob(localStorage.getItem('CartGUID')) === ConstantsValues.defaultCartGUID)) {
          localStorage.setItem('CartGUID', window.btoa(JSON.parse(responseBodyAsText).split('|')[0]))
        }
        //console.log("loggingerror----------------------2",responseBodyAsText)
        const bodyAsJson = JSON.parse(responseBodyAsText);
        return bodyAsJson;
      } catch (e) {
        
        //console.log("loggingerror----------------------",e)
        throw Error(e);
        
      }
    },
    
    );

  } else {
    let tokennew = Cookies.get('accessToken');
    if(tokennew === undefined){
      tokennew = await refreshNewToken()
    }
    // const tokennew = await refreshNewToken()
      //console.log('==================================new token2',tokennew)
    const dataBody = JSON.stringify(body)
  //const token = localStorage.getItem('generatedtoken');
  // const token = "HVWcC7M_c0jg0kOEg5U0SDmajp37BfxojHvboS6CgbKzOSDLlviz6v5KyzoJoLkv5WP6AAg0f_e0_b0_udZGygAcMNSvUJGvT-Yfef9dwGwMdbKyH_nyOwRsQA5XXGtPSyajfGKZt2eddoVgbSe9G-lp12UWO8l7896KgSWMY-Sv06ugHvwHq_XpP-qnlGcN-fik08B4bWmK9EqLPGnESGYSdHS1UGk32XqXTip2SvM2GfsV-N1A_dGJjlcOSgAwBxivWUYpO1ff8HlecyaFF-7qc6sHBPlDIBSsRYDoiOXWV6LyC9-9kPOLK7UvRbYImsvndI3cCFLuPR-o8-WobcZoy96zxDo6vdafmzsa8es";
  const headers = {
    accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${tokennew}`,
  };
  return fetch(url, {
    method,
    headers,
    // mode: 'no-cors',
    body: dataBody,
  })

    .then(async res => {
      
      if (res.status === 403) {
        const tokennew =  await refreshNewToken();
        if(tokennew){
          httpRequest(url, method, originalBody);
         return 'cancelOperation'
        }
      } else if (res.status === 500) {
        
        //router.push('/NotFoundPage')
         return 'cancelOperation'
      }
      return res.text();
    })
    .then(responseBodyAsText => {
      try {
        if(responseBodyAsText){
          if (url.includes('/api/v1/updateCart') && (window.atob(localStorage.getItem('CartGUID')) === ConstantsValues.defaultCartGUID)) {
            localStorage.setItem('CartGUID', window.btoa(JSON.parse(responseBodyAsText).split('|')[0]))
          }
        
          const bodyAsJson = JSON.parse(responseBodyAsText);
          return bodyAsJson;
        }else{
          return 'cancelOperation'
        }

        
      } catch (e) {
        
        console.log("loggingerror22----------------------",responseBodyAsText)
        if(responseBodyAsText === 'cancelOperation'){
          return Promise.reject();
        }
        
        // throw Error(responseBodyAsText);
        
      }
    },
    
    )
  }
  
}
