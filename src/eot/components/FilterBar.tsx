import React from 'react';
import { Search, Filter, RotateCcw, Calendar, Layers } from 'lucide-react';

interface FilterBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedUnit: string;
  setSelectedUnit: (unit: string) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  onReset: () => void;
  filteredCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchTerm,
  setSearchTerm,
  selectedUnit,
  setSelectedUnit,
  selectedType,
  setSelectedType,
  selectedYear,
  setSelectedYear,
  onReset,
  filteredCount,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 mb-6 text-slate-900 dark:text-slate-100">
      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="input-search-questions"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ابحث برقم السؤال، أو بالصيغة الرياضيات، أو بمخرج التعلم..."
            className="w-full pr-11 pl-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 transition-all text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
          />
        </div>

        {/* Filter Dropdowns */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Unit Filter */}
          <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5">
            <Layers className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            <select
              id="select-unit-filter"
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(e.target.value)}
              className="bg-transparent text-xs font-semibold text-slate-800 dark:text-slate-100 focus:outline-none cursor-pointer py-1"
            >
              <option value="all" className="dark:bg-slate-800">جميع الوحدات</option>
              <option value="2" className="dark:bg-slate-800">الوحدة الثانية: النهايات والاتصال</option>
              <option value="3" className="dark:bg-slate-800">الوحدة الثالثة: التفاضل وتطبيقاته</option>
            </select>
          </div>

          {/* Type Filter */}
          <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5">
            <Filter className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            <select
              id="select-type-filter"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-transparent text-xs font-semibold text-slate-800 dark:text-slate-100 focus:outline-none cursor-pointer py-1"
            >
              <option value="all" className="dark:bg-slate-800">جميع الأنواع (موضوعي + مقالي)</option>
              <option value="mcq" className="dark:bg-slate-800">اختيار من متعدد (MCQ)</option>
              <option value="paper" className="dark:bg-slate-800">أسئلة مقالية ورقية</option>
            </select>
          </div>

          {/* Exam Year Filter */}
          <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5">
            <Calendar className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            <select
              id="select-year-filter"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-transparent text-xs font-semibold text-slate-800 dark:text-slate-100 focus:outline-none cursor-pointer py-1"
            >
              <option value="all" className="dark:bg-slate-800">جميع أسئلة امتحانات الوزارة</option>
              <option value="2024/2025" className="dark:bg-slate-800">امتحان 2024 / 2025</option>
              <option value="2023/2024" className="dark:bg-slate-800">امتحان 2023 / 2024</option>
              <option value="2021/2022" className="dark:bg-slate-800">امتحان 2021 / 2022</option>
              <option value="2019/2020" className="dark:bg-slate-800">امتحان 2019 / 2020</option>
              <option value="2017/2018" className="dark:bg-slate-800">امتحان 2017 / 2018</option>
            </select>
          </div>

          {/* Reset button */}
          <button
            id="btn-reset-filters"
            onClick={onReset}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl transition-all cursor-pointer"
            title="إعادة ضبط الفلاتر"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            إعادة ضبط
          </button>
        </div>
      </div>

      {/* Results badge */}
      <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>عرض <strong>{filteredCount}</strong> سؤالاً مطابقتً للتصفية الحالية</span>
        {searchTerm && (
          <span className="text-indigo-600 dark:text-indigo-400 font-bold">البحث عن: "{searchTerm}"</span>
        )}
      </div>
    </div>
  );
};
