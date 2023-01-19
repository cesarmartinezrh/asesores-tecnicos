import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import states from "../data/states.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 20px 0;

  @media screen and (min-width: 767px){
    flex-direction: row;
  }

`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
`;

const Input = styled(Field)`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  font-size: 18px;
  line-height: 1.428571429;
  color: #555;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  display: block;

  @media screen and (min-width: 767px) {
    height: 39px;
    padding: 6px 12px;
    margin: 10px 10px;
    display: inline;
  }
`;

const SearchBar = ({ setEntidad, setNombre, nombre }) => {
  const handleChange = (e) => {
    setEntidad(e.target.value);
  };

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };

  return (
    <Formik initialValues={{ entidad: "", nombre: "" }}>
      <Form>
        <Container>
          <Label>
            Nombre de Asesor
            <Input
              onChange={handleChangeNombre}
              name="nombre"
              value={nombre}
              style={{ margin: "0 10px" }}
              type={"text"}
            />
          </Label>
          <Label>
            Entidad
            <Input as="select" name="entidad" onChange={handleChange}>
              {states.map((state) => (
                <option value={state.nombre} key={state.clave}>
                  {state.nombre}
                </option>
              ))}
            </Input>
          </Label>
        </Container>
      </Form>
    </Formik>
  );
};

export default SearchBar;
