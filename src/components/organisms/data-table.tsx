import type { ColumnDef, VisibilityState } from '@tanstack/react-table'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/atoms/table'
import React from 'react'

import { Tabs, TabsList, TabsTrigger } from '#/components/atoms/tabs'
import DataTablePagination from './data-table-pagination'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export default function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getPaginationRowModel: getPaginationRowModel(),

    state: {
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: { pageSize: 5 },
    },
  })

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between py-4 ">
        <Tabs defaultValue="outline" >
          <TabsList className="bg-primary1  flex gap-9 lg:gap-14 bg-transparent">
            <TabsTrigger
              value="all"
              className="text-lg rounded-none border-x-0 border-t-0 border-b-2 border-transparent  data-[state=active]:border-primary5 data-[state=active]:text-primary5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              All Transaction
            </TabsTrigger>
            <TabsTrigger
              value="income"
              className="text-lg rounded-none border-x-0 border-t-0 border-b-2 border-transparent data-[state=active]:border-primary5 data-[state=active]:text-primary5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              {' '}
              Income
            </TabsTrigger>

            <TabsTrigger
              value="expense"
              className="text-lg rounded-none border-x-0 border-t-0 border-b-2 border-transparent data-[state=active]:border-primary5 data-[state=active]:text-primary5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              {' '}
              Expense
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="overflow-x-auto rounded-md border ">
        <Table className="bg-white">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-lg text-primary4"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="text-lg ">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <DataTablePagination table={table} />
    </>
  )
}
