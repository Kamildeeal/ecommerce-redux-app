import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
}

const ProductImage = ({ src, alt }: ProductImageProps) => {
  return (
    <div className="w-[160px] h-[160px] lg:min-w-[220px] lg:h-[220px] overflow-hidden">
      <div className="relative h-full w-full transition-transform duration-300 ease-in-out hover:scale-110">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 220px, 160px"
          className="object-contain h-full w-full"
          placeholder="empty"
        />
      </div>
    </div>
  );
};

export default ProductImage;
