import { ErrorCard } from "@/components/error-card";

export default function ProductNotFound() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <ErrorCard
        title="Not Found"
        description="The product may have expired or you may have already updated your product"
        retryLink="/"
        retryLinkText="Go to Home"
      />
    </div>
  );
}
