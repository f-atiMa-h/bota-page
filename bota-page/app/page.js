import { HiSparkles } from "react-icons/hi2";

export default function Page() {
  return (
    <div className="text-gray-900">
  {/* The header */}
  <header className="mx-5 mt-15 mb-5">
    <h1 className="text-3xl font-bold tracking-tight pb-2">Lead Genius</h1>
    <p className="text-sm font-semibold">Snap, Boost, Sell, and Succeed!</p>
    <p className="text-sm font-semibold">
      Snap your item, get a description, and boost with smart targeting - all in seconds!
    </p>
  </header>

  {/* The body */}
  <main className="flex-1 p-6">
    <ol className="list-none grid gap-6 grid-cols-1 md:grid-cols-2">
      {[
        {
          number: 1,
          title: "Upload a Service Image",
          description: "Add a clear photo of your service—this could be a flyer, business card, work photo, or tools in use."
        },
        {
          number: 2,
          title: "AI Creates Your Service Description",
          description: "Our AI automatically generates a service description based on your input."
        },
        {
          number: 3,
          title: "Provide a Brief Overview",
          description: "Add a short note explaining what your service includes, offers, or emails. This helps us better understand your service."
        },
        {
          number: 4,
          title: "Boosts With Lead Genius",
          description: "Promote your service using smart targeting to reach the right people or customize your own audience."
        }
      ].map((item) => (
        <li key={item.number} className="relative pl-12">
          <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-gray-900 font-bold text-sm">
            {item.number}
          </span>
          <h3 className="text-base font-bold tracking-tight">{item.title}</h3>
          <ul>
            <li className="list-disc list-inside pl-4 text-sm leading-loose font-medium">
              {item.description}
            </li>
          </ul>
        </li>
      ))}
    </ol>
  </main>

  <footer className="flex justify-center mt-6">
    <button className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-300">
      <HiSparkles className="h-5 w-5 text-white" />
      Get Leads
    </button>
  </footer>
</div>

  );
}


