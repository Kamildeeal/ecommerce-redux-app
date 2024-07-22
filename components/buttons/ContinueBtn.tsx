import Link from "next/link";

const ContinueBtn = ({}) => {
  return (
    <div className="lg:sticky lg:top-1/2">
      <Link href={"cart/order"}>
        <div className=" mx-auto mb-8 lg:my-2 px-4 py-2 text-xl border-2 max-w-max border-gray-800 font-bold text-white  rounded-lg shadow-sm cursor cursor-pointer transition bg-blue-500 hover:text-gray-800 hover:bg-white">
          Continue
        </div>
      </Link>
    </div>
  );
};

export default ContinueBtn;
