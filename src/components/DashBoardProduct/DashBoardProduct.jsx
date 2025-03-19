import { IoIosCloseCircleOutline } from "react-icons/io";

const DashBoardProduct = ({product}) => {
  const {product_title, description, price, product_image } = product;
  return (
    <div className="  bg-white rounded-2xl mt-4">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="w-[200px]">
            <img
              src={product_image}
              alt="Album"  />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-semibold">{product_title}</h2>
            <h3 className="text-lg font-semibold">Desciption: {description}</h3>
            <p className="text-xl font-semibold">Price:${price}</p>
            <div className="card-actions justify-end">
              <button className="text-2xl text-red-500"><IoIosCloseCircleOutline></IoIosCloseCircleOutline></button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default DashBoardProduct;