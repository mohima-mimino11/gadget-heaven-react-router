import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const Products = useLoaderData();
  // console.log(Products);
  
  return (
    <div className="mt-12">
      <h4 className="text-2xl font-bold px-[840px]">Statistics</h4>
      <div className="mx-[160px] mt-8">
          <div className="h-[447px] bg-white rounded-2xl">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={Products}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="product_title" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" fill="#9538E2" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="rating" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
              </BarChart>
            </ResponsiveContainer>

          </div>
      </div>

      
    </div>
  );
};

export default Statistics;