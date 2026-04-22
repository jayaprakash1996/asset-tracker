function DashboardPage() {
  return (
    <div>
      <h2 className="mb-4">Welcome Admin 👋</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Total Assets</h5>
            <h2>120</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Assigned Assets</h5>
            <h2>85</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Available Assets</h5>
            <h2>35</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;