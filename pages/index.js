import { supabaseAdmin } from "../client";
import Hero from "../components/Hero";
import PostImage from "../components/PostImage";

export default function Home({ twimgs }) {

  return (
    <div className="bg-gray-700">
      <Hero />
      <PostImage twimgs={twimgs} />
    </div>
  )
}

export async function getStaticProps() {
    
  const { data } = await supabaseAdmin.from('images').select('*');
  const twimgs = data
  return {
    props: { twimgs }
  }
}
