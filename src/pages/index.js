import Link from 'next/link'
import Layout from '../../components/Layout'

const Index = () => <Layout>
    <Link href="/about">
          <a>About</a>
        </Link>
    <h1>Home</h1>
    Welcome to the home page</Layout>

export default Index;