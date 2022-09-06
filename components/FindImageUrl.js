import { useEffect, useState, useMemo } from "react";
import Image from 'next/image'

export default function FindImageUrl() {
    const [randomImage, setImage] = useState(null)

    const textArray = useMemo(() => ["1", "2", "3", "4", "5", "6", "7", "8"], []);

    var randomNumber = Math.floor(Math.random()*textArray.length);

    useEffect(() => setImage(textArray[randomNumber]), [textArray, randomNumber]);

    var imageUrl = "/images/GA" + randomImage + ".jpg";

    return <Image src={imageUrl} alt="A wonderful time :)" layout={"fill"} objectFit={"cover"}/>

}