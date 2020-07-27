import ReactPixel from 'react-facebook-pixel';

export default function facebookPixelConversion(page: String, data = {}) {
  ReactPixel.init(
    process.env.REACT_APP_FACEBOOK_PIXEL_ID,
    {},
    { debug: false, autoConfig: true },
  );
  ReactPixel.pageView();
  ReactPixel.fbq('trackCustom', page, data);
}