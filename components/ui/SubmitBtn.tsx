import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import React from "react";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="lg"
      className="group p-2 flex gap-2  transition-all rounded-full focus:scale-110 hover:-scale-y-140 active:scale-105 disabled:scale-100"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-border"></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className="opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </Button>
  );
}
