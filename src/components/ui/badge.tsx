import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
  {
    variants: {
      variant: {
        brand: "bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200",
        accent:
          "bg-accent-50 text-accent-700 ring-1 ring-inset ring-accent-200",
        neutral: "bg-ink-100 text-ink-700 ring-1 ring-inset ring-ink-200",
        glass:
          "bg-white/10 text-white ring-1 ring-inset ring-white/20 backdrop-blur",
      },
    },
    defaultVariants: { variant: "brand" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
