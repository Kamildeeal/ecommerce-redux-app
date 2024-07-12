import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";

const CustomLink = ({ href, children }: { href: any; children: any }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    setLoading(true);
    router.push(href);
  };

  return (
    <>
      <Link href={href} onClick={handleClick}>
        {children}
      </Link>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-75 z-50">
          <ClipLoader color={"red"} loading={loading} size={150} />
        </div>
      )}
    </>
  );
};

export default CustomLink;
