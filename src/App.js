import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
import './App.css';
import {getByMonthSales, getCategories, getProducts, getBrands} from "./request.js"
import { BarChart } from './BarChart';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState({
    labels: [],
    datasets: [{
      label: 'Sales By Month for:',
      data: [],
      backgroundColor: [
        'rgb(126, 162, 235)'
      ],
      borderColor: [
        'rgb(126, 162, 235)'
      ],
      borderWidth: 1
    }]
  })
  
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [brands, setBrands] = useState([])

  const [category, setCategory] = useState("clothes")
  const [product, setProduct] = useState("shoes")
  const [brand, setBrand] = useState("nike")

  useEffect(()=>{
    if(product == null || brand == null) return
    getByMonthSales(category, product, brand).then(res=>{
      console.log(res.data)
      setData({
        labels: Object.keys(res.data.sales),
        datasets: [{
          label: 'Sales By Month for:',
          data: Object.values(res.data.sales),
          backgroundColor: [
            'rgb(126, 162, 235)'
          ],
          borderColor: [
            'rgb(126, 162, 235)'
          ],
          borderWidth: 1
        }]
      })
    })
  },[category, product, brand])

  useEffect(()=>{
    getCategories().then(res=>{
      setCategories(res.data.categories)
    })
  },[])

  useEffect(()=>{
    getProducts(category).then(res=>{
      setProducts(res.data.products)
    })
  },[category])

  useEffect(()=>{
    if(product == null) return
    getBrands(category,product).then(res=>{
      console.log(res.data)
      setBrands(res.data.brands)
    })
  },[category, product])

  const changeCategory = (cat) =>{
    setProduct(null)
    setBrand(null)
    setCategory(cat)
  }

  const changeProduct = (cat) =>{
    setBrand(null)
    setProduct(cat)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='header'>
          <a>Menu</a>
          <div className='userName'><span className='dot'></span> <a>User Name</a></div>
          <div className='report'><a>Sales Report</a></div>
        </div>
      </header>
      <div className='selectores'>
        <div className='selectLeft'>
          Categoria:<select onChange={e => changeCategory(e.target.value)}>
          {
            categories.map(cat =>(
              <option key={cat}>
                {cat}
              </option>
            ))
          }
          </select>
        </div>
        <div className='selectCenter'>
          Producto:<select onChange={e => changeProduct(e.target.value)}>
          {
            products.map(prod =>(
              <option key={prod}>
                {prod}
              </option>
            ))
          }
          </select>
          </div>
        <div className='selectRight'>
          Marca:<select onChange={e => setBrand(e.target.value)}>
          {
            brands.map(brand =>(
              <option key={brand}>
                {brand}
              </option>
            ))
          }
          </select>
        </div>
      </div>
      <div className='graphLegend'>Sales By Month for:</div>
      <BarChart data={data} />
    </div>
  );
}

export default App;
