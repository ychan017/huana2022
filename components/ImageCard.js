import Image from "next/image";
import Link from "next/link";

const ImageCard = ({ twimg }) => {
  return (
    <Link href={`/twimg/${twimg.id}`}>
      <div className="bg-white shadow-sm rounded-md cursosr-pointer">
        <Image src={twimg.imageSrc} width={960} height={540} />
        <div className="px-6 py-2">
	        <div className="font-bold text-xl mb-l">{twimg.title}</div>
        </div>
      </div>
    </Link>
  )
};

export default ImageCard;
