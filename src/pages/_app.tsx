import "../styles/global.css";

import type { NextPage } from "next";
import type { AppProps } from "next/app";

import { wrapper } from "../redux/store";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
