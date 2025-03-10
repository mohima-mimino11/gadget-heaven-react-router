import bannerImg from '../../assets/banner.jpg'


const Banner = () => {
  return (
    <div className="hero bg-[#9538E2] h-[694px] rounded-[32px] ">
      <div className="hero-content flex-col  text-center">
        <div>
          <h1 className="text-[56px] font-bold text-white">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
          <p className="py-6">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
          </p>
          <button className="btn bg-white text-[#9538E2] text-xl font-bold rounded-[32px] py-[15px] px-[30px]">Shop Now</button>
        </div>
        <div className='rounded-3xl'>
          <img src={bannerImg} alt="" className="h-[563px] border-3 border-solid border-white rounded-3xl" />
        </div>
      </div>
  </div>
  );
};

export default Banner;