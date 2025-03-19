import { IoIosCloseCircleOutline } from "react-icons/io";

const DashBoardProduct = ({product}) => {
  const {product_title, description, price, product_image } = product;
  return (
    <div className="h-[188px] bg-white rounded-2xl mt-4">
      <div className="p-8 flex gap-7">
        <div>
           <img src={product_image} alt="" className="w-[100px]" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold">{product_title}</h3>
          <p className="text-lg text-gray-400">{description}</p>
          <h4 className="text-xl font-semibold">Price: ${price}</h4>
        </div>
        <div className="pl-[500px] text-2xl text-red-500">
            <IoIosCloseCircleOutline></IoIosCloseCircleOutline>            
        </div>
      </div>
    </div>
  );
};

export default DashBoardProduct;