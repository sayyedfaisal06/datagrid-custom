import { useRef } from "react";
import type { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useDeferredValue, useState } from "react";
import { employees, type Employee } from "@/mockData/employees";
import { columnDefs } from "@/components/ag-table/table-columns";

const useTable = () => {
  const gridRef = useRef<AgGridReact>(null);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const debounceSearchText = useDeferredValue(searchText);

  const [rowData] = useState<Employee[]>(employees);
  const [visibleColumns, setVisibleColumns] = useState<ColDef[]>(columnDefs);

  const toggleColumn = (field: string) => {
    const isVisible = visibleColumns.some((col) => col.field === field);

    const currentVisible = new Set(
      visibleColumns.map((col) => col.field).filter(Boolean) as string[]
    );

    if (isVisible) {
      currentVisible.delete(field);
    } else {
      currentVisible.add(field);
    }

    const updatedVisibleColumns = columnDefs.filter((col) =>
      currentVisible.has(col.field!)
    );

    setVisibleColumns(updatedVisibleColumns);
  };

  const onGridReady = () => {
    const gridApi = gridRef.current!.api;
    setTotalPages(gridApi.paginationGetTotalPages());
  };

  const onPaginationChanged = () => {
    const gridApi = gridRef.current!.api;
    setCurrentPage(gridApi.paginationGetCurrentPage());
    setTotalPages(gridApi.paginationGetTotalPages());
  };

  return {
    gridRef,
    searchText,
    currentPage,
    totalPages,
    debounceSearchText,
    rowData,
    visibleColumns,
    columnDefs,
    setSearchText,
    toggleColumn,
    onGridReady,
    onPaginationChanged,
  };
};

export default useTable;
