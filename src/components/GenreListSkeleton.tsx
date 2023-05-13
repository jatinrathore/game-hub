import { List, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GenreListSkeleton = () => {
  return (
    <List>
      <SkeletonCircle />
      <SkeletonText />
    </List>
  );
};

export default GenreListSkeleton;
