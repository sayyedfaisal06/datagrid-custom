// src/data/employees.ts

import { type ColDef } from "ag-grid-community";

export const columnDefs: ColDef[] = [
  { headerName: "ID", field: "id", width: 70, lockPosition: true },
  {
    headerName: "Name",
    field: "name",
    valueGetter: (params) => `${params.data.firstName} ${params.data.lastName}`,
  },
  { headerName: "Email", field: "email" },
  { headerName: "Department", field: "department" },
  { headerName: "Position", field: "position" },
  {
    headerName: "Salary ($)",
    field: "salary",
    valueFormatter: (params) => `$${params.value.toLocaleString()}`,
    cellClass: "text-left",
  },
  { headerName: "Location", field: "location" },
  { headerName: "Rating", field: "performanceRating" },
  { headerName: "Projects", field: "projectsCompleted" },
  {
    headerName: "Status",
    field: "isActive",
    cellRenderer: (p: { value: boolean }) => (p.value ? "Active" : "Inactive"),
  },
];
