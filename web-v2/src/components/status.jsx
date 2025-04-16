import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'


export default function StatusDropdown({ form , handleStatusChange }) {
  const statuses = ['pending', 'in progress', 'finished', 'archived']

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
      <MenuButton
  className={`inline-flex w-full  duration-300  justify-center gap-x-1.5 rounded-xl px-2 py-1 text-sm font-semibold text-white shadow-sm ring-1 ring-gray-600 ring-inset hover:bg-gray-800
    ${form.status === "pending" ? "bg-blue-500" : ""}
    ${form.status === "in progress" ? "bg-purple-500" : ""}
    ${form.status === "finished" ? "bg-green-600" : ""}
    ${form.status === "archived" ? "bg-gray-500" : ""}
  `}
>

          {form.status.charAt(0).toUpperCase() + form.status.slice(1)}
          
        </MenuButton>
      </div>

      <MenuItems className="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
        <div className="py-1">
          {statuses.map((status) => (
            <MenuItem key={status}>
              {({ active }) => (
                <button
                  onClick={() => handleStatusChange(form._id, status)}
                  className={`${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  } block w-full px-4 py-2 text-left text-sm`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  )
}
