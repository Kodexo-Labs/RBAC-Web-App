import { useState } from 'react';

import Dropdown from '../components/dropdown';
import { Section } from '../layouts/Section';

// type TypeSigup = {
//   tabStatus: Number;
//   setTabStatus: React.Dispatch<React.SetStateAction<number>>;
// };
// props: TypeSigup
interface ITem {
  value: string;
  label: string;
}
const Signup = () => {
  const [items, setItems] = useState<ITem | null>(null);
  return (
    <Section yPadding="pt-20 pb-32">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <form className="mt-8 space-y-9" action="#" method="POST">
            <div className="-space-y-px shadow-sm">
              <div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative my-2 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-sky-800 focus:outline-none focus:ring-sky-800 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="relative my-2 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-sky-800 focus:outline-none focus:ring-sky-800 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <Dropdown
                  value={items}
                  setOption={setItems}
                  options={[]}
                  defaultValue={null}
                  className=""
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative my-2 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-sky-800 focus:outline-none focus:ring-sky-800 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <input
                  id="confirm_password"
                  name="confirm_password"
                  type="confirm_password"
                  autoComplete="confirm-password"
                  required
                  className="relative my-2 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-sky-800 focus:outline-none focus:ring-sky-800 sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export { Signup };
