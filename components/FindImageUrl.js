import { useEffect, useState, useMemo } from "react";
import Image from 'next/image'

export default function FindImageUrl() {
    const [randomImage, setImage] = useState(null)

    const textArray = useMemo(() => ["1", "2", "3", "4", "5", "6"], []);

    var randomNumber = Math.floor(Math.random()*textArray.length);

    useEffect(() => setImage(textArray[randomNumber]), [textArray, randomNumber]);
    
    // var imageUrl = "/images/Bday.jpg"
    var imageUrl = "/images/Bday" + randomImage + ".jpg";
    return <Image src={imageUrl} alt="A wonderful time :)" layout={"fill"} objectFit={"cover"}/>

}