import * as React from "react";

import { getIcon } from "@/lib/icons";

/**
 * Renders an icon resolved by name from the registry.
 * Using a module-level component (with createElement) avoids the
 * "component created during render" lint rule that fires when assigning
 * a resolved icon to a capitalized local variable inside a render body.
 */
export function DynamicIcon({
  name,
  className,
}: {
  name?: string;
  className?: string;
}) {
  return React.createElement(getIcon(name), { className });
}
