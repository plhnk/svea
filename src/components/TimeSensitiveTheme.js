/** @jsx jsx */

import { useColorMode } from 'theme-ui';
import { useEffect } from 'react';
import moment from 'moment';

const TimeSensitiveTheme = () => {
  const [mode, setMode] = useColorMode();
  const timeFormat = 'HH'; // set time format to something easy
  const time = moment();
  const dayStart = moment('08', timeFormat);
  const dayEnd = moment('20', timeFormat); // 24h time is better

  function SetTheme() {
    // if it's daytime, set theme to default
    if (time.isBetween(dayStart, dayEnd)) {
      setMode('light');
    }
    // if its nighttime, if the user hasn't set it to light, set it to dark
    else if (sessionStorage.getItem('theme-ui-color-mode') === null) {
      setMode('default');
    }
  }

  useEffect(() => {
    SetTheme();
    // save theme to session storage
    sessionStorage.setItem('theme-ui-color-mode', mode);
  }, []);
  return null;
};

export default TimeSensitiveTheme;
