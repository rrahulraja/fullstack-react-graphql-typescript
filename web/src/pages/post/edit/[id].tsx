import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { createUrqlClient } from "../../../utils/createUrqlClient";
import {
  usePostQuery,
  useUpdatePostMutation,
} from "../../../generated/graphql";
import { Layout } from "../../../components/Layout";
import { InputField } from "../../../components/InputField";
import { Form, Formik } from "formik";
import { Heading, Box, Button } from "@chakra-ui/react";
import { useGetPostFromUrl } from "../../../utils/useGetPostFromUrl";
import { useGetIntId } from "../../../utils/useGetIntId";

const EditPost = ({}) => {
  const router = useRouter();
  const intId = useGetIntId();
  const [{ data, fetching }] = usePostQuery({
    pause: intId === -1,
    variables: {
      id: intId,
    },
  });
  const [, updatePost] = useUpdatePostMutation();

  if (fetching) {
    return <Layout>loading...</Layout>;
  }

  if (!data?.post) {
    return (
      <Layout>
        <Box>Could not find post</Box>
      </Layout>
    );
  }

  return (
    <Layout variant="small">
      <Formik
        initialValues={{ title: data.post.title, text: data.post.text }}
        onSubmit={async (values) => {
          await updatePost({ id: intId, ...values });
          router.back();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="title" placeholder="title" label="Title" />
            <Box mt={4}>
              <InputField
                textarea
                name="text"
                placeholder="text..."
                label="Body"
              />
            </Box>

            <Button
              mt={4}
              type="submit"
              colorScheme="teal"
              isLoading={isSubmitting}
            >
              Update Post
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(EditPost);
