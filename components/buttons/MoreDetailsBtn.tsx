import Link from "next/link";
import { MdReadMore } from "react-icons/md";

interface AddProductButtonProps {
  currentProduct: any;
  buttonText: string;
}

const MoreDetailsBtn = ({
  currentProduct,
  buttonText,
}: AddProductButtonProps) => {
  return (
    <Link
      href={{
        pathname: `/product/${currentProduct.title
          .replace(/\s+/g, "-")
          .toLowerCase()}`,
        query: { productId: `${currentProduct.id}` },
      }}
    >
      <div className="relative flex items-center justify-center w-full text-center px-2 py-1 mx-auto border-2 border-black text-lg font-bold uppercase rounded hover:bg-gray-100 ">
        {buttonText}
        <MdReadMore className="text-3xl ml-2" />
      </div>
    </Link>
  );
};

export default MoreDetailsBtn;
