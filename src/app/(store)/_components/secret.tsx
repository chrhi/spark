"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { useIsMobile } from "@/hooks/use-is-mobile";
import { AdminAccessForm } from "@/components/forms/admin-access-form";

import Link from "next/link";

export default function Secret() {
  const [open, setOpen] = React.useState(false);

  const isMobil = useIsMobile();

  if (!isMobil) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" className="text-white">
            site woner ? log in
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Admin dashboard</DialogTitle>
            <DialogDescription>
              Get Access to your admin dashboard so you can edit upload new
              products into the store.
            </DialogDescription>
          </DialogHeader>
          <AdminAccessForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" className="text-white">
          site woner ? log in
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Admin dashboard</DrawerTitle>
          <DrawerDescription>
            Get Access to your admin dashboard so you can edit upload new
            products into the store.
          </DrawerDescription>
        </DrawerHeader>
        <AdminAccessForm />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
