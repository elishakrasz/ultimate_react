import Layout from "../components/Layout";
import { withRouter } from "next/router"

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p>
      LWealth-management co-heads Iqbal Khan and Tom Naratil will separate EMEA
      into the three regions, according to an internal UBS memo sent to
      employees and seen by Bloomberg. Novakovic, who currently runs EMEA wealth
      management, will be left with western Europe, while she remains chief
      executive officer of the UBS Europe SE business. Central and eastern
      Europe will be headed by Caroline Kuhnert while Ali Janoudi will run the
      Middle East and Africa. With the regional split,
    </p>
  </Layout>
);

export default withRouter(Post)