import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md transition-transform transform hover:scale-105 hover:shadow-xl">
                <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-white mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-neon-green"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-neon-green"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-neon-green-dark focus:outline-none focus:ring-2 focus:ring-neon-green"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center text-white mt-6">
                    Don&apos;t have an account?{' '}
                    <Link to="/register" className="text-neon-green hover:underline">
                        Create one
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
