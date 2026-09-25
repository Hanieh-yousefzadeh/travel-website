import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/authcontect";
import { UserRound, Heart, TextAlignJustify, X,MapPinned } from "lucide-react"

function Header() {

    const navigate = useNavigate();

    const { user, setUser } = useContext(AuthContext)
    function handelLog() {
        setUser(null)
        localStorage.removeItem("user")
        navigate("/login")
    }

    const [isOpen, setIsOpen] = useState(false);
    function handelClick() {
        return setIsOpen(!isOpen)
    }
    return (
        <nav className="relative">
            <div className=" bg-[#EBE6D4]  sm:h-17 h-11 w-full sm:px-10 px-5 flex items-center justify-between text-[#26141A]">
                <Link to="/" className=" xl:text-3xl text-xl font-semibold flex items-baseline"><MapPinned className="size-5"/>Tripy</Link>
                <button onClick={handelClick} className="sm:hidden ">
                    {isOpen ? (<X className="p-0.5 w-7 h-6 sm:w-9 sm:h-8 rounded-sm text-[#26141A]" />)
                        :
                        (<TextAlignJustify className="p-0.5 w-7.5 h-7 sm:w-9 sm:h-8 rounded-sm text-[#26141A]" strokeWidth={3} />)
                    }
                </button>
                <div className="sm:flex lg:gap-10 gap-5 text-base font-medium items-center hidden">
                    <Link to="/favorite" className=" flex items-center gap-1 hover:rounded-full hover:bg-amber-50 px-2 py-2"><Heart className="lg:size-7  p-1 rounded-full border-2  hover:fill-[#26141A]" /> favorite</Link>
                    {!user && (<Link to="/login" className="rounded-full bg-amber-50 pt-2 pb-3 px-7 hover:bg-[#26141A] hover:text-amber-50"> Login</Link>)}
                    {user && (
                        <div className="flex lg:gap-10 gap-5">
                            <Link to="/profile" className="flex gap-1 items-center hover:rounded-full hover:bg-amber-50 px-2 py-2"><UserRound className="lg:size-7  p-1 rounded-full border-2   hover:fill-[#26141A]" strokeWidth={2} />My Account</Link>
                            <button onClick={handelLog} className="rounded-full bg-amber-50 sm:pt-1 sm:pb-2 sm:px-5 hover:bg-[#26141A] hover:text-amber-50">Logout</button>
                        </div>)}
                </div>
            </div >
            {isOpen && (
                <div className="felx flex-col justify-self-end  bg-[#EBE6D4] absolute top-13 right-5 px-4 py-3 rounded-sm">
                    <Link to="/favorite" className=" flex  pb-2 justify-end">favorite</Link>
                    {!user && (<Link to="/login" className="rounded-full  pb-3 self-end"> Login</Link>)}
                    {user && (
                        <div className="flex flex-col items-end">
                            <Link to="/profile" className="flex pb-1 items-center hover:rounded-full ">Profile</Link>
                            <button onClick={handelLog} className="rounded-full sm:pt-1 sm:pb-2 sm:px-5">Logout</button>
                        </div>)}
                </div>
            )
            }

        </nav>
    )
}
export default Header;