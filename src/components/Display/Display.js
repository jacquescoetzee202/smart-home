const Display = ({ targetTemp, currentTemp }) => (
    <div className="container mt-3">
        <h3>target</h3>
        <h1>{ targetTemp }</h1>
        <h3>current</h3>
        <h1>{ currentTemp }</h1>
    </div>
);

export default Display;