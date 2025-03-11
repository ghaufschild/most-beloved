import { useEffect, useState, useMemo } from "react";
import styles from '../styles/Home.module.css'

export default function FindString() {
    const [randomText, setText] = useState(null)

    const textArray = useMemo(() => ["Have a kick butt day at work!", "You're so awesome!", "How in the world did you become such a cool person?", 
    "I'm so proud of you!", "Keep up the great work", "Your outfits slap", "Beep Boop", "I'm the luckiest guy in the world", ":^)", "I can't believe you're mine", 
    "Who's lucky? I'm lucky"], []);

    var randomNumber = Math.floor(Math.random()*textArray.length);

    useEffect(() => setText(textArray[randomNumber]), [textArray, randomNumber]);

    // return <p>{randomText}</p>;
    return <p>Holy shit you&apos;re 28, such a cougar</p>;

}