import "./DashboardFunnels.scss";

export default function DashboardFunnels({ value, data }) {
    return (
        <div className="dashboard__stats-contacts-indv-name">
            <div>
                {data.status !== undefined ? (
                    <p className="dashboard__stats-contacts-indv-name-length">{data.status}</p>
                ) : (
                    <p className="dashboard__stats-contacts-indv-name-length">{data.name}</p>
                )}
            </div>
            <p>{value.filter((person) => person.status === data.status).length}</p>
        </div>
    );
}
