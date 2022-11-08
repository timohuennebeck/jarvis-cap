import "./EditorPage.scss";

export default function EditorPage() {
    return (
        <div className="editor-ctr">
            <div className="editor-ctr__content" id="print-pdf">
                <div className="editor-ctr__content-user">
                    <span className="editor-ctr__content-user-name">
                        {"{{user_first_name}} {{user_last_name}}"}
                    </span>
                    <p className="editor-ctr__content-user-position">{"{{user_position}}"}</p>
                    <div className="editor-ctr__content-user-line"></div>
                    <p className="editor-ctr__content-user-street-name">{"{{user_street_name}}"}</p>
                    <p className="editor-ctr__content-user-city">{"{{user_city}}"}</p>
                    <p className="editor-ctr__content-user-state-postcode-">
                        {"{{user_state}} {{user_postcode}}"}
                    </p>
                </div>
                <div className="editor-ctr__content-lead">
                    <div className="editor-ctr__content-lead-line"></div>
                    <div>
                        <p>{new Date().toLocaleDateString()}</p>
                    </div>
                    <div>
                        <p className="editor-ctr__content-lead-name">
                            {"{{first_name}} {{last_name}}"}
                        </p>
                        <p>{"{{position}}"}</p>
                        <p>{"{{company}}"}</p>
                        <p>{"{{street_name}}"}</p>
                        <p>{"{{city}}"}</p>
                        <p>{"{{state}} {{postcode}}"}</p>
                    </div>
                    <div>
                        <p>Dear {"{{first_name}}"},</p>
                    </div>
                    <div>
                        <p>{"{{icebreaker}}"}</p>
                    </div>
                    <div>
                        <p>{"{{paragraph_one}}"}</p>
                    </div>
                    <div>
                        <p>{"{{paragraph_two}}"}</p>
                    </div>
                    <div>
                        <p>{"{{paragraph_three}}"}</p>
                    </div>
                    <div>
                        <p>{"{{call_to_action}}"}</p>
                    </div>
                    <div>
                        <p>Best regards,</p>
                        <p className="review-ctr__content-lead-user-name">
                            {"{{user_first_name}} {{user_last_name}}"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
