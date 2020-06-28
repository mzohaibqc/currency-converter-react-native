import React from 'react';

import SvgLogo from 'components/SvgLogo';
import { AppLogoContainer } from 'components/StyledComponents';

function AppLogo({ scale, translateY, showInfo = false }) {
  return (
    <AppLogoContainer
      style={{ transform: [{ scale }, { translateY }] }}>
      <SvgLogo fill="#fff" showInfo={showInfo} />
    </AppLogoContainer>
  );
}

export default AppLogo;
