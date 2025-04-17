import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import StatusDropdown from "../src/components/status"
import { CalendarMinus2 } from 'lucide-react';
const socket = io('https://web-nb16.vercel.app');

 


export default function Admin() {
  const [forms, setForms] = useState([]);
  const [filteredForms, setFilteredForms] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const res = await axios.get('/api/form/admin', {
          headers: { 'Content-Type': 'application/json' },
        });
        setForms(res.data);
        setFilteredForms(res.data);
      } catch (err) {
        console.error('Error fetching forms:', err);
      }
    };

    fetchForms();

    socket.on('newForm', (formData) => {
      setForms((prev) => [formData, ...prev]);
      setFilteredForms((prev) => [formData, ...prev]);
    });

    return () => {
      socket.off('newForm');
    };
  }, []);

  const filterForms = (type, status) => {
    let updated = [...forms];
    if (type !== 'all') {
      updated = updated.filter((form) => form.userId?.type === type);
    }
    if (status !== 'all') {
      updated = updated.filter((form) => form?.status === status);
    }
    setFilteredForms(updated);
  };

  const handleTypeFilter = (type) => {
    setSelectedType(type);
    filterForms(type, selectedStatus);
  };

  const handleStatusFilter = (status) => {
    setSelectedStatus(status);
    filterForms(selectedType, status);
  };

  const handleStatusChange = async (formId, newStatus) => {
    try {
      const res = await axios.put('/api/form/status', {
        formId,
        status: newStatus,
      });

      const updated = forms.map((form) =>
        form?._id === formId ? { ...form, status: res.data.status } : form
      );
      setForms(updated);
      filterForms(selectedType, selectedStatus);
    } catch (err) {
      console.error('Error updating form status:', err);
    }
  };

  const types = [...new Set(forms?.map((form) => form.userId?.type).filter(Boolean))];
  const statuses = [...new Set(forms?.map((form) => form?.status).filter(Boolean))];

  return (
    <div className="p-4 bg-white min-h-screen">
      <h1 className="text-xl font-bold mb-4">Admin Panel</h1>

      {/* Filter Dropdowns */}
      <div className="flex gap-4  mb-4">
        {/* Type Filter */}
        <div >
          <label className="mr-2 font-semibold">Filter by Type:</label>
          <select
            value={selectedType}
            onChange={(e) => handleTypeFilter(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="all">All</option>
            {types.map((type, idx) => (
              <option key={idx} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div>
          <label className="mr-2 font-semibold">Filter by Status:</label>
          <select
            value={selectedStatus}
            onChange={(e) => handleStatusFilter(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="all">All</option>
            {statuses.map((status, idx) => (
              <option key={idx} value={status}>{status}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Forms List */}
      {filteredForms.length === 0 ? (
        <p>No forms match the selected filters.</p>
      ) : (
        <ul>
          {filteredForms.map((form) => (
              <li key={form._id} className="mb-4 p-4 rounded bg-[#424141] hover:bg-gray-500 duration-300 text-white pb-5">
                  <div className='flex items-center  mb-2 gap-10 w-full h-[1rem]'>
                      <span className='' >{form.userId?.type}</span>
                     
                          <span> {form.userId?.budget}</span>
                       <div >
                          <StatusDropdown className="text-" form={form} handleStatusChange={handleStatusChange} />
                      </div>
                  </div>
                   
              <p><strong>Name:</strong> {form.userId?.name}</p>
              <p><strong>Email:</strong> {form.userId?.email}</p>
              
            
    <hr className='bg-gray-400' />
                  <div className='flex gap-2 mt-2 items-center' ><CalendarMinus2 size={ 20} /> <p className=' flex text-[.8rem] text-white'>   {form.createdAt}</p></div>
 
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
