import  Head  from 'next/head';
import styles from './styles.module.scss';


export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 1994</time>
            <strong>Criando post</strong>
            <p>monark tomou no cu</p>
          </a>
          <a href="">
            <time>12 de março de 1994</time>
            <strong>Criando post</strong>
            <p>monark tomou no cu</p>
          </a>
          <a href="">
            <time>12 de março de 1994</time>
            <strong>Criando post</strong>
            <p>monark tomou no cu</p>
          </a>
        </div>
      </main>
    </>
  );
}