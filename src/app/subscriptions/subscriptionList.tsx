import { columns, type Subscription } from "~/app/subscriptions/subscriptionColumns"
import { DataTable } from "~/app/subscriptions/subscriptionTable";

// Need a mirror of enums as one server side and one client size. For now this will do
const BoxType = {
  Small: 'Smalls',
  Medium: 'Medium',
  Large: 'Large',
  Fruit: 'Fruit',
  Leaf: 'Leafy Greens',
  Western_Suppliment: 'Western Suppliment',
  African_Suppliment: 'African Suppliment',
}

const PaymentMethod = {
  Direct_Debit: "Direct Debit",
  Card: "Card",
  Cash: "Cash",
  Vouchers: "Vouchers",
}

export default async function DemoPage() {
  const data: Subscription[] = [
    {
      "id": "1",
      "name": "Jeff",
      "boxTypes": [BoxType.Small],
      "paymentMethod": PaymentMethod.Direct_Debit,
    },
    {
      "id": "2",
      "name": "Simon",
      "boxTypes": [BoxType.Large, BoxType.Western_Suppliment],
      "paymentMethod": PaymentMethod.Cash,
    },
  ]

  console.log(BoxType.Small);

  console.log("Raw data:", JSON.stringify(data, null, 2));
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
