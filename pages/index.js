import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    <a href="https://nextjs.org">
                        devter
                    </a>

                </h1>
                <Link href="/timeline">
                    <a>Timeline</a>
                </Link>
            </main>
        </>
    )
}
