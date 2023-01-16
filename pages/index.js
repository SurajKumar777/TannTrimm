import axios from 'axios'
import Products from '../components/Layout/Products'

export default function Home(props) {
  const ProdData = props.data.data.products;
  console.log(ProdData)
  return (
    <>
      <Products ProdData={ProdData} />
    </>
  )
}

export async function getStaticProps() {
  const { data } = await axios.get("https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json");

  return {
    props: {
      data: data,
    }
  }
}
