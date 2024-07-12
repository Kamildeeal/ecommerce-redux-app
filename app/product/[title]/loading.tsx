import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-75 z-50">
      <ClipLoader color={"red"} size={150} />
    </div>
  );
}
