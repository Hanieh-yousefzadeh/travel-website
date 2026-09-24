import { useContext, useState } from "react";
import { Link } from "react-router";
import { CountryContext } from "../context/countrycontext";
import Hero from "../components/hero";
import { Search, X } from "lucide-react"

function Home() {
    const { countries } = useContext(CountryContext)
    const [search, setSearch] = useState("")
    const [result, setResult] = useState([])

    function handleSearch(e) {
        setSearch(e.target.value)
        const searchedCountries = countries.filter((country) => (
            country.name.toLowerCase().includes(search.toLowerCase())
        ))
        setResult(searchedCountries)
    }

    function deleteSearch() {
        setSearch("")
    }
    return (
        <div>
            <Hero />
            <section className="pt-18 flex flex-col px-10 bg-[#f1eee277]">
                <h3 className="text-3xl font-sans font-bold text-[#26141A] pb-19 text-center pt-5  px-1">Search By Countries Find Dream</h3>
                <div className=" border rounded-full px-4 w-150 border-[#26141A] flex self-center items-center justify-between">
                    <div className=" flex items-center">
                        <Search className="size-5.5 text-[#26141A] " />
                        <input type="text" value={search} onChange={handleSearch} placeholder="Where to go?" className=" py-4 pl-2 outline-none pr-35 placeholder:text-lg" />
                    </div>
                    {search && (<button onClick={deleteSearch} className="pl-3"><X /></button>)}
                </div>

                {search && (
                    <div>
                        <h3 className="text-xl font-bold text-[#26141ab3]">Search results</h3>
                        <div className="flex flex-col flex-wrap max-h-900 gap-y-4 gap-x-7 pb-10 pt-15 border-b border-b-[#26141A]">
                            {result.length > 0 ? (result.map((country) => (
                                <Link key={country.numericCode} to={`/country/${country.numericCode}`} className="flex items-center gap-2  hover:border hover:border-[#e2e0d7] py-3 pl-3 rounded-3xl pb-4 hover:bg-[#F1EEE2] ">
                                    {country.flags.png !== "" && (<img src={country.flags.png} className="w-8 h-5 rounded-sm" />)}
                                    <h1 className="text-base w-45 font-semibold ">{country.name}</h1>
                                </Link>
                            )
                            )
                            ) : (<p className="text-3xl font-bold pb-16 text-[#26141A]">{`Sorry, We Couden't find "${search}"`}</p>)}
                        </div>
                    </div>


                )}

                <div>
                    <h3 className="text-3xl font-sans font-bold text-[#26141A] pb-12 pt-30 px-1">Popular Destinations</h3>
                    <div className="grid grid-cols-2 gap-x-7 h-80">
                        <div className="bg-[url(/assets/palm-tree-street-los-angeles-pc-ryan-herron-getty.webp)] rounded-xl flex  bg-cover bg-center pb-3 pl-3"><p className="text-3xl font-sans font-bold text-[#FFFBEB] backdrop-blur-xs px-4 pt-2 pb-3 rounded-xl self-end">California</p></div>
                        <div className="bg-[url(/assets/images.jpg)] rounded-xl flex bg-cover bg-center  pb-3 pl-3"><p className="text-3xl font-sans font-bold text-amber-50 backdrop-blur-xs px-4 pt-2 pb-3 rounded-xl self-end">New York</p></div>
                    </div>
                    <div className="grid grid-cols-3 gap-x-7 h-80 mt-7">
                        <div className="bg-[url(/assets/8qSJvU2.jpg)] rounded-xl flex bg-cover bg-center  pb-3 pl-3 "><p className="text-3xl font-sans font-bold text-[#FFFBEB] backdrop-blur-xs px-4 pt-2 pb-3 rounded-xl self-end">Paris</p></div>
                        <div className="bg-[url(/assets/717538-1920x1080-desktop-1080p-tokyo-japan-background-photo.jpg)] rounded-xl flex bg-cover bg-center  pb-3 pl-3"><p className="text-3xl font-sans font-bold text-[#FFFBEB] backdrop-blur-xs px-4 pt-2 pb-3 rounded-xl self-end">Tokyo</p></div>
                        <div className="bg-[url(/assets/ima.jpg)] rounded-xl flex bg-cover bg-center  pb-3 pl-3"><p className="text-3xl font-sans font-bold text-[#FFFBEB] backdrop-blur-sm px-4 pt-2 pb-3 rounded-xl self-end">Singapore</p></div>
                    </div>
                </div>



                <div className="flex flex-col">
                    <h2 className="text-3xl font-sans font-bold text-[#26141A] text-center mb-15 mt-25 self-center w-80 border-b border-b-[#26141a8d] pb-5 ">Destinations</h2>
                    <div className="grid grid-cols-6 gap-y-7 gap-x-8 pb-5 max-h-100 overflow-x-auto scroll-smooth scrollbar-thumb-[#26141ac4] scrollbar-track-[#FFFBEB] mb-10  ">
                        {countries.map((country) => (
                            <Link key={country.numericCode} to={`/country/${country.numericCode}`} className="flex items-center gap-2 hover:border hover:border-[#e2e0d7] py-3 pl-3 pr-2 rounded-3xl  hover:bg-[#F1EEE2] ">
                                {country.flags.png !== "" && (<img src={country.flags.png} className="w-17 h-11 rounded-sm " />)}
                                <h1 className="text-sm w-50 text-[#140c0ffa] font-medium ">{country.name}</h1>
                            </Link>
                        )
                        )}
                    </div>
                </div>
            </section>
            <div className="flex flex-col gap-4 px-40 bg-[#F1EEE2] pb-15">
                <h3 className="text-3xl font-sans font-bold text-[#26141A] text-center pb-20 pt-18 ">Frequently Asked Questions</h3>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold text-[#26141A]">How do I create an account?</div>
                    <div className="collapse-content text-sm">Click the "Log in" button in the top right corner and follow the registration process.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold text-[#26141A]">I forgot my password. What should I do?</div>
                    <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold text-[#26141A]">How do I update my profile information?</div>
                    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold text-[#26141A]">Do you offer discount for group booking?</div> 
                    <div className="collapse-content text-sm">Yes, We have discount for it.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold text-[#26141A]">can I cancel or reschedule my trip?</div>
                    <div className="collapse-content text-sm">Go to "My Account" settings and select "My Trip" to make changes.</div>
                </div>
            </div>

        </div>
    )
} export default Home;