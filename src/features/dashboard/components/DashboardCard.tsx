import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../components/atoms/card'
import '#/styles.css'
import Image from '#/lib/costant/images'
const DashboardCard = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row gap-4 overflow-x-auto px-7 py-4 lg:gap-17 md:gap-4 lg:px-15 ">
        {/* First Card */}
        <div className="flex gap-10 md:gap-4 lg:gap-15">
          <div className="min-w-[300px] sm:min-w-[340px] md:min-w-0">
            <h2 className="text-xl mb-5 text-primary2 font-semibold">
              My Cards
            </h2>
            <Card className="bg-[#0A06F4] text-white h-60 md:h-64 lg:h-60 lg:w-full">
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
            <h2 className="text-lg mb-5 ml-50 md:ml-40 lg:ml-60 text-primary2 font-semibold">
              See All
            </h2>
            <Card className="h-60  md:h-64 lg:h-60">
               <CardHeader className="flex justify-between md:h-12">
                <div>
                  <CardDescription className="md:text-base lg:text-lg ">
                    Balance
                  </CardDescription>
                  <p className="md:text-lg lg:text-xl">$5,756</p>
                </div>
                <div>
                  <img
                    src={Image.cardImg3}
                    alt="cardImg3"
                    className="md:size-8 lg:size-10"
                  />
                </div>
              </CardHeader>

              <CardContent className="h-22">
                <div className="flex md:gap-8 lg:gap-10">
                  <div>
                    <CardDescription className="uppercase  md:text-base lg:text-lg">
                      Card Holder
                    </CardDescription>
                    <p className="md:text-lg lg:text-xl">Eddy Cusnama</p>
                  </div>
                  <div>
                    <CardDescription className="uppercase md:text-base lg:text-lg ">
                      Valid Thru
                    </CardDescription>
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
        </div>
        <div>
          {/* Recent Transaction */}
          <div className="min-w-[300px] sm:min-w-[340px] md:min-w-[200px] lg:min-w-[40px]">
            <h2 className="text-[18px] mb-5 text-primary2 font-semibold">
              Recent Transaction
            </h2>
            <Card className="md:py-7 lg:py-3 h-60 md:h-65 lg:h-60">
              <CardHeader className="flex  justify-between md:gap-4  items-center">
                <div>
                  <img
                    src={Image.cardDeposit}
                    alt="depositeCard"
                    className="bg-[#E7EDFF] md:size-[30px] lg:size-[55px] lg:px-2 rounded-full"
                  />
                </div>
                <div>
                  <CardTitle>Deposit from my Card</CardTitle>
                  <CardDescription>28 January 2021</CardDescription>
                </div>

                <CardAction className="md:text-sm text-red-500 mt-4">
                  -$850
                </CardAction>
              </CardHeader>

              <CardContent className="flex justify-between items-center md:gap-4">
                <div>
                  <img
                    src={Image.cardPayPal}
                    alt="depositeCard"
                    className="bg-[#E7EDFF] md:size-[30px] lg:size-[55px] lg:px-2 rounded-full"
                  />
                </div>
                <div>
                  <CardTitle>Deposit from my Card</CardTitle>
                  <CardDescription>28 January 2021</CardDescription>
                </div>

                <CardAction className="md:text-sm text-red-500 mt-4">
                  -$850
                </CardAction>
              </CardContent>

              <CardFooter className="flex justify-between items-center md:gap-4">
                <div>
                  <img
                    src={Image.cardJemi}
                    alt="depositeCard"
                    className="bg-[#DCFAF8] md:size-[30px] lg:size-[55px] lg:px-2 rounded-full"
                  />
                </div>
                <div>
                  <CardTitle>Deposit from my Card</CardTitle>
                  <CardDescription>28 January 2021</CardDescription>
                </div>

                <CardAction className="md:text-sm text-red-500 mt-4">
                  -$850
                </CardAction>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardCard
