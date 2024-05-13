const stats = [
  { id: 1, name: "Transaksi Setiap 24 Jam", value: "44 Ribu" },
  { id: 2, name: "Total Keuntungan", value: "$119 Juta" },
  { id: 3, name: "Pelanggan Baharu Setiap Tahun", value: "46,151" },
];

export default function Stats() {
  return (
    <div className="border-t border-gray-200">
      <div className="grid justify-items-stretch mt-12">
        <h2 className="justify-self-center text-base font-semibold leading-7 text-green-700">
          Data Terkumpul
        </h2>
      </div>
      <div className="bg-white py-14 sm:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      
    </div>
  );
}
