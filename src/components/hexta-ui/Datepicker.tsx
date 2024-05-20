import React, { useState } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import {
  format,
  addDays,
  startOfMonth,
  endOfMonth,
  isSameDay,
  isSameMonth,
  isToday,
  subMonths,
  addMonths,
} from "date-fns";
import { FaCalendar } from "react-icons/fa";

const cn = (...args: any[]) => {
  return clsx(twMerge(...args));
};

interface CalendarProps {
  value: Date;
  onChange: (date: Date) => void;
}
const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sas"];

interface DatePickerProps {
  className?: string;
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
}

const Calendar = ({ value, onChange }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);
  const dateRange = [];
  let currentDay = startDate;
  while (currentDay <= endDate) {
    dateRange.push(new Date(currentDay));
    currentDay = addDays(currentDay, 1);
  }
  const handleDateClick = (date: Date) => {
    onChange(date);
  };
  return (
    <div className="p-4 text-gray-300 border border-white rounded-md shadow-md bg-zinc-950 border-opacity-10 ">
      {" "}
      <div className="flex items-center justify-between mb-4">
        <button
          className="flex items-center justify-center text-gray-400 hover:text-gray-200"
          onClick={() => setCurrentDate(subMonths(currentDate, 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6z"
            />
          </svg>
        </button>
        <span className="text-sm font-semibold">
          {" "}
          {format(currentDate, "MMMM yyyy")}{" "}
        </span>{" "}
        <button
          className="flex items-center justify-center text-gray-400 hover:text-gray-200"
          onClick={() => setCurrentDate(addMonths(currentDate, 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="rotate-180"
          >
            {" "}
            <path
              fill="currentColor"
              d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6z"
            />{" "}
          </svg>{" "}
        </button>{" "}
      </div>{" "}
      <div className="grid grid-cols-7 gap-2 ">
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className="px-2 py-1 text-center text-zinc-100 text-opacity-80 text-[13px]"
          >
            {day}
          </div>
        ))}
        {dateRange.map((date, index) => (
          <button
            key={index}
            className={cn(
              "px-2 py-1 rounded-sm text-center flex items-center justify-center text-zinc-100 text-opacity-80 text-[13px]",
              isSameDay(date, value) && "bg-blue-800 text-white",
              !isSameMonth(date, currentDate) && "text-gray-400",
              isSameMonth(date, currentDate) &&
                !isSameDay(date, value) &&
                "hover:bg-zinc-900",
              isToday(date) && "bg-white text-black font-semibold"
            )}
            onClick={() => handleDateClick(date)}
          >
            {" "}
            {format(date, "d")}{" "}
          </button>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export const Datepicker = ({ className, value, onChange }: DatePickerProps) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const handleDateChange = (date: Date) => {
    onChange(date);
    setShowCalendar(false);
  };
  return (
    <div className={cn("relative", className)}>
      {" "}
      <div className="relative">
        <input
          type="text"
          value={value ? format(value, "dd/MM/yyyy") : "Pick a date"}
          onClick={() => setShowCalendar(!showCalendar)}
          className={cn(
            "flex px-4 py-3 my-4 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-50 relative cursor-pointer bg-zinc-950 border border-white border-opacity-10"
          )}
          readOnly
        />
        <span className="absolute top-[50%] translate-y-[-50%] right-3">
          <FaCalendar />
        </span>
      </div>
      {showCalendar && (
        <div className="absolute z-10 w-64 mt-2 translate-x-[-50%] left-[50%] bg-white rounded-lg shadow-lg">
          {" "}
          <Calendar
            value={value ?? new Date()}
            onChange={handleDateChange}
          />{" "}
        </div>
      )}{" "}
    </div>
  );
};
