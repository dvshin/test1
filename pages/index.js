import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Home({ mainpageShopList }) {
  return (

    <Layout>
      <h1 className={styles.title}>
        <Link href="https://posnet.com.au" passHref>POSNET PTY LTD</Link>
      </h1>

      <p className={styles.description}>
        <code className={styles.code}>takeaway order system</code>
      </p>

      <div className={styles.grid}>
        
        
      {mainpageShopList.map(({link,name}) =>
      (<div key={link+name} className={styles.card}>
          <a href={link}  passHref>
            <h2>{name} &rarr;</h2>
            <p>{name} order page</p>
          </a>
        </div>)
      )}
        
        

        {/* <div className={styles.card}>
          <a href="/shop/nsw/hornsby/herosushi"  passHref>
            <h2>Hero Sushi &rarr;</h2>
            <p>go to hero sushi order page</p>
          </a>
        </div> */}
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

// export async function getSortedPostsData() {
//   const res = await fetch('..')
//   return res.json()
// }

export function getmainShopList() {
  return [
    {
      link: "/shop/nsw/hornsby/umi",
      name: "Umi Sush"
    },
    {
      link: "/shop/nsw/hornsby/herosushi",
      name: "hero sushi"
    }
  ]
}