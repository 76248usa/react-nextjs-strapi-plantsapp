import Link from 'next/link'
import { fetchJson } from '@/lib/api';
import { useUser } from '@/hooks/user';

function NavBar() {
  const user = useUser();

  /* const query = useQuery('user', async () => {
       try {
           return await fetchJson('/api/user')  
            } catch (error) {
           return undefined;   
            } 
    },{
        cacheTime: Infinity,
        staleTime: 30_000 //ms
    })
    const user =  query.data; */

const handleSignOut = async () => {
     await fetchJson('/api/logout'); 
       
    }

  return (
    <nav className="px-2 py-1 text-sm">
        <ul className="flex gap-2">
            <li className="text-lg font-extrabold">
                <Link href="/">Next Shop</Link>
            </li>
            <li role="separator" className="flex-1"></li>
           {user ? 
           <>
           <li className="pe-2">Hello, {user.name}</li>
           <li>
                <button onClick={handleSignOut} className="pe-2">Sign Out</button>
           </li>
           </> : <li>
                <Link href="/sign-in">Sign In</Link>
            </li>
           
           }
           
        </ul>
      
    </nav>
  )
}

export default NavBar
