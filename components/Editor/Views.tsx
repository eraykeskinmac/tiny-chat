import { cn } from "@/lib/cn";

export default function Views({ views }: { views: number }) {
  return (
    <div className={cn("absolute left-6 top-6 text-xs text-greylish/80")}>
      {views.toLocaleString() ?? "?"} views
    </div>
  );
}
