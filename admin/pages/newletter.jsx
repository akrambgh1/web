import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('https://web-nb16.vercel.app');

export default function Newsletter() {
    const [letters, setLetters] = useState([]);
    const [loading, setLoading] = useState(true);

    // Custom function to fetch data
    

    useEffect(() => {const fetchLetters = async () => {
        try {
            const response = await fetch('/api/form/admin/emails', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setLetters(data);
        } catch (err) {
            console.error('Error fetching forms:', err);
        } finally {
            setLoading(false);
        }
    };
        // Initial fetch when component mounts
        fetchLetters();

        // Socket listener for new emails
        socket.on('newletters', (letterData) => {
            setLetters((prev) => [...prev, letterData]);
        });

        // Cleanup socket on unmount
        return () => {
            socket.off('newletters');
        };
    }, []); // Empty dependency array means this runs once when the component mounts

    return (
        <div>
            {loading ? (
                <p>Loading...</p> // Show loading text until data is fetched
            ) : letters.length === 0 ? (
                <p>No forms match the selected filters.</p>
            ) : (
                <ul>
                    {letters.map((letter) => (
                        <li key={letter._id} className="mb-4 p-4 rounded bg-[#424141] hover:bg-gray-500 duration-300 text-white pb-5">
                            <div className="flex items-center mb-2 gap-10 w-full h-[1rem]">
                                Email <span>{letter?.email}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}