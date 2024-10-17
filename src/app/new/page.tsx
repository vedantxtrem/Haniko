import Image from 'next/image';

const products = () => {
  return (
    <div className="min-h-screen bg-amber-50 text-white font-bold py-12">
      {/* Raw & Unfiltered Honey Section */}
      <section className="text-center">
        <h1 className="text-4xl mb-8">RAW & UNFILTERED HONEY</h1>
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <Image src="/image/honey.jpg" alt="Raw & Unfiltered Honey" width={200} height={300} />
            <p>RAW & UNFILTERED HONEY</p>
          </div>
          <div>
            <Image src="/image/honey.jpg" alt="Raw Honey Pouch" width={200} height={300} />
            <p>RAW HONEY POUCH</p>
          </div>
          <div>
            <Image src="/image/honey.jpg" alt="Honey Minis" width={200} height={300} />
            <p>HONEY MINIS</p>
          </div>
          <div>
            <Image src="/image/honey.jpg" alt="Organic Raw Honey" width={200} height={300} />
            <p>ORGANIC RAW HONEY</p>
          </div>
          <div>
            <Image src="/image/honey.jpg" alt="Organic Honey Pouch" width={200} height={300} />
            <p>ORGANIC HONEY POUCH</p>
          </div>
          <div>
            <Image src="/image/honey.jpg" alt="Raw Honey & Comb" width={200} height={300} />
            <p>RAW HONEY & COMB</p>
          </div>
        </div>
      </section>

      {/* Hot Honey Section */}
      <section className="text-center mt-16">
        <h1 className="text-4xl mb-8">HOT HONEY</h1>
        <div className="flex justify-center">
          <div className=''>
            <Image className='bg-amber-300' src="/image/honey.jpg" alt="Hot Honey" width={200} height={300} />
            <p>HOT HONEY</p>
          </div>
        </div>
      </section>

      {/* Manuka Honey Section */}
      <section className="text-center mt-16">
        <h1 className="text-4xl mb-8">MANUKA HONEY</h1>
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <Image src="/image/honey.jpg" alt="UMF 10+ Manuka Honey" width={200} height={300} />
            <p>UMF 10+ MANUKA HONEY</p>
          </div>
          <div>
            <Image src="/image/honey.jpg" alt="UMF 7+ Manuka Honey" width={200} height={300} />
            <p>UMF 7+ MANUKA HONEY</p>
          </div>
          <div>
            <Image src="/image/honey.jpg" alt="UMF 5+ Manuka Honey" width={200} height={300} />
            <p>UMF 5+ MANUKA HONEY</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default products;
