import React from 'react';

import { SignIn } from './login';
import { Signup } from './signup';

type TypeLoginSignup = {
  tabStatus: Number;
  setTabStatus: React.Dispatch<React.SetStateAction<number>>;
};
const Index = (props: TypeLoginSignup) => {
  return (
    <>
      {props?.tabStatus === 1 ? (
        <SignIn
          tabStatus={props?.tabStatus}
          setTabStatus={props?.setTabStatus}
        />
      ) : (
        <Signup
        // tabStatus={props?.tabStatus}
        // setTabStatus={props?.setTabStatus}
        />
      )}
    </>
  );
};

export default Index;
