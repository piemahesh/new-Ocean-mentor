export const FilterSort = () => {
  return (
    <main className="filtersort my-3">
      <div className="d-flex align-items-center justify-content-between gap-3 border-bottom px-3 py-2">
        <label className="fs-5" htmlFor="btn1">
          Newest First
        </label>
        <input
          className="radio"
          type="radio"
          id="btn1"
          name="fav_language"
          value="HTML"
        />
      </div>
      <div className="d-flex justify-content-between align-items-center gap-3 px-3 py-2">
        <label className="fs-5" htmlFor="btn2">
          Oldest First
        </label>
        <input
          className="radio"
          type="radio"
          id="btn2"
          name="fav_language"
          value="HTML"
        />
      </div>
    </main>
  );
};
