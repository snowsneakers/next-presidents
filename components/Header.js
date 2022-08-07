import Link from "next/link";

function Header() {
     return (
          <header className="w-full flex items-center justify-between p-2 font-medium">
               <Link href="/">
                    <h1 className="cursor-pointer">U.S. Presidents</h1>
               </Link>
               <ul className="flex items-center justify-evenly gap-2">
                    <Link href="/">
                         <li className="cursor-pointer">Home</li>
                    </Link>
                    <Link href="/presidents">
                         <li className="cursor-pointer">Presidents</li>
                    </Link>
                    <Link href="/quiz">
                         <li className="cursor-pointer">Quiz</li>
                    </Link>
               </ul>
          </header>
     );
}

export default Header;
