const Header=()=>{
   return(
       <header className="bg-red-800 text-white p-5">
           <div className="container-mx-auto flex justify-between items-center">
               <h1 className="text-3xl font-bold ">My Landing page Assignemts</h1>
               <nav>
                   <ul className="flex space-x-8">
                       <li>
                           <a href="" className="hover:text-pink-200" >Home</a>
                       </li>
                       <li>
                           <a href="" className="hover:text-pink-200">About</a>
                       </li>
                       <li>
                           <a href="" className="hover:text-pink-200">Contact</a>
                       </li>
                   </ul>
               </nav>
           </div>
       </header>
   );
};
export default Header;