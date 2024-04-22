import Cookies from 'js-cookie';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <script src="https://cdn.razorpay.com/widgets/affordability/affordability.js"></script>
          {/* <link href="/assets/css/style.min.css" rel="preload" fetchpriority="high"/> */}
              <meta name="robots" content="INDEX,FOLLOW"></meta>
              {/* <meta property="og:title" content="Explore Best Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More with Amazing Offers!" /> */}  
        </Head>
        <body>
          <Main />
          
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;