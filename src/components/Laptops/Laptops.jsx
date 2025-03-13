import { useLoaderData } from "react-router-dom";


const Laptops = () => {
  const allProducts = useLoaderData();
  console.log(allProducts);
  
  return (
    <div>
      
    </div>
  );
};

export default Laptops;