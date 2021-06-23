import { usePostQuery } from "../generated/graphql";
import { useRouter } from "next/router";

export const useGetPostFromUrl = () => {
  const router = useRouter();
  const intId =
    typeof router.query.id === "string" ? parseInt(router.query.id) : -1;
  return usePostQuery({
    pause: intId === -1,
    variables: {
      id: intId,
    },
  });
};
