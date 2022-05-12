import { GetStaticProps } from 'next';
import  Head  from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';
import Prismic from '@prismicio/client'

//import {Client} from '../../../utils/prismicHelpers'
import Link from 'next/link';


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




export async function getStaticProps() {
  //const response = await Client().query(Prismic.Predicates.at('document.type', 'post'));
  //console.log(response)
}