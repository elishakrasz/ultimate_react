import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Error from './_error'
import Layout from "../components/Layout";

export default class About extends Component {

    static async getInitialProps() {
      const res = await fetch('https://api.github.com/users/reedbarger');
      const statusCode = res.status > 200 ? res.status : false;
      const data = await res.json();
            return { user: data, statusCode }
    }

  render() {
    const { user, statusCode } = this.props
    if(statusCode) {
      return <Error statusCode={statusCode} />
    }
    return (
      <Layout title="About">
          <p>{user.name}</p>
          <img 
            src={user.avatar_url}
            alt="Reed Barger"
            height="200px"
          />
        <p>JavaScript Programmer</p>
        <img src="/static/avatar2.png" alt="Simon Leys" />
      </Layout>
    );
  }
}

