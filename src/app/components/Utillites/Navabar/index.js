import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-indigo-500">
            <div className="flex md:flex-row flex-col justify-between p-4">
                <Link href="/">CUY ANIMELIST</Link>
                <input placeholder="cari anime.." className=""/>
            </div>
        </header>
    )
}

export default Navbar