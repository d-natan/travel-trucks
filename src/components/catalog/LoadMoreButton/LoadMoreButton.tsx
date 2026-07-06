"use client";

import Button from "@/components/ui/Button";

interface Props {
  onClick: () => void;
  isLoading: boolean;
}

export default function LoadMoreButton({ onClick, isLoading }: Props) {
  return (
    <Button onClick={onClick} disabled={isLoading}>
      {isLoading ? "Loading..." : "Load More"}
    </Button>
  );
}
