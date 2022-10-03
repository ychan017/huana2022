import ImageCard from "./ImageCard";

const PostImage = ({ twimgs }) => {
  return (
    <div className="bg-gray-700 container max-w-7xl mx-auto pb-10 px-4">
      <h1 className="text-white text-2xl mt-8 mb-5">福興穀倉 華國美學</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {twimgs.map(twimg => <ImageCard twimg={twimg} key={twimg.id} />)}
      </div>
    </div>
  );
};

export default PostImage;
