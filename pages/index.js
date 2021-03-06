import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          quasi incidunt distinctio provident iure corrupti molestiae quidem
          similique, temporibus, deleniti expedita ex enim? Pariatur ex eum
          laborum obcaecati eaque soluta.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          quasi incidunt distinctio provident iure corrupti molestiae quidem
          similique, temporibus, deleniti expedita ex enim? Pariatur ex eum
          laborum obcaecati eaque soluta.
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
