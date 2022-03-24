import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout
  from '../../../../components/layout'
export default function umi({ menuGroup, menuItem }) {
  return (
    <Layout>
      <Head>
        <title>
          umi sushi
        </title>
      </Head>
      <h1>sushi umi page</h1>

<ul>
      {menuGroup.map(({ name }) => (
        <li><h2>{name}</h2></li>
      ))}
</ul>

      {menuItem.map((item,index) => (
        <>
          <h2>{item.properties.name.title[0].plain_text} <i>${item.properties.price.number}</i> </h2>
          
          <Image src={item.properties.image.files[0].file.url} width={300} height={300} />
        </>
      ))}








      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}

const databaseId = '3666796d8c824bbc8d63504c23c42e39';

//https://dvshin.notion.site/3666796d8c824bbc8d63504c23c42e39?v=7576e0469c284ab2b52d6a842df2f98b
export async function getServerSideProps(context) {
  const menuGroup = await getmenuGroup()
  // const menuItem = await getmenuItem()
  const menuItem = await getNotionDataBase()

  return {
    props: {
      menuGroup,
      menuItem
    }
  }
}

export async function getmenuGroup() {
  return [
    {
      id: 1,
      name: "BBQ"
    },
    {
      id: 2,
      name: "Meal"
    },
    {
      id: 3,
      name: "Drink"
    },
  ]
}

export async function getNotionDataBase() {
  const { Client } = require('@notionhq/client');

  const notion = new Client({ auth: 'secret_vGKW2OEkCLWAtqWrjeZG8hG8yEGv6IOokQ5x7NBvm8G' });
  var results = 
    await (async () => {
      const response = await notion.databases.query({ database_id: databaseId });
      return response.results
    })();
  return results
}


export async function getmenuItem() {
  return [
    {
      id: 1,
      groupId: 1,
      name: "bbq menu1",
      description: "test bbq menu1 description",
      image: "",
      price: 20

    },
    {
      id: 2,
      groupId: 1,
      name: "bbq menu2",
      description: "test bbq menu1 description",
      image: "",
      price: 20

    },
    {
      id: 3,
      groupId: 2,
      name: "meal menu1",
      description: "test meal menu1 description",
      image: "",
      price: 20

    },
    {
      id: 4,
      groupId: 2,
      name: "meal menu2",
      description: "test meal menu1 description",
      image: "https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/274170669_1556573414722028_7363411504580143879_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=DqZCMU86DuAAX-t-rnA&_nc_ht=scontent-syd2-1.xx&oh=00_AT8cPWPHsYGwjWH9nM6ybQjxrndkwNHXHielGxZ722tzAA&oe=62418830",
      price: 20
    },
    {
      id: 5,
      groupId: 3,
      name: "drink menu2",
      description: "test drink menu1 description",
      image: "https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/274170669_1556573414722028_7363411504580143879_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=DqZCMU86DuAAX-t-rnA&_nc_ht=scontent-syd2-1.xx&oh=00_AT8cPWPHsYGwjWH9nM6ybQjxrndkwNHXHielGxZ722tzAA&oe=62418830",
      price: 20
    },
    {
      id: 6,
      groupId: 3,
      name: "drink menu2",
      description: "test drink menu1 description",
      image: "https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/274170669_1556573414722028_7363411504580143879_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=DqZCMU86DuAAX-t-rnA&_nc_ht=scontent-syd2-1.xx&oh=00_AT8cPWPHsYGwjWH9nM6ybQjxrndkwNHXHielGxZ722tzAA&oe=62418830",
      price: 20
    },
  ]
}