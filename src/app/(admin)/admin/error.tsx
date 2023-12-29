"use client";

import { ErrorCard } from "@/components/error-card";

export default function ProductNotFound() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <ErrorCard
        title="Somethign went wrong "
        description="please try again if the issue continue contact the support "
        retryLink="/"
        retryLinkText="Go to Home"
      />
    </div>
  );
}
