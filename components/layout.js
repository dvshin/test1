import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <title>POSNET takeaway order</title>
                <meta name="description" content="take away order system" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <main className={styles.main}>{children}</main>
                <footer className={styles.footer}>
                    <div>
                        Powered by{' '}
                        <span className={styles.logo}>
                            <Image src="/posnet-logo.png" alt="POSNET Logo" width={120} height={26} />
                        </span>
                    </div>
                </footer>
            </div>
        </div>
    )
}