import React from 'react';
import styled from 'styled-components';
import { Field, FieldProps, Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { useAddComment, LIST_COMMENTS_BY_CAMPING } from '../hooks';

const Container = styled.section`
  transition: max-height 0.3s ease-in-out;
  overflow: hidden;
  height: auto;

  ${(props: {isExpanded: boolean}) => {
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

const ErrorField = styled.div`
  width: 90%;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #f7b5b2;
  color: #f72018;
  line-height: 30px;
  padding-left: 10px;
`;

const CommentValidationSchema = Yup.object().shape({
  title: Yup.string()
    .max(50, 'The title is too long')
    .required('The title is required'),
  description: Yup.string()
    .required('The description is required'),
  author: Yup.string()
    .max(25, 'Your author username is too long')
    .required('The author username is required'),
})

type CommentFormProps = {
  isExpanded: boolean;
  campingId: string | null;
}

type CommentFormValues = {
  title: string;
  description: string;
  author: string;
}

const CommentForm = ({ isExpanded, campingId }: CommentFormProps) => {
  const initialValues: CommentFormValues = {title: '', description: '', author: ''};
  const { addComment } = useAddComment();

  return (
    <Container aria-expanded={isExpanded} isExpanded={isExpanded}>
      <Formik
        initialValues={initialValues}
        validationSchema={CommentValidationSchema}
        onSubmit={async (values: CommentFormValues) => {
          await addComment({
            variables: { campingId, commentInput: values },
            refetchQueries: [{ query: LIST_COMMENTS_BY_CAMPING, variables: { campingId } }]
          });
        }}
      >
        {({
          handleSubmit,
          isSubmitting,
          isValid
        }: FormikProps<any>) => {
          return (
            <Form aria-label="CommentForm" name="comment" method="post" onSubmit={handleSubmit}>
              <Field name="title">
                {({ field, meta }: FieldProps) => (
                  <>
                    <Input
                      type="text"
                      placeholder="Title"
                      aria-label="Title"
                      {...field}
                    />
                    {meta.touched && meta.error && (
                      <ErrorField>{meta.error}</ErrorField>
                    )}
                  </>
                )}
              </Field>
              <Field name="description">
                {({ field, meta }: FieldProps) => (
                  <>
                    <Textarea
                      placeholder="Description"
                      aria-label="Description"
                      {...field}
                    />
                    {meta.touched && meta.error && (
                      <ErrorField>{meta.error}</ErrorField>
                    )}
                  </>
                )}
              </Field>
              <Field name="author">
                {({ field, meta }: FieldProps) => (
                  <>
                    <Input
                      type="text"
                      placeholder="Author"
                      aria-label="Author"
                      {...field}
                    />
                    {meta.touched && meta.error && (
                      <ErrorField>{meta.error}</ErrorField>
                    )}
                  </>
                )}
              </Field>
              <Button aria-label='Submit Comment' type="submit" disabled={isSubmitting || !isValid}>
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
