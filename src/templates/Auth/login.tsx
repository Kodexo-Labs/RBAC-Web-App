import { useRouter } from "next/router";

import { Section } from "../../layouts/Section";

type TypeSign = {
  tabStatus: Number;
  setTabStatus: React.Dispatch<React.SetStateAction<number>>;
};

const SignIn = (props: TypeSign) => {
  const Router = useRouter();
  return (
    <Section yPadding="pt-20 pb-32">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <form className="mt-8 space-y-9" action="#" method="POST">
            <div className="-space-y-px rounded-md shadow-sm">
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
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-sky-800 focus:outline-none focus:ring-sky-800 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <div
                  onClick={() => {
                    props?.setTabStatus(0);
                    Router.push({
                      pathname: "/auth",
                      query: {
                        status: "signup",
                      },
                    });
                  }}
                  className="cursor-pointer font-medium text-gray-500 hover:text-sky-800"
                >
                  New here? Sign Up Instead
                </div>
              </div>

              <div className="text-sm">
                <div className="font-medium text-gray-500 hover:text-sky-800">
                  Forgot your password?
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="hover:bg-text-sky-600 focus:ring-text-sky-600 group relative flex w-full justify-center rounded-md border border-transparent bg-sky-800 py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-sky-800 group-hover:text-sky-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export { SignIn };
