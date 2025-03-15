
import { useLoaderData, useParams } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";

const ProductDetails = () => {
  const allProducts = useLoaderData();
  // console.log(allProducts);
  const {product_id} = useParams();
  const id = parseInt(product_id)
  const product = allProducts.find(product => product.product_id === id) 
  console.log(typeof product_id, id);
  const {product_title,product_image,  price, description, specifications, availability, rating} = product
  
  const handleRating = (rate) => {
    setRatings(rate)

    // other logic
  }
  
  
  return (
    <div>
        <div className="hero bg-[#9538E2] h-[463px] rounded-[32px] ">
            <div className="hero-content  flex-col  text-center">
              <div>
                <h1 className="text-[32px] font-bold text-white">Product Details</h1>
                <p className="py-6 text-white text-base">
                Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
                </p>
              
              </div>
              <div className="card w-[1200px]   card-side bg-base-100 shadow-sm">
                  <figure className="p-6 rounded-2xl">
                    <img
                      src={product_image}
                      alt="Movie" className="w-[424px]" />
                  </figure>
                  <div className="card-body items-start gap-1  ">
                    <h2 className="text-3xl font-semibold">{product_title}</h2>
                    <p className="text-xl font-semibold">Price: ${price}</p>
                    <p className="text-[#309C08] text-sm ">{availability ? `In Stock` : `Not Available`}</p>
                    <p className="text-lg text-gray-500">{description}</p>
                    <p className="text-lg font-bold">Specification:</p>
                    {
                      specifications.map(specification => <p className="text-lg text-gray-400">{specification}</p>)
                    }
                    <p className="text-lg font-bold">Rating</p>
                    <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                              type="radio"
                              name="rating-2"
                              className="mask mask-star-2 bg-orange-400"
                              defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <div className="badge badge-ghost text-black ml-5">{rating}</div>
                    </div>
                    <div className="flex gap-5 mt-5">
                      <button className="btn bg-[#9538E2] text-white text-lg font-bold rounded-[32px]">Add To Cart</button>
                      <IoHeartOutline className="text-4xl"></IoHeartOutline>
                    </div>
                    
                  </div>
              </div>
              
            </div>
        </div>
     
    </div>
  );
};

export default ProductDetails;