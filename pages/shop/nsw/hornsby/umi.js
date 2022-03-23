import Link from 'next/link'
import Head from 'next/head'
import Layout
  from '../../../../components/layout'
export default function umi() {
  return (
    <Layout>
      <Head>
        <title>
          umi sushi
        </title>
      </Head>
      <h1>sushi umi page</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
} 