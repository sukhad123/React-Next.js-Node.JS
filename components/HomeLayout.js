import Link from 'next/link';

//adding my link
 
export default function Layout(props) {
    return (

        <> 
            <div className="main"> 
                <div>

                    <Link href="/">
                        <h1 className="margin myCompanyText italic">myShop</h1>
                    </Link>
                </div>
                <div className="first" >
             <Link href = "/signIn">
                   
                        <button className=" margin bg-color  text-color font-bold py-2 px-4 round">Sign In</button>
                    </Link>
               
                <Link href="/signUp">
                        <button className=" margin bg-color   text-color font-bold py-2 px-4 round">Sign Up</button>
                    </Link>
            </div>
                {props.children}
            </div>
        </>
    );
}