import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { UserContext } from "./UserContext";
import {
  Container,
  Row,
  Col,
  Card,
  Form as BootstrapForm,
  Button,
} from "react-bootstrap";
import "./RegisterForm.css";

const RegisterForm = () => {
  const { users, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Nieprawidłowy adres e-mail")
      .required("Pole jest wymagane"),
    password: Yup.string()
      .min(6, "Hasło musi mieć co najmniej 6 znaków")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "Hasło musi zawierać co najmniej jeden znak specjalny")
      .required("Pole jest wymagane"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Hasła muszą być identyczne")
      .required("Pole jest wymagane"),
    imieINazwisko: Yup.string().required("Pole jest wymagane"),
    miasto: Yup.string().required("Pole jest wymagane"),
    kategoria: Yup.string().required("Pole jest wymagane"),
  });

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    imieINazwisko: "",
    miasto: "",
    kategoria: "",
  };

  const handleRegister = (values, { setSubmitting, setFieldError }) => {
    
    const userExists = users.some((u) => u.email === values.email);
    if (userExists) {
      setFieldError(
        "email",
        "Użytkownik o podanym adresie e-mail już istnieje"
      );
      setSubmitting(false);
      return;
    }

    
    const newUser = {
      id: users.length + 1, 
      email: values.email,
      haslo: values.password,
      imieINazwisko: values.imieINazwisko,
      miasto: values.miasto,
      kategoria: values.kategoria,
    };

    setCurrentUser(newUser);
    navigate("/ustawienia-konta");
  };

  return (
    <Container fluid className="pageBackground">
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Card.Title>Formularz <span style={{ color: "#f8b296" }}>rejestracyjny</span></Card.Title>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleRegister}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <BootstrapForm.Group className="formGroup">
                      <BootstrapForm.Label>Imię i Nazwisko</BootstrapForm.Label>
                      <Field
                        type="text"
                        name="imieINazwisko"
                        as={BootstrapForm.Control}
                        placeholder="Imię i Nazwisko"
                      />
                      <ErrorMessage
                        name="imieINazwisko"
                        component="div"
                        className="alert alert-danger"
                      />
                    </BootstrapForm.Group>
                    <BootstrapForm.Group className="formGroup">
                      <BootstrapForm.Label>E-mail</BootstrapForm.Label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        as={BootstrapForm.Control}
                        placeholder="E-mail"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="alert alert-danger"
                      />
                    </BootstrapForm.Group>
                    <BootstrapForm.Group className="formGroup">
                      <BootstrapForm.Label>Hasło</BootstrapForm.Label>
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        as={BootstrapForm.Control}
                        placeholder="Hasło"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="alert alert-danger"
                      />
                    </BootstrapForm.Group>
                    <BootstrapForm.Group className="formGroup">
                      <BootstrapForm.Label>Potwierdź hasło</BootstrapForm.Label>
                      <Field
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        as={BootstrapForm.Control}
                        placeholder="Potwierdź hasło"
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="alert alert-danger"
                      />
                    </BootstrapForm.Group>
                    <BootstrapForm.Group className="formGroup">
                      <BootstrapForm.Label>Miasto</BootstrapForm.Label>
                      <Field as="select" name="miasto" className="formLoginControl">
                        <option value="">Wybierz miasto</option>
                        <option value="Warszawa">Warszawa</option>
                        <option value="Kraków">Kraków</option>
                        <option value="Gdańsk">Gdańsk</option>
                        <option value="Wrocław">Wrocław</option>
                        <option value="Poznań">Poznań</option>
                        <option value="Rzeszów">Rzeszów</option>
                      </Field>
                      <ErrorMessage
                        name="miasto"
                        component="div"
                        className="alert alert-danger"
                      />
                    </BootstrapForm.Group>
                    <BootstrapForm.Group className="formGroup">
                      <BootstrapForm.Label>Kategoria</BootstrapForm.Label>
                      <Field
                        as="select"
                        name="kategoria"
                        className="form-control"
                      >
                        <option value="">Wybierz kategorię</option>
                        <option value="Wokal">Wokal</option>
                        <option value="Gitary">Gitary</option>
                        <option value="Instrumenty klawiszowe">
                          Instrumenty klawiszowe
                        </option>
                        <option value="Instrumenty perkusyjne">
                          Instrumenty perkusyjne
                        </option>
                        <option value="Instrumenty dęte">
                          Instrumenty dęte
                        </option>
                        <option value="Instrumenty smyczkowe">
                          Instrumenty smyczkowe
                        </option>
                        <option value="DJ">DJ</option>
                      </Field>
                      <ErrorMessage
                        name="kategoria"
                        component="div"
                        className="alert alert-danger"
                      />
                    </BootstrapForm.Group>
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-100"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Przetwarzanie..." : "Zarejestruj się"}
                    </Button>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
