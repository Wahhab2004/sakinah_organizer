import Image from "next/image";



export default function FaqTitle() {
    return (
        <div data-aos="fade-down" data-aos-duration="500">
            <div className="bg-greenCS lg:h-32 justify-center items-center flex lg:my-20 lg:py-6 md:py-1 md:my-12 md:-mt-4 -mt-6 my-8">
                <Image
                        src="/rdk/svg/maskot-wave.svg"
                        alt="Logo"
                        width={230}
                        height={230}
                        className="absolute 2xl:mr-20 xl:mr-10 lg:mr-5 -scale-x-100 lg:-mt-12 md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] md:-mt-5 right-0 sm:w-[130px] sm:h-[130px]   -mt-4 max-sm: w-[90px] max-sm:h-[90px]"
                    />
                <div>
                    <h1 className=" text-white lg:p-4 md:p-4 p-2 text-center lg:text-3xl font-titania md:text-2xl sm:text-lg max-sm:text-xs ">Halo Sobat RDK!
                    <br/> Apakah ada pertanyaan yang belum terjawab?</h1>
                </div >

            </div>
        </div>
    );
}