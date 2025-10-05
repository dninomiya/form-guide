"use client";

import { Button } from "@/components/ui/button";
import { AppConfig } from "@/lib/config";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CopyPromptButton() {
  const [showCheck, setShowCheck] = useState(false);

  return (
    <Button
      className="gap-2"
      variant="outline"
      onClick={() => {
        navigator.clipboard.writeText(AppConfig.jaEnterKey.prompt);
        setShowCheck(true);
        setTimeout(() => {
          setShowCheck(false);
        }, 2000);
      }}
    >
      Copy Prompt
      {showCheck ? <Check size={16} /> : <Copy size={16} />}
    </Button>
  );
}
