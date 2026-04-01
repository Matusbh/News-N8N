import { Hourglass } from "ldrs/react";
import "ldrs/react/Hourglass.css";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <Hourglass
        size="40"
        bgOpacity="0.1"
        speed="1.75"
        color="var(--primary)"
      />
    </div>
  );
}
