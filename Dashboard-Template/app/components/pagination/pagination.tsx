import { GenericActionCreator } from '@/app/utils/generic.action';
import { IGlobalState } from '@/redux/reducers';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '../text';
import {
  ISetLimitAction,
  ISetPageAction,
  PAGINATION_ACTION_TYPES,
} from './pagination.actions';
import { IPaginationState } from './pagination.reducer';

interface PaginationProps {
  totalItems: number;
  itemsPerPageOptions: number[];
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPageOptions,
  totalPages,
}) => {
  const dispatch = useDispatch();
  const { currentPage, limit } = useSelector<IGlobalState, IPaginationState>(
    (state) => state.pagination
  );
  const startIndex = (currentPage - 1) * limit;
  const endIndex = Math.min(startIndex + limit, totalItems);

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(
      GenericActionCreator<ISetPageAction>({
        type: PAGINATION_ACTION_TYPES.SET_CURRENT_PAGE,
        data: 1,
      })
    );
    dispatch(
      GenericActionCreator<ISetLimitAction>({
        type: PAGINATION_ACTION_TYPES.SET_LIMIT,
        data: Number(e.target.value),
      })
    );
  };

  const handlePreviousPage = () => {
    dispatch(
      GenericActionCreator<ISetPageAction>({
        type: PAGINATION_ACTION_TYPES.SET_CURRENT_PAGE,
        data: Math.max(currentPage - 1, 1),
      })
    );
  };

  const handleNextPage = () => {
    dispatch(
      GenericActionCreator<ISetPageAction>({
        type: PAGINATION_ACTION_TYPES.SET_CURRENT_PAGE,
        data: Math.min(currentPage + 1, totalPages),
      })
    );
  };

  return (
    <div className="flex justify-end mt-5">
      <div className="mr-5">
        <Text color="lightGray" addedClasses="mr-2">
          Rows per page:
        </Text>
        <select
          className="bg-gray-100 text-gray-500"
          value={limit}
          onChange={handleItemsPerPageChange}
        >
          {itemsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex mr-10">
        <div className="mr-10">
          <Text color="lightGray">
            {startIndex + 1} - {endIndex} of {totalItems}
          </Text>
        </div>
        <div className="w-16 flex flex-row text-gray-500 justify-between">
          <button disabled={currentPage === 1} onClick={handlePreviousPage}>
            <ChevronLeftIcon height={20} width={20} />
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
          >
            <ChevronRightIcon height={20} width={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
