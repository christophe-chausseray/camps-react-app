import React from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';

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
`;

type CommentFormProps = {
  isExpanded: boolean;
}

type CommentFormValue = {
  title: string;
  description: string;
  author: string;
}

function CommentForm({ isExpanded }: CommentFormProps) {
  const initialValues: CommentFormValue = {title: '', description: '', author: ''};

  return (
    <Container aria-label="CommentForm" aria-expanded={isExpanded} isExpanded={isExpanded}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log(values, actions);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          isValidating,
          isValid
        }) => {
          return (
            <Form name="comment">
              <Input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
              />
              <Textarea
                id="description"
                name="description"
                placeholder="Description"
              />
              <Input
                type="text"
                id="author"
                name="author"
                placeholder="Author"
              />
              <Button type="submit">Send</Button>
            </Form>
          )
        }}
      </Formik>
    </Container>

  );

}

export { CommentForm }
