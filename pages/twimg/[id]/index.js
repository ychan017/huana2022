import { supabaseAdmin } from "../../../client";
import Image from "next/image"
import Meta from "../../../components/Meta"

const Twimg = ({ twimg }) => {
  return (
    <div className="container max-w-4xl mx-auto pt-6">
      <Meta title={twimg.title} />
      <div className="px-3">
        <Image src={twimg.imageSrc} width={960} height={540} className="rounded-md" />
        <h1 className="fond-bold text-xl my-2">{twimg.title}</h1>
        <p className="text-red-600 text-xl mt-4">{twimg.description}</p>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const { data } = await supabaseAdmin
    .from('images')
    .select( )
    .filter('id', 'eq', id)
    .single()
  const twimg = data
  return {
    props: { twimg }
  }
}

export async function getStaticPaths() {
  const { data } = await supabaseAdmin.from('images').select('*');
  const twimg = data

  const ids = twimg.map(twimg => twimg.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false
  }
}

export default Twimg;
