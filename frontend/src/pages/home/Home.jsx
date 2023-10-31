import Layout from "../../layout/Layout"
import Hero from "../../components/hero/Hero"
import Shipping from "../../components/shipping/Shipping"
import Feature from "../../components/feature/Feature"
import Bannner from "../../components/banner/Bannner"
import Newproduct from "../../components/newproduct/Newproduct"
import Inspired from "../../components/inspired/Inspired"
import Latestblog from "../../components/latestblog/Latestblog"
const Home = () => {
  return (
    <Layout>
       <Hero />
       <Shipping />
       <Feature />
       <Bannner />
       <Newproduct />
       <Inspired />
       <Latestblog />
       
    </Layout>
  )
}

export default Home