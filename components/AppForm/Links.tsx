// components/LinksForm.tsx
'use client';
import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { HiOutlineX } from 'react-icons/hi';
import { MdDragHandle } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';

interface LinkItem {
  i: string;
  l: string;
  u: string;
}

interface Props {
  modelValue: LinkItem[];
  setModelValue: (val: LinkItem[]) => void;
}

const SortableLinkItem: React.FC<{
  link: LinkItem;
  index: number;
  onRemove: (index: number) => void;
  onChange: (index: number, field: keyof LinkItem, value: string) => void;
}> = ({ link, index, onRemove, onChange }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: index });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="relative mb-6 group">
      <button className="absolute top-2 -left-8" {...listeners} {...attributes}>
        <MdDragHandle className="h-6 w-6 text-slate-500 drag-handle" />
      </button>
      <button
        onClick={() => onRemove(index)}
        className="hidden group-hover:flex items-center justify-center h-6 w-6 rounded-full bg-slate-300 text-slate-600 absolute -right-3 -top-3"
      >
        <HiOutlineX className="h-4 w-4" />
      </button>
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Icon Key (optional)
              </label>
              <input
                type="text"
                value={link.i}
                onChange={(e) => onChange(index, 'i', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Label
              </label>
              <input
                type="text"
                value={link.l}
                onChange={(e) => onChange(index, 'l', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                URL
              </label>
              <input
                type="url"
                value={link.u}
                onChange={(e) => onChange(index, 'u', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          {(!link.l || !link.u) && (
            <p className="mt-2 text-xs text-center text-slate-400">
              Link shown in preview once label and url are added
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const LinksForm: React.FC<Props> = ({ modelValue, setModelValue }) => {
  const sensors = useSensors(useSensor(PointerSensor));
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = active.id;
      const newIndex = over.id;
      setModelValue(arrayMove(modelValue, oldIndex, newIndex));
    }
  };

  const handleAdd = () => {
    setModelValue([...modelValue, { i: '', l: '', u: '' }]);
  };

  const handleRemove = (index: number) => {
    const updated = [...modelValue];
    updated.splice(index, 1);
    setModelValue(updated);
  };

  const handleChange = (index: number, field: keyof LinkItem, value: string) => {
    const updated = [...modelValue];
    updated[index][field] = value;
    setModelValue(updated);
  };

  return (
    <div>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0 sticky top-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Links</h3>
            <p className="mt-1 text-sm text-gray-600">Add some links here</p>
            <p className="mt-1 text-xs text-gray-600">
              Icon keys can be found in{' '}
              <a className="underline" href="https://icones.js.org/" target="_blank">
                https://icones.js.org/
              </a>
              .
            </p>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0 relative">
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={modelValue.map((_, index) => index)} strategy={verticalListSortingStrategy}>
              {modelValue.map((link, index) => (
                <SortableLinkItem
                  key={index}
                  link={link}
                  index={index}
                  onRemove={handleRemove}
                  onChange={handleChange}
                />
              ))}
            </SortableContext>
          </DndContext>
          <button
            onClick={handleAdd}
            className="mt-8 border-2 text-slate-500 border-slate-300 rounded-lg block w-full py-2"
          >
            <FiPlus className="h-6 w-6 mx-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinksForm;
