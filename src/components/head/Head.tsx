export const Head = () => {
  return (
    <div className="row mb-2">
      <div className="col-md-3">
        <button className="btn btn-default d-none">Previous Week</button>
        <button className="btn btn-default d-none">Next Week</button>
      </div>
      <div className="col-md-6 text-center g-2">
        <h4 className="mb-3">19 Sep to 25 Sep 2022</h4>
      </div>
      <div className="col-md-3">
        <div className="row g-1 justify-content-end">
          <div className="col-auto">
            <button className="btn btn-default">Previous Week</button>
            <button className="btn btn-default disabled">Next Week</button>
          </div>
        </div>
      </div>
    </div>
  );
};
