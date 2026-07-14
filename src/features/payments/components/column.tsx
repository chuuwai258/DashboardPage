import type { ColumnDef } from '@tanstack/react-table'

import { Button } from '../../../components/atoms/button'

export type Payment = {
  id: string
  description: string
  transactionId: string
  type: string
  card: string
  date: string
  amount: string
  receipt: string
}

export const data: Payment[] = [
  {
    id: '1',
    description: 'Spotify Subscription',
    transactionId: '#12548796',
    type: 'Shopping',
    card: '1234 ****',
    date: '28 Jan, 12.30 AM',
    amount: '-$2,500',
    receipt: 'Download',
  },
  {
    id: '2',
    description: 'Freepik Sales',
    transactionId: '#12548797',
    type: 'Transfer',
    card: '1234 ****',
    date: '25 Jan, 10.40 PM',
    amount: '+$750',
    receipt: 'Download',
  },
  {
    id: '3',
    description: 'Mobile Service',
    transactionId: '#12548798',
    type: 'Service',
    card: '1234 ****',
    date: '20 Jan, 10.40 PM',
    amount: '-$150',
    receipt: 'Download',
  },
  {
    id: '4',
    description: 'Wilson',
    transactionId: '#12548799',
    type: 'Transfer',
    card: '1234 ****',
    date: '15 Jan, 03.29 PM',
    amount: '-$1050',
    receipt: 'Download',
  },
  {
    id: '5',
    description: 'Emilly',
    transactionId: '#12548800',
    type: 'Transfer',
    card: '1234 ****',
    date: '14 Jan, 10.40 AM',
    amount: '+$840',
    receipt: 'Download',
  },
  {
    id: '6',
    description: 'Netflix Subscription',
    transactionId: '#12548801',
    type: 'Entertainment',
    card: '4567 ****',
    date: '12 Jan, 08.20 PM',
    amount: '-$19.99',
    receipt: 'Download',
  },
  {
    id: '7',
    description: 'Amazon Purchase',
    transactionId: '#12548802',
    type: 'Shopping',
    card: '4567 ****',
    date: '10 Jan, 02.15 PM',
    amount: '-$320',
    receipt: 'Download',
  },
  {
    id: '8',
    description: 'Salary Payment',
    transactionId: '#12548803',
    type: 'Income',
    card: '7890 ****',
    date: '05 Jan, 09.00 AM',
    amount: '+$4500',
    receipt: 'Download',
  },
  {
    id: '9',
    description: 'Electric Bill',
    transactionId: '#12548804',
    type: 'Utility',
    card: '7890 ****',
    date: '03 Jan, 06.30 PM',
    amount: '-$120',
    receipt: 'Download',
  },
  {
    id: '10',
    description: 'Uber Ride',
    transactionId: '#12548805',
    type: 'Transport',
    card: '1234 ****',
    date: '01 Jan, 11.45 PM',
    amount: '-$45',
    receipt: 'Download',
  },
  {
    id: '11',
    description: 'Apple Store',
    transactionId: '#12548806',
    type: 'Shopping',
    card: '5678 ****',
    date: '30 Dec, 01.20 PM',
    amount: '-$299',
    receipt: 'Download',
  },
  {
    id: '12',
    description: 'Freelance Project',
    transactionId: '#12548807',
    type: 'Income',
    card: '5678 ****',
    date: '28 Dec, 05.00 PM',
    amount: '+$1200',
    receipt: 'Download',
  },
  {
    id: '13',
    description: 'Coffee Shop',
    transactionId: '#12548808',
    type: 'Food',
    card: '1234 ****',
    date: '25 Dec, 10.15 AM',
    amount: '-$15',
    receipt: 'Download',
  },
  {
    id: '14',
    description: 'Gym Membership',
    transactionId: '#12548809',
    type: 'Service',
    card: '4567 ****',
    date: '22 Dec, 08.30 AM',
    amount: '-$50',
    receipt: 'Download',
  },
  {
    id: '15',
    description: 'Online Course',
    transactionId: '#12548810',
    type: 'Education',
    card: '7890 ****',
    date: '20 Dec, 04.45 PM',
    amount: '-$200',
    receipt: 'Download',
  },
  {
    id: '16',
    description: 'Bank Transfer',
    transactionId: '#12548811',
    type: 'Transfer',
    card: '1234 ****',
    date: '18 Dec, 03.10 PM',
    amount: '+$950',
    receipt: 'Download',
  },
  {
    id: '17',
    description: 'Insurance Payment',
    transactionId: '#12548812',
    type: 'Service',
    card: '5678 ****',
    date: '15 Dec, 12.00 PM',
    amount: '-$300',
    receipt: 'Download',
  },
  {
    id: '18',
    description: 'Restaurant Dinner',
    transactionId: '#12548813',
    type: 'Food',
    card: '7890 ****',
    date: '12 Dec, 07.30 PM',
    amount: '-$85',
    receipt: 'Download',
  },
  {
    id: '19',
    description: 'Bonus Payment',
    transactionId: '#12548814',
    type: 'Income',
    card: '4567 ****',
    date: '10 Dec, 09.30 AM',
    amount: '+$1500',
    receipt: 'Download',
  },
  {
    id: '20',
    description: 'Flight Ticket',
    transactionId: '#12548815',
    type: 'Travel',
    card: '1234 ****',
    date: '05 Dec, 06.45 PM',
    amount: '-$650',
    receipt: 'Download',
  },
]

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'description',
    header: () => <Button variant="ghost">Description</Button>,
  },

  {
    accessorKey: 'transactionId',
    header: 'Transaction ID',
  },
  {
    accessorKey: 'type',
    header: 'Type',
  },
  {
    accessorKey: 'card',
    header: 'Card',
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => {
      const amount = row.getValue('amount') as string
      return (
        <span
          className={`font-medium ${amount.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}
        >
          {amount}
        </span>
      )
    },
  },
  {
    accessorKey: 'receipt',
    header: 'Receipt',
    cell: ({ row }) => {
      const receipt = row.getValue('receipt') as string

      return (
        <span className="rounded-full border border-primary3 px-3 py-1 text-md text-primary3">
          {receipt}
        </span>
      )
    },
  },
]
