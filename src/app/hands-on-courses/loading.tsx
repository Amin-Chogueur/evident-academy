import Spinner from "@/components/common/Spinner";

export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Spinner />
    </div>
  );
}
