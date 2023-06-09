import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const FilterDrowpDownMenu = ({handleFilterRemoteJob,handleFilterOnsiteJob,handleShowAllAppliJob}) => {
  return (
    <div className='flex justify-end my-5 max-w-7xl items-center px-8 text-white'>
      <ul className='flex items-center'>
          <Menu as='div' className='relative inline-block text-left'>
            <div>
              <Menu.Button className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
                Filter By
                <ChevronDownIcon
                  className='-mr-1 ml-2 h-5 w-5'
                  aria-hidden='true'
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a onClick={handleFilterRemoteJob}
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900 cursor-pointer'
                            : 'text-gray-700',
                          'block px-4 py-2 text-md font-semibold'
                        )}
                      >
                        Remote
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a onClick={handleFilterOnsiteJob}
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900 cursor-pointer'
                            : 'text-gray-700',
                          'block px-4 py-2 text-md font-semibold'
                        )}
                      >
                        Onsite
                      </a>
                    )}
                </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a onClick={handleShowAllAppliJob}
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900 cursor-pointer'
                            : 'text-gray-700',
                          'block px-4 py-2 text-md font-semibold'
                        )}
                      >
                        All Applied Job
                      </a>
                    )}
                </Menu.Item>

              </div>
              </Menu.Items>
            </Transition>
          </Menu>
      </ul>
    </div>
  );
};

export default FilterDrowpDownMenu;