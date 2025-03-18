import { toast } from "react-toastify";

// To get data from localStorage of cart products
const getStoredCartList = () =>{
  const storedListStr = localStorage.getItem('cart-list');
  if(storedListStr){
    const storedList = JSON.parse(storedListStr);
    return storedList;
  }else{
    return [];
  }
  
}
// To add data in localStorage for cart products
const addToCartList = (id) => {
  const storedList = getStoredCartList();
  if(storedList.includes(id)){
    toast("Product Already Exists in Cart.")
  }else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('cart-list', storedListStr)
  }
}
// To get data from localStorage of wishlist products
const getStoredWishList = () =>{
  const storedWishListStr = localStorage.getItem('wish-list');
  if(storedWishListStr){
    const storedWishlist = JSON.parse(storedWishListStr);
    return storedWishlist;
  }else{
    return [];
  }
}
// To add data in localStorage for wishlist products
const addToWishList = (id) =>{
  const storedWishlist = getStoredWishList();
  if(storedWishlist.includes(id)){
    console.log(id, 'book already exists in wishlist');
    toast("Product Already Exists in Wishlist.")
  }else{
    storedWishlist.push(id);
    const storedWishListStr = JSON.stringify(storedWishlist);
    localStorage.setItem('wish-list', storedWishListStr)
  }
}

export {addToCartList, addToWishList, getStoredCartList, getStoredWishList}