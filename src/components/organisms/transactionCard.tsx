import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '../atoms/card'
import '#/styles.css'
import Image from '#/lib/costant/images'
import ChartBarDefault from '../molecules/transaction-barchart'
const TransactionCard = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row gap-4 overflow-x-hidden px-7 py-4 lg:gap-8 lg:mx-5  md:gap-4">
        it
        {/* First Card */}
        <div className="flex gap-10 md:gap-4 lg:gap-6">
          <div className="min-w-[300px] sm:min-w-[340px] md:min-w-0">
            <h2 className="text-xl mb-5 text-primary2 font-semibold">
              My Cards
            </h2>
            <Card className="bg-[#0A06F4] text-white md:h-64 lg:h-65 lg:w-full">
              <CardHeader className="flex justify-between md:h-12">
                <div>
                  <h1 className="md:text-base lg:text-lg text-white/70">
                    Balance
                  </h1>
                  <p className="md:text-lg lg:text-xl">$5,756</p>
                </div>
                <div>
                  <img
                    src={Image.cardImg1}
                    alt="cardImg1"
                    className="md:size-8 lg:size-10"
                  />
                </div>
              </CardHeader>

              <CardContent className="h-22">
                <div className="flex md:gap-8 lg:gap-10">
                  <div>
                    <h1 className="uppercase text-white/70 md:text-base lg:text-lg">
                      Card Holder
                    </h1>
                    <p className="md:text-lg lg:text-xl">Eddy Cusnama</p>
                  </div>
                  <div>
                    <h1 className="uppercase md:text-base lg:text-lg text-white/70">
                      Valid Thru
                    </h1>
                    <p className="md:text-lg lg:text-xl">12/22</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className=" flex md:h-13 lg:h-16 items-center justify-between border-t md:pb-8">
                <h1 className="md:text-lg lg:text-2xl">3778 **** **** 1234</h1>
                <img
                  src={Image.cardImg4}
                  alt="cardImg2"
                  className="md:size-8 lg:size-10"
                />
              </CardFooter>
            </Card>
          </div>
          {/* Second Card */}
          <div className="min-w-[300px] sm:min-w-[340px] md:min-w-0">
            <h2 className="text-lg mb-5 ml-50 md:ml-40 lg:ml-55 text-primary2 font-semibold">
              +Add Card
            </h2>
            <Card className="  md:h-64 lg:h-65">
              <CardHeader className="flex justify-between">
                <div>
                  <CardDescription className="md:text-base lg:text-lg">
                    Balance
                  </CardDescription>
                  <p className="md:text-lg lg:text-xl">$5,756</p>
                </div>
                <div>
                  <img
                    src={Image.cardImg3}
                    alt="cardImg1"
                    className="md:size-8 lg:size-10 "
                  />
                </div>
              </CardHeader>

              <CardContent className="h-22">
                <div className="flex md:gap-10 lg:gap-15">
                  <div>
                    <CardDescription className="uppercase md:text-base lg:text-lg">
                      Card Holder
                    </CardDescription>
                    <p className="md:text-lg lg:text-xl">Eddy Cusnama</p>
                  </div>
                  <div>
                    <CardDescription className="uppercase md:text-base lg:text-lg">
                      Valid Thru
                    </CardDescription>
                    <p className="md:text-lg lg:text-xl">12/22</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className=" flex md:h-13 lg:h-20 items-center justify-between border-t md:pb-8 lg:pb-15">
                <h1 className="md:text-lg lg:text-2xl ">3778 **** **** 1234</h1>
                <img
                  src={Image.cardImg4}
                  alt="cardImg2"
                  className="md:size-8 lg:size-10"
                />
              </CardFooter>
            </Card>
          </div>
        </div>
        <div>
          {/* Card Transaction */}
          <div className="min-w-[300px] sm:min-w-[340px] md:min-w-0 lg:min-w-[40px]">
            <h2 className="text-[18px] mb-5 text-primary2 font-semibold">
              My Expense
            </h2>
            <ChartBarDefault />
          </div>
        </div>
      </div>
    </>
  )
}

export default TransactionCard
