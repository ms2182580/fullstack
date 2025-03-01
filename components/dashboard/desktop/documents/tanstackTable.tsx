import React, { useState, useReducer } from 'react'
import { UnderConstruction } from '@/components/under-construction/UnderConstruction'
import SortSVG from "@/assets/icons/sort.svg"
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getFilteredRowModel
} from '@tanstack/react-table'
import { RankingInfo, rankItem } from '@tanstack/match-sorter-utils'
import { HeaderHeadWrapper, HeaderRowWrapper, PageButtonsWrapper, PageNumbersWrapper, PaginationWrapper, StyleTableWrapper, TableCell, TableHeaderWrapper, TableRow, TableWrapper } from './styles/index-wrapper'
import { SearchBarWrapper, TableBodyWrapper } from '@/components/teams/dashboard/saved/styles/index-wrapper'
import TableGreater from "@/assets/icons/tableGreater.svg"
import TableLess from "@/assets/icons/TableLess.svg"
import SfileSVG from "@/assets/icons/sfile.svg"
import SpersonSVG from "@/assets/icons/sperson.svg"
import DotsMenu from './dotMenu'

// Define the Person type
type Person = {
    firstName: string
    lastName: string
    age: string
    visits: string


}

// Sample Data
const defaultData: Person[] = [
    {
        firstName: 'Kahlil’s Care Plan',
        lastName: 'john',
        age: '1 Minute ago',
        visits: "Draft",


    },
    {
        firstName: 'Kahlil’s Care Plan',
        lastName: 'john',
        age: "1 Minute ago",
        visits: "Compared",

    },
    {
        firstName: 'Kahlil’s Care Plan',
        lastName: 'john',
        age: "1 Minute ago",
        visits: "Compared",

    },
    {
        firstName: 'Kahlil’s Care Plan',
        lastName: 'john',
        age: "1 Minute ago",
        visits: "Compared",

    },
    {
        firstName: 'Kahlil’s Care Plan',
        lastName: 'john',
        age: "1 Minute ago",
        visits: "Compared",

    },
    {
        firstName: 'Kahlil’s Care Plan',
        lastName: 'john',
        age: "1 Minute ago",
        visits: "Draft",

    }
]

// Column Helper
const columnHelper = createColumnHelper();

const columns = [
    columnHelper.accessor('firstName', {
        cell: info => (
            <div>
                <input type='checkbox' />
                <SfileSVG />
                {info.getValue()}
            </div>
        ),
        header: () => (
            <div>
                <input type='checkbox' />
                Document <SortSVG />
            </div>
        ),
        footer: info => info.column.id
    }),
    columnHelper.accessor(row => row.lastName, {
        id: 'lastName',
        cell: info => (
            <div>
                <SpersonSVG />
                {info.getValue()}
            </div>
        ),
        header: () => <div>Created For <SortSVG /></div>,
        footer: info => info.column.id
    }),
    columnHelper.accessor('age', {
        header: () => <div>Last Modified <SortSVG /></div>,
        cell: info => info.renderValue(),
        footer: info => info.column.id
    }),
    columnHelper.accessor('visits', {
        header: () => <div>Status <SortSVG /></div>,
        cell: info => info.renderValue(),
        footer: info => info.column.id
    }),
    {
        id: 'dots',
        cell: ({ row }) => <DotsMenu rowIndex={row.index} />, // Pass rowIndex
        header: () => '',
    }
];



// Fuzzy Filtering Function
const fuzzyFilter = (row: { getValue: (arg0: any) => any }, columnId: any, value: string, addMeta: (arg0: RankingInfo) => void) => {
    const itemRank = rankItem(row.getValue(columnId), value)
    addMeta(itemRank)
    return itemRank.passed
}

function Table() {
    const [data, _setData] = useState(() => [...defaultData])
    const rerender = useReducer(() => ({}), {})[1]

    // Global filter state
    const [globalFilter, setGlobalFilter] = useState('')

    // Initialize the Table
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        globalFilterFn: fuzzyFilter,
        state: {
            globalFilter
        },
        onGlobalFilterChange: setGlobalFilter
    })

    return (
        <TableWrapper>
            {/* Global Search Input */}


            <SearchBarWrapper>
                <input
                    type='text'
                    placeholder='Search...'
                    value={globalFilter}
                    onChange={e => setGlobalFilter(e.target.value)}
                    className='border p-2 mb-4 w-full'
                />
            </SearchBarWrapper>
            {/* Table */}


            <StyleTableWrapper>


                <TableHeaderWrapper>
                    {table.getHeaderGroups().map(headerGroup => (
                        <HeaderRowWrapper key={headerGroup.id}>

                            {headerGroup.headers.map(header => (
                                <HeaderHeadWrapper key={header.id}>

                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}

                                </HeaderHeadWrapper>
                            ))}

                        </HeaderRowWrapper>
                    ))}
                </TableHeaderWrapper>



                <TableBodyWrapper>
                    {table.getRowModel().rows.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={columns.length}>
                                <UnderConstruction />
                            </TableCell>
                        </TableRow>
                    ) : (
                        table.getRowModel().rows.map(row => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    )}
                </TableBodyWrapper>



            </StyleTableWrapper>

            <PaginationWrapper>
                <PageNumbersWrapper>1-10 of 10</PageNumbersWrapper>
                <PageButtonsWrapper>
                    <span><TableGreater /></span>
                    <button>1</button>
                    <span><TableLess /></span>
                </PageButtonsWrapper>
            </PaginationWrapper>

            <div />
            {/* <button onClick={() => rerender()}>Rerender</button> */}
        </TableWrapper >
    )
}

export default Table
