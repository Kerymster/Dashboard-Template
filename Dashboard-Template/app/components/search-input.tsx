'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from '../hooks/use-debounce';
import {
  ISearchStudentAction,
  ISetFilterAction,
  STUDENTS_ACTION_TYPES,
} from '../Students/students.actions';
import { GenericActionCreator } from '../utils/generic.action';
import {
  ISetPageAction,
  PAGINATION_ACTION_TYPES,
} from './pagination/pagination.actions';

const SearchInput = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const handleSearchedTextChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setSearchText(e.target.value);
  };
  const debouncedSearch = useDebounce(searchText, 300);

  useEffect(() => {
    dispatch(
      GenericActionCreator<ISetPageAction>({
        type: PAGINATION_ACTION_TYPES.SET_CURRENT_PAGE,
        data: 1,
      })
    );
    dispatch(
      GenericActionCreator<ISearchStudentAction>({
        type: STUDENTS_ACTION_TYPES.SEARCH_STUDENT,
        data: {
          q: debouncedSearch,
        },
      })
    );
  }, [debouncedSearch]);

  return (
    <div className="w-72 relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <MagnifyingGlassIcon
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </div>
      <input
        type="text"
        name="search"
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-2 sm:text-sm border border-gray-300 rounded-md"
        placeholder="Search..."
        onChange={handleSearchedTextChange}
        value={searchText}
      />
    </div>
  );
};

export default SearchInput;
