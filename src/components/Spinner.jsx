"use cllient";

const Spinner = () => {
  return (
    <div className="flex flex-col gap-3 items-center mt-10">
      <span className="loader"></span>
      <p>Loading ....</p>
    </div>
  );
};

export default Spinner;
