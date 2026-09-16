import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function Feedback() {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    return (
        <div className="feedback">
            <span>{likes}</span>

            <Button
                name="Like"
                onClick={() => setLikes(likes + 1)}
            />

            <Button
                name="Dislike"
                onClick={() => setDislikes(dislikes + 1)}
            />
            <span>{dislikes}</span>

            <Button name="Reset Results" 
                onClick={() => {
                    setLikes(0);
                    setDislikes(0);
                }}
            />
        </div>
    )
}

export default Feedback;
