import React from 'react';
import link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ( footerBanner ) => {
  return (
    <div className="footer-banner-container">
      <div clasName="footer-desc" >
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default FooterBanner