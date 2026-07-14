import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/atoms/carousel'
import Images from '#/lib/costant/images'

const cards = [
  {
    image: Images.Person1,
    name: 'Livia Bator',
    title: 'CEO',
  },
  {
    image: Images.Person2,
    name: 'Randy Pres',
    title: 'Director',
  },
  {
    image: Images.Person3,
    name: 'Workman',
    title: 'Designer',
  },
  {
    image: Images.Person2,
    name: 'Micheael',
    title: 'Manager',
  },
  {
    image: Images.Person5,
    name: 'John Smith',
    title: 'Developer',
  },
]
export default function CarouselSize() {
  return (
    <>
      <Carousel
        opts={{
          align: 'start',
          
        }}
        className='md:w-[85%] lg:w-[85%] md:h-55'
      >
        <CarouselContent>
          {cards.map((card, index) => (
            <CarouselItem
              key={index}
              className="basis-1/3 md:basis-1/3 lg:basis-1/3 relative"
            >
              <div>
                <div className="flex flex-col items-center  lg:p-4 ">
                  <img src={card.image} alt={card.name} className='size lg:size-20 '/>
                  <div>
                    <h1 className="text-[16px] md:line-clamp-1">{card.name}</h1>
                    <p className="text-[15px] text-primary2">{card.title}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex md:flex-col lg:flex-row md:gap-4 items-center justify-between px-5 mt-4 ">
          <p className='text-base lg:text-lg text-primary2'>Write Amount</p>
          <div className='flex items-center relative'>
            <input type="text" className="bg-[#EDF1F7] w-[180px] lg:w-[265px] h-[30px] lg:h-[50px] rounded-full px-4 lg:px-7 text-base lg:text-lg" placeholder='525.50'/>
            <button>
                <img src={Images.send} alt="" className='absolute -top-8 lg:-top-12 -right-4 lg:-right-9 size-25 lg:size-38' />
            </button>
          </div>
        </div>
        <CarouselPrevious className="-left-8  lg:-left-1 " />

        <CarouselNext className="-right-8 lg:-right-18 " />
      </Carousel>
    </>
  )
}
