import React from 'react';
import { Search, Filter, RotateCcw } from 'lucide-react';
import { ProductFilterState } from '../../types/product';

interface ProductFilterSearchProps {
  filters: ProductFilterState;
  onFilterChange: (newFilters: Partial<ProductFilterState>) => void;
  availableSizes: string[];
  availableColors: string[];
  totalResults: number;
}

export const ProductFilterSearch: React.FC<ProductFilterSearchProps> = ({
  filters,
  onFilterChange,
  availableSizes,
  availableColors,
  totalResults,
}) => {
  const hasActiveFilters = 
    filters.searchQuery !== '' || 
    filters.selectedSize !== '' || 
    filters.selectedColor !== '';

  const resetFilters = () => {
    onFilterChange({
      searchQuery: '',
      selectedSize: '',
      selectedColor: '',
      sortBy: 'featured',
    });
  };

  return (
    <div className="bg-[#1A1612] p-5 sm:p-6 rounded-xs border border-[#2D2720] space-y-4 mb-8 font-sans text-sm shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        
        {/* Search Input (5 cols) */}
        <div className="md:col-span-5 relative">
          <Search className="w-4 h-4 text-[#FDAA27] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
            placeholder="Search collections or product code..."
            className="w-full pl-10 pr-16 py-3 text-sm sm:text-base bg-[#221D18] border border-[#2D2720] rounded-xs text-[#FAF6F0] placeholder:text-[#786E61] focus:outline-none focus:border-[#FDAA27] transition-colors font-normal"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onFilterChange({ searchQuery: '' })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#FDAA27] hover:underline cursor-pointer"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Size Filter Dropdown (3 cols) */}
        <div className="md:col-span-3">
          <select
            value={filters.selectedSize}
            onChange={(e) => onFilterChange({ selectedSize: e.target.value })}
            className="w-full px-3.5 py-3 text-sm sm:text-base bg-[#221D18] border border-[#2D2720] rounded-xs text-[#FAF6F0] focus:outline-none focus:border-[#FDAA27] font-medium"
          >
            <option value="" className="bg-[#1A1612] text-[#FAF6F0]">All Available Sizes</option>
            {availableSizes.map((size) => (
              <option key={size} value={size} className="bg-[#1A1612] text-[#FAF6F0]">
                Size: {size}
              </option>
            ))}
          </select>
        </div>

        {/* Color Filter Dropdown (2 cols) */}
        <div className="md:col-span-2">
          <select
            value={filters.selectedColor}
            onChange={(e) => onFilterChange({ selectedColor: e.target.value })}
            className="w-full px-3.5 py-3 text-sm sm:text-base bg-[#221D18] border border-[#2D2720] rounded-xs text-[#FAF6F0] focus:outline-none focus:border-[#FDAA27] font-medium"
          >
            <option value="" className="bg-[#1A1612] text-[#FAF6F0]">All Colors</option>
            {availableColors.map((color) => (
              <option key={color} value={color} className="bg-[#1A1612] text-[#FAF6F0]">
                {color}
              </option>
            ))}
          </select>
        </div>

        {/* Sort By Dropdown (2 cols) */}
        <div className="md:col-span-2">
          <select
            value={filters.sortBy}
            onChange={(e) => onFilterChange({ sortBy: e.target.value as any })}
            className="w-full px-3.5 py-3 text-sm sm:text-base bg-[#221D18] border border-[#2D2720] rounded-xs text-[#FAF6F0] focus:outline-none focus:border-[#FDAA27] font-medium"
          >
            <option value="featured" className="bg-[#1A1612] text-[#FAF6F0]">Sort: Featured</option>
            <option value="name-asc" className="bg-[#1A1612] text-[#FAF6F0]">Name: A to Z</option>
            <option value="name-desc" className="bg-[#1A1612] text-[#FAF6F0]">Name: Z to A</option>
            <option value="code" className="bg-[#1A1612] text-[#FAF6F0]">Product Code</option>
          </select>
        </div>

      </div>

      {/* Filter Status Bar */}
      <div className="pt-3 border-t border-[#2D2720] flex items-center justify-between text-xs sm:text-sm text-[#A89E90]">
        <div className="flex items-center gap-2 font-medium">
          <Filter className="w-4 h-4 text-[#FDAA27]" />
          <span>Showing <strong className="text-[#FDAA27] font-bold">{totalResults}</strong> catalogue items</span>
        </div>

        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#FDAA27] hover:underline font-bold transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        )}
      </div>
    </div>
  );
};
