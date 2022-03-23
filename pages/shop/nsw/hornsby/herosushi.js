import Link from 'next/link'
import Layout from '../../../../components/layout'

export default function herosushi() {
  return (
    <Layout>
      <h1>hero sushi page</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )

}