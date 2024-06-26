import "@/styles/globals.css";
import "@/pages/styles/HomeLayout.css"
import "@/pages/styles/Brand.css"
import "@/pages/styles/productFirst.css"
import "@/pages/styles/signup.css"
import RouteGuard from "@/components/routeguard"
 

export default function App({ Component, pageProps }) {
    return <RouteGuard> <Component {...pageProps} /></RouteGuard>
}
