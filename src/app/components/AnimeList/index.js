import Image from 'next/image'
import Link from 'next/link'


const AnimeList = ({title,images, id}) => {
    return (
        <Link href={`/${id}`} className="cursor-pointer">
                <Image src={images} alt="..." 
                width={600} 
                height={400}/>    
             <h3 className="font-bold md:text-xl text-md text p-2">{title}</h3>
        </Link>
    )
}

export default AnimeList