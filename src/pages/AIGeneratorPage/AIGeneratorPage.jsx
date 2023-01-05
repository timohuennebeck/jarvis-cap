import "./AIGeneratorPage.scss";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function AIGeneratorPage() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Send a request to the server with the prompt
        axios
            .post("http://localhost:8080/chat", { prompt })
            .then((res) => {
                // Update the response state with the server's response
                setResponse(res.data);
                setLoading(false);
                textareaRef.current.value = "";
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
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
            <div className="ai-generator__header">
                <h2>Your AI Generator</h2>
                <p>
                    Are you struggling to write the perfect cover letter? Let our AI tool take the
                    stress out of the process. With just a few simple prompts, our tool will help
                    you overcome writer's block and create a professional and personalised cover
                    letter in no time.
                </p>
            </div>
            <div className="ai-generator__response">
                {loading ? (
                    <p className="ai-generator__response-indv-fade">
                        Hold on for a second. We are generating a response...
                    </p>
                ) : (
                    <p className="ai-generator__response-indv">
                        {response ? (
                            response
                        ) : (
                            <p className="ai-generator__response-indv-fade">
                                Your content will go here...
                            </p>
                        )}
                    </p>
                )}
            </div>
            <form onSubmit={handleSubmit} className="ai-generator__form">
                <textarea
                    ref={textareaRef}
                    className="ai-generator__form-input"
                    placeholder="Let's create some magic..."
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <div className="ai-generator__form-button">
                    <button className="ai-generator__form-button-indv">Submit</button>
                </div>
            </form>
        </div>
    );
}
