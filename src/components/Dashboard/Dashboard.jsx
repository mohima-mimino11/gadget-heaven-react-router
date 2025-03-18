import {  useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList, getStoredWishList } from "../../utility/addToDB";
import DashBoardProduct from "../DashBoardProduct/DashBoardProduct";


const Dashboard = () => {
  const allProducts = useLoaderData();
  console.log(allProducts);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)

 
  const handleCartProducts = () =>{
    const storedCartList = getStoredCartList();
    const storedCartListInt = storedCartList.map(id => parseInt(id));
    const cartProducts = allProducts.filter(product => storedCartListInt.includes(product.product_id));
    // console.log(cartProducts);
    setCart(cartProducts)
    const priceTotal = cartProducts.map(product => product.price);
    const priceTotalSum = priceTotal.reduce((a, b) => a + b)
    // console.log(priceTotalSum);
    setTotalPrice(priceTotalSum)
    
    
  }

  const handleWishlistProducts = () => {
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map(id => parseInt(id));
    const wishListProducts = allProducts.filter(product => storedWishListInt.includes(product.product_id));
    // console.log(wishListProducts);
    setCart(wishListProducts)
  }

  

  return (
    <div>
      <div className="hero bg-[#9538E2] h-[344px] rounded-[32px] ">
            <div className="hero-content  flex-col  text-center">
              <div>
                <h1 className="text-[32px] font-bold text-white">Dashboard</h1>
                <p className="py-6 text-white text-base">
                Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
                </p>
                <div className="flex justify-center gap-6">
                  <button className="btn btn-outline px-16 rounded-[32px] text-lg font-extrabold text-white hover:text-[#9538E2] " onClick={handleCartProducts}>Cart</button>
                  <button className="btn btn-outline px-16 rounded-[32px] text-lg font-extrabold text-white hover:text-[#9538E2]" onClick={handleWishlistProducts}>Wishlist</button>
                </div>
              </div>
            </div>
      </div>
      <div className="mt-12 mx-[160px]">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">Cart</h3>
          </div>
          <div className="flex gap-4">
            <h3 className="text-2xl font-bold">Total Cost: {totalPrice} </h3>
            <button className="btn btn-outline btn-primary px-5 py-3 rounded-[32px] text-lg font-semibold text-[#9538E2] hover:text-white ">Sort By Price</button>
            <button className="btn bg-[#9538E2] px-5 py-3 rounded-[32px] text-lg  text-white">Purchase</button>
          </div>
        </div>
        <div className="flex-col items-center gap-6">
            {
              cart.map(product => <DashBoardProduct key={product.product_id} product={product}></DashBoardProduct>)
            }
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;