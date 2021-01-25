import React from 'react';
import styled from 'styled-components';
import { Field, FieldProps, Form, Formik } from 'formik';
import { useAddComment, LIST_COMMENTS_BY_CAMPING } from '../../hooks';

const Container = styled.section`
  transition: max-height 0.3s ease-in-out;
  overflow: hidden;
  height: auto;

  ${(props: CommentFormProps) => {
    if(props.isExpanded) {
      return `
        max-height: 100%;
      `
    } else {
      return `
        max-height: 0px;
      `
    }
  }}
`;

const Input = styled.input`
  width: 90%;
  height: 30px;
  margin: 10px;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 90%;
  height: 100px;
  margin: 0 10px;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 40%;
  margin-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
  display: block;
  height: 40px;
  background-color: #2f7510;
  border: 1px solid lightgrey;
  border-radius: 10px;
  color: white;
  font-size: 14px;

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: pointer;
    background-color: lightgrey;
    color: white;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`;

type CommentFormProps = {
  isExpanded: boolean;
  campingId: string;
}

type CommentFormValue = {
  title: string;
  description: string;
  author: string;
}

function CommentForm({ isExpanded, campingId }: CommentFormProps) {
  const initialValues: CommentFormValue = {title: '', description: '', author: ''};
  const { addComment } = useAddComment();

  return (
    <Container aria-label="CommentForm" aria-expanded={isExpanded} isExpanded={isExpanded}>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          await addComment({
            variables: { campingId, commentInput: values },
            refetchQueries: [{ query: LIST_COMMENTS_BY_CAMPING, variables: { campingId } }]
          });
        }}
      >
        {({
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          isValid
        }) => {
          return (
            <Form name="comment" method="post" onSubmit={handleSubmit}>
              <Field name="title">
                {({ field }: FieldProps) => (
                  <Input
                    type="text"
                    name="title"
                    placeholder="Title"
                    {...field}
                  />
                )}
              </Field>
              <Field name="description">
                {({ field }: FieldProps) => (
                  <Textarea
                    name="description"
                    placeholder="Description"
                    {...field}
                  />
                )}
              </Field>
              <Field name="author">
                {({ field }: FieldProps) => (
                  <Input
                    type="text"
                    name="author"
                    placeholder="Author"
                    {...field}
                  />
                )}
              </Field>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? `Posting...` : `Post it`}
              </Button>
            </Form>
          )
        }}
      </Formik>
    </Container>
  );

}

export { CommentForm }
