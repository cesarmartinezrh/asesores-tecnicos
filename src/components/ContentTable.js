import { useState, useMemo } from "react";
import {
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  InputLabel,
  MenuItem,
  Select,
  Box,
  FormControl,
  TextField,
  Button,
} from "@mui/material";
import data from "../data/general.json";
import states from "../data/states.json";

const ContentTable = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isState, setIsState] = useState(false);
  const [searchType, setSearchType] = useState("default");
  const [state, setState] = useState("Seleccione una entidad");
  const [search, setSearch] = useState("");
  const [capTec, setCapTec] = useState("default")

  const filteredData = useMemo(() => {
    switch (searchType) {
      case "folio":
        return data.filter((asesor) => asesor.folio.trim().includes(search.trim().toUpperCase()));
      case "estado":
        return data.filter((asesor) => asesor.estado === state);
      case "nombre":
        return data.filter((asesor) =>
          asesor.nombre
            .trim()
            .toUpperCase()
            .includes(search.trim().toUpperCase())
        );
      case "capacidad":
        return data.filter((asesor) => asesor.ct === capTec)
      default:
        return null;
    }
  }, [search, state, capTec]);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchValue.length && setSearch(searchValue)
    setSearchValue("");
  };

  const handleTypeChange = ({ target }) => {
    setSearchType(target.value);
    target.value === "estado" ? setIsState(true) : setIsState(false);
  };

  const handleStateChange = ({ target }) => {
    setState(target.value);
  };

  const handleValueChange = ({ target }) => {
    setSearchValue(target.value);
  };

  const handleCapacidadChange = ({target}) => {
    setCapTec(target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
            gap: "10px",
          }}
        >
          <FormControl>
            <InputLabel id="search-type">Búsqueda</InputLabel>
            <Select
              labelId="search-type"
              id="searchSelect"
              value={searchType}
              label="Busqueda"
              onChange={handleTypeChange}
            >
              <MenuItem value={"default"}>Seleccione una opción...</MenuItem>
              <MenuItem value={"folio"}>Folio de Asesor</MenuItem>
              <MenuItem value={"estado"}>Entidad Federativa</MenuItem>
              <MenuItem value={"capacidad"}>Capacidad Técnica</MenuItem>
              <MenuItem value={"nombre"}>Nombre de Asesor</MenuItem>
            </Select>
          </FormControl>

          {searchType === "capacidad" ? (
          <FormControl>
            <InputLabel id="capacidad-type">Capacidad Técnica</InputLabel>
            <Select
              labelId="capacidad-type"
              id="capacidadSelect"
              value={capTec}
              label="Capacidad Técnica"
              onChange={handleCapacidadChange}
            >
              <MenuItem value={"default"}>Seleccione una opción...</MenuItem>
              <MenuItem value={"DESARROLLO DE LA CADENA PRODUCTIVA"}>Desarrollo de la cadena productiva</MenuItem>
              <MenuItem value={"ESTUDIOS FORESTALES"}>Estudios Forestales</MenuItem>
              <MenuItem value={"FIRA"}>FIRA</MenuItem>
              <MenuItem value={"FND"}>FND</MenuItem>
              <MenuItem value={"FORTALECIMIENTO DEL CAPITAL HUMANO"}>Fortalecimiento del Capital Humano</MenuItem>
              <MenuItem value={"INSTITUCION EXTENSIONISTA"}>Institución Extensionista</MenuItem>
              <MenuItem value={"REFORESTACION Y SUELOS"}>Reforestación y Suelos</MenuItem>
              <MenuItem value={"SANEAMIENTO FORESTAL"}>Saneamiento Forestal</MenuItem>
              <MenuItem value={"SERVICIOS AMBIENTALES"}>Servicios Ambientales</MenuItem>
              <MenuItem value={"SERVICIOS AMBIENTALES UNIDAD 01"}>Servicios Ambientales Unidad 01</MenuItem>
              <MenuItem value={"SERVICIOS AMBIENTALES UNIDAD 01 Y 02"}>Servicios Ambientales Unidad 01 y 02</MenuItem>
              <MenuItem value={"SILVICULTURA UNIDAD 01"}>Silvicultura Unidad 01</MenuItem>
              <MenuItem value={"SILVICULTURA UNIDAD 01 Y 02"}>Silvicultura Unidad 01 y 02</MenuItem>
              <MenuItem value={"SILVICULTURA UNIDAD 01, 02 Y 03"}>Silvicultura Unidad 01, 02 y 03</MenuItem>
              <MenuItem value={"SILVICULTURA UNIDAD 02"}>Silvicultura Unidad 02</MenuItem>
              <MenuItem value={"SILVICULTURA UNIDAD 02 Y 03"}>Silvicultura Unidad 02 y 03</MenuItem>
              <MenuItem value={"SILVICULTURA UNIDAD 03"}>Silvicultura Unidad 03</MenuItem>
              <MenuItem value={"SISTEMAS DE INFORMACION GEOGRAFICA"}>Sistemas de Información Geográfica</MenuItem>
            </Select>
          </FormControl>
          ) : null}

          {isState === false && searchType !== "default" && searchType !== "capacidad" ? (
            <>
              <FormControl>
                <TextField
                  onChange={handleValueChange}
                  name="nombre"
                  value={searchValue}
                  type={"text"}
                  label="Valor de búsqueda"
                  variant="outlined"
                  id={"search"}
                />
              </FormControl>
              <Button sx={{ color: "var(--wine)", ":hover": { backgroundColor: "var(--wine)", color: "snow" } }} type={"submit"}>Buscar</Button>
            </>
          ) : null}
          {isState && (
            <>
              <FormControl>
                <InputLabel id="state-input">Estado</InputLabel>
                <Select
                  labelId="state-input"
                  id={"state"}
                  value={state}
                  label={"Estado"}
                  onChange={handleStateChange}
                >
                  {states.map((state) => (
                    <MenuItem value={state.nombre} key={state.clave}>
                      {state.nombre}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </>
          )}
        </Box>
      </form>
      {filteredData === undefined ? ( 
        <p>Sin datos de búsqueda</p>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Folio de Asesor</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Razón Social</TableCell>
                <TableCell>Tipo de Persona</TableCell>
                <TableCell>Capacidades Técnicas</TableCell>
                <TableCell>Situación de Capacidad Técnica</TableCell>
                <TableCell>Teléfono y Correo Electrónico</TableCell>
                <TableCell>RFN</TableCell>
                <TableCell>Desempeño</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData === null || undefined ? (
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>Sin datos de búsqueda</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ) : (
                filteredData.map((asesor) => (
                  <TableRow key={asesor.id}>
                    <TableCell>{asesor.folio}</TableCell>
                    <TableCell>{asesor.estado}</TableCell>
                    <TableCell>{asesor.nombre}</TableCell>
                    <TableCell>{asesor.rs ? asesor.rs : "No Aplica"}</TableCell>
                    <TableCell>{asesor.tpd}</TableCell>
                    <TableCell>{asesor.ct}</TableCell>
                    <TableCell>{asesor.situacion}</TableCell>
                    <TableCell>{asesor.telcor}</TableCell>
                    <TableCell>{asesor.rfn}</TableCell>
                    <TableCell>{asesor.desemp}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
export default ContentTable;
