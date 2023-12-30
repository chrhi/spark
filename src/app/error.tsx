"use client";

import { ErrorCard } from "@/components/error-card";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <ErrorCard
        reset={reset}
        title="Somethign went wrong "
        description="please try again if the issue continue contact the support "
        retryLink="/"
        retryLinkText="Go to Home"
      />
    </div>
  );
}
