import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { isAuthenticated,  } from '@/lib/authenticate'


//defined the routes homepage route, signUp and signIn
const PUBLIC_PATHS = ['/signUp', '/', '/signIn'];
export default function RouteGuard(props) {
    const [authorized, setAuthorized] = useState(false);
    const router = useRouter();
    useEffect(() => {
        authCheck(router.pathname);
        router.events.on('routeChangeComplete', authCheck);
        return () => {
            router.events.off('routerChangeComplete', authCheck);

        }
    }, []);
    function authCheck(url) {
        const path = url.split('?')[0];
        if (!isAuthenticated() && !PUBLIC_PATHS.includes(path)) {
            setAuthorized(false);
            router.push('/signIn');
            // console.log(`trying to request a secure path: ${path}`)
        }
        else {
            setAuthorized(true);
        }
    }
    return <>
            { authorized && props.children}
            </>
}

//Checks either the route is public to access
