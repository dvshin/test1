import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home({mainpageShopList}) {
  return (

    <Layout>
      <h1 className={styles.title}>
        <a href="https://posnet.com.au">POSNET PTY LTD</a>
      </h1>

      <p className={styles.description}>
        <code className={styles.code}>takeaway order system</code>
      </p>

      <div className={styles.grid}>
        <a href="/shop/nsw/hornsby/umi" className={styles.card}>
          <h2>Umi Sushi &rarr;</h2>
          <p>Sushi Umi order page</p>
        </a>

        <a href="/shop/nsw/hornsby/herosushi" className={styles.card}>
          <h2>Hero Sushi &rarr;</h2>
          <p>go to hero sushi order page</p>
        </a>
        {mainpageShopList.map(({ link, name }) => (
          <a href={link} className={styles.card}>
            <h2>{name} &rarr;</h2>
            <p>go to {name} order page</p>
          </a>
        ))}
      </div>
    </Layout>
    )
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }

export async function getStaticProps() {
  const mainpageShopList = getmainShopList()
  return {
    props: {
      mainpageShopList
    }
  }
}

export async function getSortedPostsData() {
  const res = await fetch('..')
  return res.json()
}

export function getmainShopList() {
  return [
    {
      link: "/shop/nsw/hornsby/umi",
      name: "Umi Sushi"
    },
    {
      link: "/shop/nsw/hornsby/umi",
      name: "Umi Sushi1"
    },
    {
      link: "/shop/nsw/hornsby/umi",
      name: "Umi Sushi2"
    }, {
      link: "/shop/nsw/hornsby/umi",
      name: "Umi Sushi3"
    },
    {
      link: "/shop/nsw/hornsby/umi",
      name: "Umi Sushi4"
    },
    {
      link: "/shop/nsw/hornsby/umi",
      name: "Umi Sushi5"
    }
  ]
}