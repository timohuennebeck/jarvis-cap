import "./DashboardFunnels.scss";

export default function DashboardFunnels({ value, data }) {
    return (
        <div className="dashboard__stats-contacts-indv-name">
            <p>{data.status}</p>
            <p>{value.filter((person) => person.status === data.status).length}</p>
        </div>
    );
}
