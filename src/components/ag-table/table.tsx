// src/components/EmployeeTable.tsx

import { AgGridReact } from "ag-grid-react";
import { Card, CardContent } from "../ui/card";
import TablePagination from "./table-pagination";
import TableFilter from "./table-filter";
import useTable from "@/hooks/useTable";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export const EmployeeTable = () => {
  const {
    gridRef,
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
  } = useTable();

  return (
    <div>
      <h2 className="text-lg font-medium mb-4">Employee Table</h2>
      <TableFilter
        setSearchText={setSearchText}
        toggleColumn={toggleColumn}
        visibleColumns={visibleColumns}
        columnDefs={columnDefs}
      />
      <Card>
        <CardContent className="ag-theme-alpine w-full h-[500px] rounded-xl">
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={visibleColumns}
            pagination={true}
            paginationPageSize={10}
            paginationAutoPageSize={true}
            suppressPaginationPanel={true}
            theme={"legacy"}
            quickFilterText={debounceSearchText}
            domLayout="normal"
            defaultColDef={{
              sortable: true,
              filter: true,
              resizable: true,
            }}
            getRowStyle={() => ({
              lineHeight: "1.75rem",
              fontSize: "0.875rem",
            })}
            onGridReady={onGridReady}
            onPaginationChanged={onPaginationChanged}
          />
        </CardContent>
        <TablePagination
          gridRef={gridRef}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </Card>
    </div>
  );
};
