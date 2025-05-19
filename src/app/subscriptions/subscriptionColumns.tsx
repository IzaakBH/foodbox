"use client"

import { type ColumnDef } from "@tanstack/react-table";

export const BoxType = {
  Small: 'Smalls',
  Medium: 'Medium',
  Large: 'Large',
  Fruit: 'Fruit',
  Leaf: 'Leafy Greens',
  Western_Suppliment: 'Western Suppliment',
  African_Suppliment: 'African Suppliment',
}

export const PaymentMethod = {
  Direct_Debit: "Direct Debit",
  Card: "Card",
  Cash: "Cash",
  Vouchers: "Vouchers",
}

export type Subscription = {
  id: string;
  name: string;
  boxTypes: BoxType[], // TODO: drive this from db
  paymentMethod: PaymentMethod
}

export const columns: ColumnDef<Subscription>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "boxTypes",
    header: "Box Types",
    cell: ({ row }) => row.original.boxTypes.join(", "),
  },
  {
    accessorKey: "paymentMethod",
    header: "Payment Method",
  },
];