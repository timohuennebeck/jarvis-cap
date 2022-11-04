import Handlebars from "handlebars/dist/cjs/handlebars";

const clTemplate = `
    <p>Timo Huennebeck
    <p>{{date}}</p>
<br />
    <p>
    {{first_name}} {{last_name}}
    </p>
    <p>{{business_name}}</p>
    <p>{{street_name}}</p>
    <p>{{postcode}}</p>
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
    <p>Timo</p>
`;

const template = Handlebars.compile(clTemplate);

export default function EditorPage() {
    const data = {
        date: "{{date}}",
        first_name: "{{first_name}}",
        last_name: "{{last_name}}",
        business_name: "{{business_name}}",
        street_name: "{{street_name}}",
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
