import { SignUp } from "@clerk/nextjs";
import Image from "next/image";


export default function Page() {
  return (
    <section className="bg-white">
      
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt="Night"
            width={600}
            height={800}
            src="/Collabolearn-banner.png"
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <div className="mt-6 p-4 bg-gray-800 rounded">
              <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to <span className="text-blue-500">CollaboLearn</span> Please Sign Up to get started
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Discover the 20+ courses offered on our platform, covering a
                diverse range of subjects to meet your learning needs and
                interests:
              </p>
            </div>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to <span className="text-blue-500">CollaboLearn</span> Please Login to view details
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Discover the 20+ courses offered on our platform, covering a
                diverse range of subjects to meet your learning needs and
                interests:
              </p>
            </div>
            <SignUp />
          </div>
        </main>
        
      </div>
    </section>
  );
}
