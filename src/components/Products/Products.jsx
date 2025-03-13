import { useEffect, useState } from "react";
import Product from "../Product/Product";
import { useNavigate } from "react-router-dom";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate()
  useEffect(() =>{
    fetch('./products.json')
     .then(res => res.json())
     .then(data => setProducts(data))
  }, [])

  const filteredGadgets =
  filter === "All"
    ? products
    : products.filter((gadget) => gadget.category === filter);
  const handleCategory = () =>{
    if(products.filter(product => product.category === "Laptop")){
      navigate("/laptops")
      console.log(filteredGadgets);
      
      setFilter(filteredGadgets)
      
    }
  }
  
  return (
    <div className="mt-[250px]">
      <h3 className="text-4xl font-bold text-center">Explore Cutting-Edge <br /> Gadgets</h3>
      <div className="mt-5 flex justify-center items-center gap-6 ">
        <div className="h-[556px] bg-white rounded-2xl  static w-[240px] -mt-[1000px]">
          <div className="space-y-6 mx-6">
            <button className="btn bg-white text-gray-500 text-lg font-bold rounded-[32px] py-[24px] px-[30px]">All Products</button>
            <button className="btn bg-white text-gray-500 text-lg font-bold rounded-[32px] py-[24px] px-[30px]"
            onClick={handleCategory}>Laptops</button>
            <button className="btn bg-white text-gray-500 text-lg font-bold rounded-[32px] py-[24px] px-[30px]">Phones</button>
            <button className="btn bg-white text-gray-500 text-lg font-bold rounded-[32px] py-[24px] px-[30px]">Smart Watches</button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
              {
                products.map(product => <Product key={product.product_id} product={product}></Product>)
              }
        </div>
      </div>
      
    </div>
  );
};

export default Products;