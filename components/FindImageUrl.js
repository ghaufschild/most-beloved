import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

export default function FindImageUrl() {
    const [randomImage, setImage] = useState(null);

    const textArray = ["1", "2", "3", "4", "5", "6"];

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * textArray.length);
        setImage(textArray[randomNumber]);
    }, []);

    if (randomImage === null) return null;

    const imageUrl = `/images/Bday${randomImage}.jpg`;

    return <Image src={imageUrl} alt="A wonderful time :)" fill style={{ objectFit: "cover" }} />;
}
