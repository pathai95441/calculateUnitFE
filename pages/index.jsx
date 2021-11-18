import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Calculate from '../component/calulate'
import DescritonCalulate from "../component/descriptionCalulate"
import { loadConfig } from '../redux/actions/configActions'
import { useEffect, useState } from "react"
import {connect, useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux'

const Home = (props) => {
  const { loadConfig, config } = props
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    await loadConfig()
    setLoading(false)
  }, []);

  return (
    <div>
        { loading ? (null) : (
        <div className={styles.container}>
          <Head>
            <title>คำนวนค่าไฟบ้าน</title>
            <meta name="description" content="คำนวนค่าไฟบ้าน" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <DescritonCalulate />
            <img className={styles.logo} src="/logo.jpg" height="200px" />
            <h1 className={styles.title}>
              คำนวนค่าไฟบ้าน
            </h1>
            <Calculate />
          </main>
      </div>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  config: state.config
})

const mapDispatchToProps = dispatch => ({
  loadConfig: bindActionCreators( loadConfig, dispatch )
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

