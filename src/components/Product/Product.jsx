
import { Link } from "react-router-dom";

const Product = ({product}) => {
  const {product_image, product_title, price, category, product_id} = product;
  
  return (
    <div>
   
      <div className="card bg-base-100 w-96 shadow-xl h-[384px]">
        <figure className="px-10 pt-10">
          <img
            src={product_image}
            alt={category}
            className="rounded-xl h-[181px]" />
        </figure>
        <div className="card-body items-center text-center ">
          <h2 className="card-title text-2xl font-semibold">{product_title}</h2>
          <p className="text-gray-400 text-xl">Price: {price}$</p>
          <div className="card-actions">
            {/* Products details shown based on their IDs */}
            <Link to={`/productdetails/${product_id}`}><button className="btn bg-white text-[#9538E2] text-lg font-semibold rounded-[32px] py-[15px] px-[30px]" >View Details</button></Link>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Product;