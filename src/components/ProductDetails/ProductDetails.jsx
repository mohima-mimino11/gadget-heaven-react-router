import { useLoaderData, useParams } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";
import { createContext, useState } from "react";
import { addToCartList, addToWishList } from "../../utility/addToDB";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
const ProductDetails = () => {
  // products data fetched
  const allProducts = useLoaderData();
  // console.log(allProducts);
  const {product_id} = useParams();
  const id = parseInt(product_id)
  // single product defining for showing the only product detail that was clicked by the user
  const product = allProducts.find(product => product.product_id === id) 
  // console.log(typeof product_id, id);
  const {product_id: currentId,product_title,product_image,  price, description, specifications, availability, rating} = product
  
  
  const handleAddToCart = (id) =>{
     /**
       * 1. understand what to store or save: => product_id
       * 2. where to store: database
       * 3. array, list or collection
       * 4. check: if product is already in the cart-list 
       * 5. if not, then add the product to cart-list
       * 6. if yes, don't add anything
       */
    addToCartList(id)
    toast(`Product Id number of ${id} added to your Cart.`)
  }
  
  const handleAddToWislist = (id) =>{
     /**
       * 1. understand what to store or save: => product_id
       * 2. where to store: database
       * 3. array, list or collection
       * 4. check: if product is already in the wish-list 
       * 5. if not, then add the product to wish-list
       * 6. if yes, don't add anything
       */
    addToWishList(id)
    toast(`Product Id number of ${id} added to your Wishlist.`)
  }
  
  
  
  return (
    <div >
      <Helmet>
        <title>Product Details</title>
      </Helmet>
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
                        <button className="btn bg-[#9538E2] text-white text-lg font-bold rounded-[32px]" 
                        onClick={() => handleAddToCart(currentId)}
                        >Add To Cart</button>
                        <button onClick={() => handleAddToWislist(currentId)}><IoHeartOutline className="text-4xl"></IoHeartOutline></button>
                      </div>
                      
              </div>
                </div>

             
             
              
            </div>
        </div>
     
    </div>
  );
};

export default ProductDetails;

