import { useRouter } from 'next/router';
import React from 'react';

type TapsProp = {
  tabStatus: number;
  setTabStatus: React.Dispatch<React.SetStateAction<number>>;
};

const Tabs = (prop: TapsProp) => {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-center ">
        <ul className="flex items-center justify-between border-b ">
          <li
            className={` my-2 border-b-4 px-6 py-2 text-center text-2xl font-bold transition-all ${
              prop?.tabStatus === 1
                ? 'border-sky-900 text-sky-900'
                : 'border-gray-500 text-gray-500'
            }`}
          >
            <button
              role="button"
              onClick={() => {
                prop?.setTabStatus(1);
                router.push({
                  pathname: '/auth',
                  query: {
                    status: 'login',
                  },
                });
              }}
            >
              Login
            </button>
          </li>
          <li
            className={`my-1 border-b-4 px-6 py-2 text-center text-2xl font-bold transition-all ${
              prop?.tabStatus === 0
                ? 'border-sky-900 text-sky-900'
                : 'border-gray-500 text-gray-500'
            }`}
          >
            <button
              role="button"
              onClick={() => {
                prop?.setTabStatus(0);
                router.push({
                  pathname: '/auth',
                  query: { status: 'signup' },
                });
              }}
            >
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export { Tabs };
