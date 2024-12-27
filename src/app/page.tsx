'use client';

import { useWeb3Auth } from '@/contexts/web3AuthContext';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Loader from '@/Component/Loader';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { login, logout, loggedIn, getUserInfo, getAccounts } = useWeb3Auth();
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    if (loggedIn) {
      const fetchUserData = async () => {
        setLoading(true);
        try {
          const userInfo = await getUserInfo();
          console.log('User info:', userInfo);
          await getAccounts();
          router.push('/collections'); // Redirect to /collections
        } catch (error) {
          console.error('Error fetching user data:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchUserData();
    }
  }, [loggedIn, getUserInfo, getAccounts, router]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      {!loggedIn ? (
        <button
          onClick={() => {
            setLoading(true);
            login('google').finally(() => setLoading(false));
          }}
          className={`${styles.button} ${styles.loginButton}`}
        >
          Login with Google
        </button>
      ) : (
        <button
          onClick={() => {
            logout();
          }}
          className={`${styles.button} ${styles.logoutButton}`}
        >
          Logout
        </button>
      )}
    </div>
  );
}
