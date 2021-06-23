import React, { useState } from "react";
import { Flex, Button, IconButton } from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { PostSnippetFragment, useVoteMutation } from "../generated/graphql";

interface UpdootSectionProps {
  points: PostSnippetFragment;
}

export const UpdootSection: React.FC<UpdootSectionProps> = ({ post }) => {
  const [loadingState, setLoadingState] = useState<
    "updoot-loading" | "downdoot-loading" | "not-loading"
  >("not-loading");
  const [, vote] = useVoteMutation();

  return (
    <Flex direction="column" justifyContent="center" alignItems="center" mr={4}>
      <IconButton
        name="chevron-up"
        icon={<ChevronUpIcon />}
        aria-label="Upvote"
        title="upvote"
        isLoading={loadingState === "updoot-loading"}
        colorScheme={post.voteStatus === 1 ? "green" : undefined}
        onClick={async () => {
          setLoadingState("updoot-loading");
          await vote({
            postId: post.id,
            value: 1,
          });
          setLoadingState("not-loading");
        }}
      />
      {post.points}
      <IconButton
        icon={<ChevronDownIcon />}
        aria-label="Downvote"
        name="chevron-down"
        title="downvote"
        isLoading={loadingState === "downdoot-loading"}
        colorScheme={post.voteStatus === -1 ? "red" : undefined}
        onClick={async () => {
          setLoadingState("downdoot-loading");
          await vote({
            postId: post.id,
            value: -1,
          });
          setLoadingState("not-loading");
        }}
      />
    </Flex>
  );
};
