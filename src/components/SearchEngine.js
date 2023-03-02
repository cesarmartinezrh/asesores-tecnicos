import { InputLabel, MenuItem, Select, TextField, Button } from "@mui/material";
import { Formik, Form } from "formik";
import { useState } from "react";
import styled from "styled-components";
import searchOptions from "../data/searchValues.json";
import capacidadestecnicas from "../data/capacidadestecnicas.json";
import states from "../data/states.json";
import ContentTable from "./ContentTable";

const Formulario = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const SearchEngine = () => {
  const [data, setData] = useState({});

  return (
    <Formik
      initialValues={{
        typeofsearch: "default",
        search: "",
        state: "Seleccione una entidad",
        captec: "Seleccione una opción...",
        rfn: "default",
      }}
    >
      {({ values, handleChange }) => (
        <>
          <Formulario
            onSubmit={(e) => {
              e.preventDefault();
              setData(values);
            }}
          >
            <InputLabel id="typeofsearchlabel">Búsqueda</InputLabel>
            <Select
              labelId="typeofsearchlabel"
              id="typeofsearch"
              name="typeofsearch"
              value={values.typeofsearch}
              onChange={handleChange}
            >
              {searchOptions.map((option) => (
                <MenuItem key={option.id} value={option.searchkey}>
                  {option.searchlabel}
                </MenuItem>
              ))}
            </Select>
            {values.typeofsearch === "state" ? (
              <>
                <InputLabel id="statelabel">Entidad Federativa</InputLabel>
                <Select
                  labelId="state"
                  id="state"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                >
                  {states.map((state) => (
                    <MenuItem key={state.clave} value={state.nombre}>
                      {state.nombre}
                    </MenuItem>
                  ))}
                </Select>
              </>
            ) : null}

            {values.typeofsearch === "rfn" ? (
              <>
                <InputLabel id="rfnlabel">RFN</InputLabel>
                <Select
                  labelId="rfn"
                  id="rfn"
                  name="rfn"
                  value={values.rfn}
                  onChange={handleChange}
                >
                  <MenuItem value={"default"}>Seleccione una opción...</MenuItem>
                  <MenuItem value={"si"}>SI</MenuItem>
                  <MenuItem value={"no"}>NO</MenuItem>
                </Select>
              </>
            ) : null}

            {values.typeofsearch === "captec" ? (
              <>
                <InputLabel id="capteclabel">Capacidad Técnica</InputLabel>
                <Select
                  labelId="captec"
                  id="captec"
                  name="captec"
                  value={values.captec}
                  onChange={handleChange}
                >
                  {capacidadestecnicas.map((capacidad) => (
                    <MenuItem key={capacidad.id} value={capacidad.captec}>
                      {capacidad.captec}
                    </MenuItem>
                  ))}
                </Select>
              </>
            ) : null}

            {values.typeofsearch === "folio" ||
            values.typeofsearch === "rs" ||
            values.typeofsearch === "nombre" ? (
              <TextField
                id="search"
                name="search"
                label="Búsqueda"
                value={values.search}
                onChange={handleChange}
              />
            ) : null}
            <Button
              type="submit"
              sx={{
                backgroundColor: "#10312B",
                ":hover": { backgroundColor: "#235B4E" },
              }}
              variant="contained"
            >
              Buscar
            </Button>
          </Formulario>
          <ContentTable values={data} />
        </>
      )}
    </Formik>
  );
};
export default SearchEngine;
