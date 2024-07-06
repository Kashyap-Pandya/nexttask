import Image from "next/image";

const BarLayout = ({ children }) => {
  return (
    <div>
      <div className=" text-white hero ">
        <div className="hero-content flex-col sm:flex-row border-2 border-teal-300 p-6">
          <Image
            src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1200"
            width={300}
            height={400}
            alt="image"
          />
          <div className="p-4">
            <h1 className="text-2xl py-2 ">Welcome to our bar</h1>
            <p className="py-4">50% Discount on most drinks</p>
            <button className="btn btn-success">Let&#39;s get some</button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
export default BarLayout;
