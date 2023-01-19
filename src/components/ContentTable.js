import {
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import SearchBar from "./SearchBar";
import data from "../data/general.json";

const ContentTable = () => {
  const [entidad, setEntidad] = useState("");
  const [nombre, setNombre] = useState("");

  return (
    <>
      <SearchBar
        setEntidad={setEntidad}
        entidad={setEntidad}
        nombre={nombre}
        setNombre={setNombre}
      />
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
            {data
              .filter((asesor) => asesor.nombre.includes(nombre.toUpperCase()))
              .filter((asesor)=> asesor.estado === entidad)
              .map((asesor) => (
                <TableRow key={asesor.id}>
                  <TableCell>{asesor.id}</TableCell>
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
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default ContentTable;
