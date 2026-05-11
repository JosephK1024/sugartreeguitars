"use client";

import { Keystatic } from "@keystatic/core/ui";
import type { Config } from "@keystatic/core";
import keystatiConfig from "@/keystatic.config";

export default function KeystaticPage() {
  return <Keystatic config={keystatiConfig as Config} />;
}
