import { useLoaderData } from "react-router-dom";


const Statistics = () => {
  const Products = useLoaderData();
  console.log(Products);
  
  return (
    <div className="mt-12">
      <h4 className="text-2xl font-bold px-[840px]">Statistics</h4>
      <div className="mx-[160px] mt-8">
          <div className="h-[447px] bg-white rounded-2xl">

          </div>
      </div>

      
    </div>
  );
};

export default Statistics;