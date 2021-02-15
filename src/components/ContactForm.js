import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

export const ContactForm = ({ onSubmit }) => {
  function validateInput(value) {
    let error;
    if (!value) {
      error = "Le champ est obligatoire";
    }
    return error;
  }

  function validateEmail(value) {
    let error;
    if (!value) {
      return "Le champ est obligatoire";
    }
    if (!value.includes("@") || !value.includes(".")) {
      return "Votre email est incorrecte";
    }
    return error;
  }
  const Submit = (values) => {
    onSubmit(values);
  };
  return (
    <Formik
      initialValues={{
        lastname: "",
        firstname: "",
        email: "",
        object: "",
        message: "",
      }}
      onSubmit={(values, actions) => {
        Submit(values);
        actions.setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <Flex mb={2}>
            <Field name="lastname" validate={validateInput}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.lastname && form.touched.lastname}
                >
                  <FormLabel htmlFor="lastname">Nom*</FormLabel>
                  <Input {...field} id="lastname" placeholder="Votre nom" />
                  <FormErrorMessage>{form.errors.lastname}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Box w="20px"></Box>
            <Field name="firstname" validate={validateInput}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.firstname && form.touched.firstname}
                >
                  <FormLabel htmlFor="firstname">Prénom*</FormLabel>
                  <Input {...field} id="firstname" placeholder="Votre prénom" />
                  <FormErrorMessage>{form.errors.firstname}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Flex>
          <Box mb={2}>
            <Field name="email" validate={validateEmail}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel htmlFor="email">Email*</FormLabel>
                  <Input {...field} id="email" placeholder="Votre Email" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Box>
          <Box mb={2}>
            <Field name="object">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.object && form.touched.object}
                >
                  <FormLabel htmlFor="object">Objet</FormLabel>
                  <Input {...field} id="object" placeholder="" />
                </FormControl>
              )}
            </Field>
          </Box>
          <Field name="message">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.message && form.touched.message}
              >
                <FormLabel htmlFor="message">Message</FormLabel>
                <Input
                  size="lg"
                  h="80px"
                  {...field}
                  id="message"
                  placeholder="Votre message"
                />
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Envoyer
          </Button>
        </Form>
      )}
    </Formik>
  );
};
