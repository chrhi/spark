import { ErrorCard } from "@/components/error-card";

export default function ProductNotFound() {
  return (
    <ErrorCard
      title="Product not found"
      description="The product may have expired or you may have already updated your product"
      retryLink="/"
      retryLinkText="Go to Home"
    />
  );
}
