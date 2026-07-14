import { Card } from '#/components/atoms/card'
import MyCard from '#/components/organisms/card'
import ChartBarMultiple from '#/components/organisms/chartbar-mulitple'
import ChartLineDefault from '#/components/organisms/line-chart'
import ChartPieLegend from '#/components/organisms/pie-chart'
import CarouselSize from '#/components/organisms/quickTransfer'

const Dashboard = () => {
  return (
    <>
      <div className="bg-primary1 h-100vh">
        <MyCard />

        {/* chart */}
        <div className="flex flex-col md:flex-row lg:flex-row md:gap-7 lg:gap-10  px-7 md:px-10 lg:px-15 py-5">
          <div className="md:w-[50%] w-full lg:w-[70%] ">
            <h1 className="text-xl pb-5 text-primary2 font-semibold">Weekly Activity</h1>
            <ChartBarMultiple />
          </div>
          <div className="md:w-[50%] lg:w-[30%]">
            <h1 className="text-xl pb-5 text-primary2 font-semibold">Expense Statistics</h1>
            <ChartPieLegend />
          </div>
        </div>

        <div className=" px-7 md:px-10 lg:px-15   lg:py-5 lg:pb-10">
          <div className="flex flex-col md:flex-row lg:flex-row  md:gap-8 lg:gap-10 items-stretch">
            {/* Quick Transfer */}
            <div className="md:w-[40%] lg:w-[40%]">
              <h1 className="text-xl mb-5 lg:mb-5 text-primary2 font-semibold">Quick Transfer</h1>

              <Card className='lg:h-72'>
                <CarouselSize />
              </Card>
            </div>

            {/* Balance History */}
            <div className="w-full md:w-[57%] lg:w-[80%]">
              <h1 className="text-xl mb-5 mt-4 md:mt-0 lg:mt-0 lg:mb-5 text-primary2 font-semibold">Balance History</h1>

              <ChartLineDefault />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
