import React from 'react';

import SvgLogo from './SvgLogo';
import Screen from './Screen';
import { THEMES_MAP } from 'constants/';

function SplashScreen() {
  return (
    <Screen justify="center" paddingTop="0">
      <SvgLogo width={250} height={250} fill={THEMES_MAP.Magenta.color} />
    </Screen>
  )
}

export default SplashScreen;
