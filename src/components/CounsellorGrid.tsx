import CounsellorCard from "./CounsellorCard";

const CounsellorGrid = ({ counselors }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {counselors.length > 0 ? (
        counselors.map((counsellor) => (
          <CounsellorCard
            key={counsellor.id}
            counsellor={counsellor}
          />
        ))
      ) : (
        <p className="col-span-1 md:col-span-2 lg:col-span-3 text-center text-gray-500 text-lg">
          No counselors found. Try a different search.
        </p>
      )}
    </div>
  );
};

export default CounsellorGrid;
