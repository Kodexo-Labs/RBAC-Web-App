import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { NavbarTwoColumns } from '../components/navbar';
import { Tabs } from '../components/tabs';
import { Meta } from '../layouts/Meta';
import { AppConfig } from '../utils/AppConfig';
import LoginSignup from './LoginSignup';

const Base = () => {
  const [tabStatus, setTabStatus] = useState<number>(1);
  const router = useRouter();
  useEffect(() => {
    if (router?.query?.status === 'login') {
      setTabStatus(1);
    } else if (router?.query?.status === 'signup') {
      setTabStatus(0);
    }
  }, [router.query]);
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <NavbarTwoColumns logo="logo">
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </NavbarTwoColumns>
      <Tabs tabStatus={tabStatus} setTabStatus={setTabStatus} />
      <LoginSignup tabStatus={tabStatus} setTabStatus={setTabStatus} />
    </div>
  );
};

export { Base };
