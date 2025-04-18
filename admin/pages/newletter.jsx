
import axios from 'axios';
import io from 'socket.io-client';
import { useEffect ,useState} from 'react';

const socket = io('https://web-nb16.vercel.app');
export default function Newsletter() {
    const [letters, setLetters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchletters = async () => {
            try {
                const res = await axios.get('/api/form/admin/emails', {
                    headers: { 'Content-Type': 'application/json' },
                });
                setLetters(res.data);
            } catch (err) {
                console.error('Error fetching forms:', err);
            } finally {
                setLoading(false); // Set loading to false after fetching is complete
            }
        };
    
        fetchletters();
    
        socket.on('newletters', (letterData) => {
            setLetters((prev) => [...prev, letterData]);
        });
    
        return () => {
            socket.off('newletters');
        };
    }, []);
    
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