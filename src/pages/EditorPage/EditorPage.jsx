import "./EditorPage.scss";

import Handlebars from "handlebars/dist/cjs/handlebars";

const clTemplate = `
    <p>
    {{user_first_name}} {{user_last_name}}
    </p>
    <p>{{user_street_name}}</p>
    <p>{{user_city}}</p>
    <p>{{user_state}} {{user_postcode}}</p>
<br />
    <p>{{date}}</p>
<br />
    <p>
    {{first_name}} {{last_name}}
    </p>
    <p>{{position}}</p>
    <p>{{company}}</p>
    <p>{{street_name}}</p>
    <p>{{city}}</p>
    <p>{{state}} {{postcode}}</p>
<br />
    <p>Dear {{first_name}},</p>
<br />
    <p>{{icebreaker}}</p>
<br />
    <p>{{paragraph_one}}</p>
<br />
    <p>{{paragraph_two}}</p>
<br />
    <p>{{paragraph_three}}</p>
<br />
    <p>{{call_to_action}}</p>
<br />
    <p>Best regards,</p>
    <p>{{first_name}}</p>
`;

const template = Handlebars.compile(clTemplate);

export default function EditorPage() {
    const data = {
        user_first_name: "{{user_first_name}}",
        user_last_name: "{{user_last_name}}",
        user_street_name: "{{user_street_name}}",
        user_city: "{{user_city}}",
        user_state: "{{user_state}}",
        user_postcode: "{{user_postcode}}",
        date: "{{date}}",
        first_name: "{{first_name}}",
        last_name: "{{last_name}}",
        position: "{{position}}",
        company: "{{company}}",
        street_name: "{{street_name}}",
        city: "{{city}}",
        state: "{{state}}",
        postcode: "{{postcode}}",
        icebreaker: "{{icebreaker}}",
        paragraph_one: "{{paragraph_one}}",
        paragraph_two: "{{paragraph_two}}",
        paragraph_three: "{{paragraph_three}}",
        call_to_action: "{{call_to_action}}",
    };

    return (
        <div className="editor">
            <div dangerouslySetInnerHTML={{ __html: template(data) }} />
        </div>
    );
}
