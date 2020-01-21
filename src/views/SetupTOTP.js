import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import QRCode from 'qrcode.react';

import {
  FormSection,
  SectionHeader,
  SectionBody,
  SectionFooter,
  Button,
} from 'aws-amplify-react';

import CircularProgress from '@material-ui/core/CircularProgress';

export const CustomTOTP = (props) => {
  const [codeState, setCodeState] = useState();
  const [inputState, setInputState] = useState();
  
  useEffect(() => {
    const user = props.authData;
    const issuer = encodeURI('AWSCognito');
    Auth.setupTOTP(user)
      .then(data => {
        const code =
          'otpauth://totp/' +
          issuer +
          ':' +
          user.username +
          '?secret=' +
          data +
          '&issuer=' +
          issuer;
        setCodeState({ code });
      })
      .catch(err => console.log('totp setup failed', err));
  }, [props.authData]);

  const verifyTotpToken = () => {
    const user = props.authData;
    if (
      !Auth ||
      typeof Auth.verifyTotpToken !== 'function' ||
      typeof Auth.setPreferredMFA !== 'function'
    ) {
      throw new Error(
        'No Auth module found, please ensure @aws-amplify/auth is imported'
      );
    }
    Auth.verifyTotpToken(user, inputState)
      .then(() => {
        // setar um logger!!!
        Auth.setPreferredMFA(user, 'TOTP');
        console.log({ setupMessage: 'Setup TOTP successfully!' });
        console.log('set up totp success!');
        console.log('Setup TOTP', 'SUCCESS', user);
      })
      .catch(err => {
        console.log({ setupMessage: 'Setup TOTP failed!' });
        console.log(err);
      });
  };

  const showSecretCode = () => {
    if (codeState) {
      return (
        <div>
          <div className={inputState}>
            <QRCode value={codeState.code.toString()} />
          </div>
          <label>{'Enter Security Code:'}</label>
          <input
            autoFocus
            key="totpCode"
            name="totpCode"
            onChange={event => setInputState(event.target.value)}
          />
        </div>
      );
    } else {
      return <div><CircularProgress /></div>;
    }
  };

  return (
    <FormSection>
      <SectionHeader>{'Scan then enter verification code'}</SectionHeader>
      <SectionBody>{showSecretCode()}</SectionBody>

      <SectionFooter>
        <Button onClick={verifyTotpToken} style={{ width: '100%' }}>
          {'Verify Security Token'}
        </Button>
      </SectionFooter>
    </FormSection>
  );
};

