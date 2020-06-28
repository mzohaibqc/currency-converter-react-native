import React from 'react';
import PropTypes from 'prop-types';

import Screen from 'components/Screen';
import ThemeItem from 'components/Themes/Theme';
import { THEMES } from 'constants';

function Themes() {
  return (
    <Screen>
      {THEMES.map((theme, index) => <ThemeItem theme={theme} isLast={index === THEMES.length - 1} key={theme.name} />)}
    </Screen>
  );
}

Themes.propTypes = {
  navigation: PropTypes.object,
};

export default Themes;
