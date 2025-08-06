import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import type { ColDef } from "ag-grid-community";

const TableFilter = ({
  setSearchText,
  toggleColumn,
  visibleColumns,
  columnDefs,
}: {
  setSearchText: (text: string) => void;
  toggleColumn: (field: string) => void;
  visibleColumns: ColDef[];
  columnDefs: ColDef[];
}) => {
  return (
    <div className="flex justify-end flex-col sm:flex-row gap-2 mb-4">
      <Input
        className="w-full sm:max-w-[30rem] bg-white"
        type="text"
        placeholder="Search employees..."
        onChange={(e) => setSearchText(e.target.value)}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Filter className="mr-1 h-4 w-4" />
            Filter Columns
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {columnDefs.map((col) => (
            <DropdownMenuCheckboxItem
              key={col.field}
              checked={visibleColumns.some((v) => v.field === col.field)}
              onCheckedChange={() => toggleColumn(col.field!)}
            >
              {col.headerName}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TableFilter;
