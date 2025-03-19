import { useEffect, useState } from "react";
import Product from "../Product/Product";
import { useNavigate } from "react-router-dom";


const Products = () => {
  const [products, setProducts] = useState([]);
  
  const navigate = useNavigate()

  // all products data fetched
  useEffect(() =>{
    fetch('./products.json')
     .then(res => res.json())
     .then(data => setProducts(data))
  }, [])
// product filtering based on category with button click handler
  const handleCategorybtns = (e) =>{
    let word=e.target.value;
    if(word === "All"){
      setProducts(products);
      navigate("/")
    }else if(word === "Laptops"){
      const filtered = products.filter(product => product.category === "Laptop");
      setProducts(filtered);
      navigate("/laptops")
    }else if(word === "Phones"){
      const filtered = products.filter(product => product.category === "Phone");
      setProducts(filtered);
      navigate("/phones");
    }else if(word === "Smart Watches"){
      const filtered = products.filter(product => product.category === "Smart Watch");
      setProducts(filtered);
      navigate("/smart-watches");
    }
  }
  
  
  return (
    <div className="mt-[500px] lg:mt-[250px]">
      <h3 className="text-4xl font-bold text-center">Explore Cutting-Edge <br /> Gadgets</h3>
      <div className="mt-5 flex justify-center items-center gap-6 ">
        <div className="h-[556px] bg-white rounded-2xl  static w-[240px] ">
          <div className="space-y-6 px-6 py-6">
            <button className="btn bg-white text-gray-500 text-lg font-bold rounded-[32px] py-[24px] px-[30px]" value="All" onClick={handleCategorybtns}>All Products</button>
            <button className="btn bg-white text-gray-500 text-lg font-bold rounded-[32px] py-[24px] px-[30px]" value="Laptops"
            onClick={handleCategorybtns}>Laptops</button>
            <button className="btn bg-white text-gray-500 text-lg font-bold rounded-[32px] py-[24px] px-[30px]" value="Phones" onClick={handleCategorybtns}>Phones</button>
            <button className="btn bg-white text-gray-500 text-lg font-bold rounded-[32px] py-[24px] px-[30px]" value="Smart Watches" onClick={handleCategorybtns}>Smart Watches</button>
          </div>
        </div>
        {/* Products cards shown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                products.map((product, idx) => <Product key={idx} product={product}></Product>)
              }
        </div>
      </div>
      
    </div>
  );
};

export default Products;