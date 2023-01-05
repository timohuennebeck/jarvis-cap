import "./AIGeneratorPage.scss";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function AIGeneratorPage() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send a request to the server with the prompt
        axios
            .post("http://localhost:8080/chat", { prompt })
            .then((res) => {
                // Update the response state with the server's response
                setResponse(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const textareaRef = useRef(null);

    useEffect(() => {
        const textarea = textareaRef.current;

        function handleKeydown(event) {
            if (event.shiftKey && event.keyCode === 13) {
                // Increase the size of the textarea
                textarea.style.height = textarea.scrollHeight + 20 + "px";
            }
        }

        textarea.addEventListener("keydown", handleKeydown);

        return () => {
            textarea.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    return (
        <div className="ai-generator">
            <div className="ai-generator__container">
                <p className="ai-generator__container-response">{response}</p>
                <form onSubmit={handleSubmit} className="ai-generator__container-form">
                    <textarea
                        ref={textareaRef}
                        className="ai-generator__container-form-input"
                        placeholder="Let's create some magic..."
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                    <div className="ai-generator__container-form-button">
                        <button className="ai-generator__container-form-button-indv">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
