
import Layout from '@/components/layout'
import Link from 'next/link';
export async function getStaticPaths() {
  // pre-render and support post/1 through post/5 only
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } }
      
    ], fallback: true // any pages not identified above, will result in a 404 error, ie post/6
  }
}

export async function getStaticProps(context) {

  const res = await fetch(`https://fakestoreapi.com/products/${context.params.id}`)
  const data = await res.json()

  return { props: { post: data } }
}

export default function Post(props) {
  return <>
  <Layout/>
    <p><strong>User ID:</strong> {props.post.id}</p>
    <p><strong>Title</strong> {props.post.title}</p>
    <p><strong>Price:</strong> {props.post.price}</p>
    <img src={props.post.image} alt="Description of my image" />
    <button className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
    <Link href="/"> Go Back</Link>
           
            </button>
  </>
}