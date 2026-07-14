import DataTable from '#/components/organisms/data-table'
import TransactionCard from '#/components/organisms/transactionCard'
import { columns, data } from '../payments/components/column'

const Transaction = () => {
  return (
    <>
      <div className="bg-primary1 h-100vh">
        <TransactionCard />

        <div className="px-7 lg:px-15">
          <h1 className="text-xl pt-3 text-primary2 font-semibold">
            Recent Transactions
          </h1>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </>
  )
}

export default Transaction
