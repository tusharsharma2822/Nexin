import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="bg-gray-900 text-white h-screen w-full">
        <header className="flex items-center justify-between p-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Nexin AI</h1>
          </div>
          <nav className="space-x-4 hidden md:flex">
            {/* <Link to="/features" className="hover:text-indigo-400">Features</Link>
            <Link to="/pricing" className="hover:text-indigo-400">Pricing</Link>
            <Link to="/support" className="hover:text-indigo-400">Support</Link> */}
            <Link to="/login" className="hover:text-indigo-400">Login</Link>
          </nav>
          <div className="md:hidden">
            <button className="text-white">☰</button> {/* Add a mobile menu icon */}
          </div>
        </header>

        <main className="flex flex-col items-center py-20">
          <h2 className="text-4xl font-extrabold text-center mb-5">Experience AI-Powered Chat</h2>
          <p className="text-lg text-gray-400 mb-10">Real-time AI assistance, multilingual support, and conversational analytics at your fingertips.</p>

          <div className="flex space-x-4 mb-10">
            <Link to='/register'><button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition duration-300 ease-in-out">Start Chat</button>
</Link>
            {/* <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition duration-300 ease-in-out">Explore Features</button> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-2">Real-Time AI Assistance</h3>
              <p>Get instant support and intelligent responses, making conversations smooth and productive.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-2">Conversational Analytics</h3>
              <p>Analyze conversations to gain insights into customer needs and enhance interactions.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
              <p>Communicate with users in their preferred language, expanding your reach and impact.</p>
            </div>
          </div>
        </main>

        <footer className="bg-gray-800 p-6 w-full fixed bottom-0">
            <div className="container mx-auto text-center">
                <p className="text-gray-400">
                &copy; 2025 Nexin AI. All rights reserved.
                </p>
            </div>
        </footer>

      </div>
    </>
  );
};

export default Home;
