import React, { } from 'react'
import { useSelector } from 'react-redux';
import { UserState } from 'state/user/reducer';
import { AppState } from 'state';
import { Route, Redirect } from 'react-router-dom';
import { KeyringState } from 'state/keyring/reducer';
import SeedPhrase from './index';

export default function RedirectSeedPhrase({ ...props }) {
  const userState: UserState = useSelector((state: AppState) => state.user)
  const keyringState: KeyringState = useSelector((state: AppState) => state.keyring)

  return (
    <>
      <Route  {...props} component={({ ...props }) => {
        if (userState.hasWallet && keyringState.isUnlocked && !userState.onBoarding) {
          return <SeedPhrase {...props} />
        } else {
          return <Redirect to="/wallet" />
        }
      }}
      />
    </>
  )
}