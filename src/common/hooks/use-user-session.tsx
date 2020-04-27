import * as React from 'react';
import { UserSession, AppConfig } from 'blockstack';

export const useUserSession = () => {
  const [userData, setUserData] = React.useState({ loaded: false });
  const [signedIn, setSignedIn] = React.useState(false);
  const appConfig = new AppConfig(['store_write']);
  const userSession = new UserSession({ appConfig });
  React.useEffect(() => {
    if (!signedIn && userSession.isUserSignedIn()) {
      setSignedIn(true);
    }
  }, [userSession.isUserSignedIn()]);

  React.useEffect(() => {
    if (!userData.loaded && signedIn) {
      setUserData(s => ({
        ...userSession.loadUserData(),
        loaded: true,
      }));
    }
  }, [signedIn]);

  return {
    userSession,
    userData,
    signedIn,
    appConfig,
  };
};
