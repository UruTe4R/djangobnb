import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

import SearchFilters from '@/app/components/navbar/SearchFilters';
import UserNav from './UserNav';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.png"
            width={180}
            height={55}
            alt="DjangoBnb logo"/>
          </Link>
        </div>
          <div className={styles.searchfilter_container}>
            <SearchFilters />
          </div>
          <div className={styles.usermenu_container}>
            Add Property
            <UserNav />
          </div>
      </div>
    </nav>
  )
}