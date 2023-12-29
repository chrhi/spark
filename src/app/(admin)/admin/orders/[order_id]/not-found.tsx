import { ErrorCard } from "@/components/error-card";

export default function ProductNotFound() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <ErrorCard
        title="Order not found"
        description="The order is not here may be something went wrong"
        retryLink="/"
        retryLinkText="Go to Home"
      />
    </div>
  );
}
