"use client";

import type { FC } from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import axios from "axios";
import { toast } from "sonner";
import { Icons } from "@/components/Icons";

interface UpdateOrderStatusAbdullahProps {
  id: string;
}

const UpdateOrderStatus: FC<UpdateOrderStatusAbdullahProps> = ({ id }) => {
  const [isConfirmedLoading, setIsConfirmedLoading] = React.useState(false);
  const [isReturnedLoading, setIsReturnedLoading] = React.useState(false);

  const makeReturnedRequest = async () => {
    setIsReturnedLoading(true);
    try {
      await axios.post("/api/admin/orders/returned", {
        id,
      });
      toast("order updated");
    } catch (err) {
      toast("something went wrong");
      console.log(err);
    } finally {
      setIsReturnedLoading(false);
    }
  };

  const makeConfirmedRequest = async () => {
    setIsConfirmedLoading(true);
    try {
      await axios.post("/api/admin/orders/confirmed", {
        id,
      });
      toast("order updated");
    } catch (err) {
      toast("something went wrong");
      console.log(err);
    } finally {
      setIsConfirmedLoading(false);
    }
  };

  return (
    <Card className="my-4">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>

      <CardFooter className="w-full h-[60px] gap-x-4  px-4 flex items-center justify-start">
        <Button
          onClick={makeConfirmedRequest}
          disabled={isConfirmedLoading || isReturnedLoading}
        >
          {isConfirmedLoading && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Confirmed
        </Button>
        <Button
          onClick={makeReturnedRequest}
          disabled={isConfirmedLoading || isReturnedLoading}
          variant="destructive"
        >
          {isReturnedLoading && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Returned
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UpdateOrderStatus;
