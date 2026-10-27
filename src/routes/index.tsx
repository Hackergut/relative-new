import { createFileRoute } from "@tanstack/react-router";
import { RelativeApp } from "@/components/reverse-app";

export const Route = createFileRoute("/")({
  component: RelativeApp,
});
