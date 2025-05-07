export default function Register() {
  return (
    <form className="max-w-4xl mx-auto px-4 py-12  bg-gray-100  rounded-2xl space-y-5">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600">
        Register
      </h1>
      <div>
        <label className="block font-semibold mb-1">Title:</label>
        <input
          type="text"
          placeholder="..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Full Name:</label>
        <input
          type="text"
          placeholder="Your full name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Email:</label>
        <input
          type="email"
          placeholder="example@email.com"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Mobile Number:</label>
        <input
          type="tel"
          placeholder="+213..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Clinic/Organization:</label>
        <input
          type="text"
          placeholder="Name of your clinic or institution"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Country:</label>
        <input
          type="text"
          placeholder="Your country"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">City:</label>
        <input
          type="text"
          placeholder="Your city"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button className="bg-blue-600 p-2 rounded-2xl text-white">
        Rgister
      </button>
    </form>
  );
}
