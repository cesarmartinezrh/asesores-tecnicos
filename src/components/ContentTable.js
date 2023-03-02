import {
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from "@mui/material";
import { useMemo } from "react";
import database from "../data/general.json";

const ContentTable = ({ values }) => {
  const data = useMemo(() => {
    switch (values.typeofsearch) {
      case "state":
        return database.filter((asesor) => asesor.estado === values.state);
      case "rfn":
        return database.filter(
          (asesor) => asesor.rfn.trim().toLowerCase() === values.rfn
        );
      case "rs":
        return database.filter((asesor) =>
          asesor.rs
            .trim()
            .toLowerCase()
            .includes(values.search.trim().toLowerCase())
        );
      case "nombre":
        return database.filter((asesor) =>
          asesor.nombre
            .trim()
            .toLowerCase()
            .includes(values.search.trim().toLowerCase())
        );
      case "folio":
        return database.filter((asesor) =>
          asesor.folio
            .trim()
            .toLowerCase()
            .includes(values.search.trim().toLowerCase())
        );
      case "captec":
        return database.filter((asesor) =>
          asesor.ct
            .trim()
            .toLowerCase()
            .includes(values.captec.toLowerCase())
        );
      default:
        return [];
    }
  }, [values.state, values.rfn, values.search, values.captec]);

  const tableCellStyle = {
    fontSize: "15px",
    color: "#235B4E",
    fontWeight: 600,
  };

  return (
    <TableContainer style={{ overflowX: "initial", marginTop: "20px" }}>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={tableCellStyle}>Estado</TableCell>
            <TableCell sx={tableCellStyle}>Folio de Asesor</TableCell>
            <TableCell sx={tableCellStyle}>Nombre</TableCell>
            <TableCell sx={tableCellStyle}>Razón Social</TableCell>
            <TableCell sx={tableCellStyle}>Tipo de Persona</TableCell>
            <TableCell sx={tableCellStyle}>Capacidades Técnicas</TableCell>
            <TableCell sx={tableCellStyle}>
              Teléfono y Correo Electrónico
            </TableCell>
            <TableCell sx={tableCellStyle}>RFN</TableCell>
            <TableCell sx={tableCellStyle}>Persona Evaluada</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data === null || undefined || data.length < 1 ? (
            <TableRow>
              <TableCell colSpan={5}></TableCell>
              <TableCell>Sin datos de búsqueda</TableCell>
              <TableCell colSpan={3}></TableCell>
            </TableRow>
          ) : (
            data.map((asesor) => (
              <TableRow key={asesor.id}>
                <TableCell>{asesor.estado}</TableCell>
                <TableCell>{asesor.folio}</TableCell>
                <TableCell>{asesor.nombre}</TableCell>
                <TableCell>{asesor.rs ? asesor.rs : "No Aplica"}</TableCell>
                <TableCell>{asesor.tpd}</TableCell>
                <TableCell>{asesor.ct}</TableCell>
                <TableCell>{asesor.telcor}</TableCell>
                <TableCell>{asesor.rfn}</TableCell>
                <TableCell>{asesor.perval}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContentTable;
