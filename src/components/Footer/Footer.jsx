
const Footer = () => {
  return (
    <div className="bg-white footer-center py-[100px] px-[160px] mt-[800px]  lg:mt-[300px] ">
      <div className="text-center mb-8">
        <h3 className="text-4xl font-bold">Gadget Heaven</h3>
        <p className="text-base text-gray-400">Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <footer className="footer lg:footer-center mt-8 border-t border-solid border-gray-400  p-10">
          <nav>
            <h6 className="footer-title text-lg text-black">Services</h6>
            <a className="link link-hover text-base text-gray-500">Branding</a>
            <a className="link link-hover text-base text-gray-500">Design</a>
            <a className="link link-hover text-base text-gray-500">Marketing</a>
            <a className="link link-hover text-base text-gray-500">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title text-lg text-black">Company</h6>
            <a className="link link-hover text-base text-gray-500">About us</a>
            <a className="link link-hover text-base text-gray-500">Contact</a>
            <a className="link link-hover text-base text-gray-500">Jobs</a>
            <a className="link link-hover text-base text-gray-500">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title text-lg text-black">Legal</h6>
            <a className="link link-hover text-base text-gray-500">Terms of use</a>
            <a className="link link-hover text-base text-gray-500">Privacy policy</a>
            <a className="link link-hover text-base text-gray-500">Cookie policy</a>
          </nav>
      </footer>
    </div>
    
  );
};

export default Footer;