"use client";

import { Button } from "@/components/ui/button";
import { AppConfig } from "@/lib/config";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function MarkdownCopyButton() {
  const [showCheck, setShowCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCopy = async () => {
    if (showCheck || isLoading) return;

    setIsLoading(true);

    try {
      // llms.txtの内容を取得
      const response = await fetch(`${AppConfig.basePath}/llms.txt`);
      if (!response.ok) {
        throw new Error("Failed to fetch markdown content");
      }

      const markdownContent = await response.text();

      // クリップボードにコピー
      await navigator.clipboard.writeText(markdownContent);

      setShowCheck(true);
      setTimeout(() => {
        setShowCheck(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy markdown:", error);
      // フォールバック: 古いcopy-to-clipboardライブラリを使用
      const copy = (await import("copy-to-clipboard")).default;
      const response = await fetch(`${AppConfig.basePath}/llms.txt`);
      const markdownContent = await response.text();
      copy(markdownContent);
      setShowCheck(true);
      setTimeout(() => {
        setShowCheck(false);
      }, 2000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant="outline"
      size="sm"
      disabled={isLoading}
      className="mt-2"
    >
      {isLoading ? (
        <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin mr-2" />
      ) : showCheck ? (
        <Check size={16} className="mr-2" />
      ) : (
        <Copy size={16} className="mr-2" />
      )}
      {isLoading
        ? "読み込み中..."
        : showCheck
        ? "コピーしました！"
        : "マークダウンでコピー"}
    </Button>
  );
}
