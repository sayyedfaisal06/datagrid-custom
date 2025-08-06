# FactWise Assignment – Employee Dashboard with AG Grid

This is a React + TypeScript based dashboard built using **AG Grid**, **Tailwind CSS**, and **shadcn/ui**. It displays employee data in a tabular format with features like pagination, search, column toggle, and stats.

---

## Tech Stack

- **React** + **TypeScript**
- **AG Grid** (Client-Side)
- **Tailwind CSS**
- **shadcn/ui** (for UI components)
- **Vite** (for build & dev server)

---

## Folder Structure

```
src/
├── hooks/
│ ├── useTable.ts
├── components/
│ ├── ag-table/
│ │ ├── index.ts
│ │ ├── table.tsx
│ │ ├── table-columns.ts
│ │ ├── table-pagination.tsx
│ │ └── table-filter.tsx
│ ├── stats/
│ │ ├── stats.tsx
│ │ └── stats-card.tsx
│ └── ui/
│ ├── button.tsx
│ ├── card.tsx
│ ├── dropdown-menu.tsx
│ ├── input.tsx
│ └── pagination.tsx
├── lib/
├── mockData/
│ └── employees.ts
├── App.tsx
├── index.css
├── index.tsx
```

---

## Features Implemented

- ✅ Client-side rendering using **AG Grid**
- ✅ Global search (quick filter)
- ✅ Custom ShadCN dropdown to toggle column visibility
- ✅ Custom pagination
- ✅ Stats cards for total employees, active employees, average salary, etc.
- ✅ Responsive and clean layout with Tailwind
- ✅ AG Grid theming and styling

## Installation & Running the App

### 1. Install dependencies

npm install

### 2. Run development server

npm run dev

### 3. Visit

http://localhost:5173

### Mock Dataset

Stored in mockData/employees.ts. It contains 20 static employee entries with the following fields:

1. ID
2. Name
3. Email
4. Department
5. Position
6. Salary ($)
7. Location
8. Rating
9. Projects

Author <br />
**Faisal Sayyed** <br />
sayyedfaisal06@gmail.com <br />

Software Engineer | Assignment for FactWise
