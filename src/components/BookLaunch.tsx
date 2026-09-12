/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, Sparkles, Edit2, Save, X, ExternalLink } from 'lucide-react';
import { BookInfo } from '../types';

interface BookLaunchProps {
  book: BookInfo;
  onUpdateBook: (updated: BookInfo) => void;
  isAdmin: boolean;
}

export default function BookLaunch({ book, onUpdateBook, isAdmin }: BookLaunchProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formState, setFormState] = useState<BookInfo | null>(null);

  const handleStartEdit = () => {
    setIsEditing(true);
    setFormState({ ...book });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormState(null);
  };

  const handleSave = () => {
    if (!formState) return;
    onUpdateBook(formState);
    setIsEditing(false);
    setFormState(null);
  };

  return (
    <section id="book" className="py-24 bg-white border-b border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-[#D4AF37] font-mono tracking-widest text-xs uppercase font-bold">LITERARY DEBUT</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#0A192F] tracking-tight">
            THE BOOK LAUNCH
          </h2>
          <div className="h-1 w-16 bg-[#D4AF37] mx-auto"></div>
          <p className="text-sm sm:text-base text-[#5A6E85] font-light leading-relaxed">
            Highlighting a major newly authored volume on contemporary aviation regulations, pilot command philosophies, or air safety systems in West Africa.
          </p>
        </div>

        {/* Book Launch Card */}
        <div className="max-w-4xl mx-auto bg-[#FCFBF7] border border-[#D4AF37]/25 rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#D4AF37]/5 to-transparent rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Book Cover Visual Placeholder (MANDATED) */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-56 h-80 bg-gradient-to-br from-[#0A192F] to-[#1E293B] border-2 border-[#D4AF37] shadow-2xl rounded-r-xl relative flex flex-col items-center justify-center p-6 text-center group">
                <BookOpen className="h-12 w-12 text-[#D4AF37]/40 mb-3" />
                <p className="text-[10px] font-mono tracking-widest text-[#D4AF37] font-extrabold uppercase">
                  {book.coverImagePlaceholder}
                </p>
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-[#D4AF37]/30 rounded-r-sm"></div>
              </div>
            </div>

            {/* Book Info Block (Col Span 7) */}
            <div className="md:col-span-7 space-y-6">
              
              {isEditing ? (
                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block text-[10px] font-mono text-gray-500 uppercase">Book Title</label>
                    <input 
                      type="text"
                      className="w-full text-xs p-2.5 border border-gray-300 rounded bg-white text-gray-800 font-bold"
                      value={formState?.title || ''}
                      onChange={(e) => setFormState(prev => prev ? { ...prev, title: e.target.value } : null)}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-gray-500 uppercase">Author</label>
                    <input 
                      type="text"
                      className="w-full text-xs p-2.5 border border-gray-300 rounded bg-white text-gray-800"
                      value={formState?.author || ''}
                      onChange={(e) => setFormState(prev => prev ? { ...prev, author: e.target.value } : null)}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-gray-500 uppercase">Book Description</label>
                    <textarea 
                      rows={4}
                      className="w-full text-xs p-2.5 border border-gray-300 rounded bg-white text-gray-800 font-light"
                      value={formState?.description || ''}
                      onChange={(e) => setFormState(prev => prev ? { ...prev, description: e.target.value } : null)}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-gray-500 uppercase">Cover Image Placeholder text</label>
                    <input 
                      type="text"
                      className="w-full text-xs p-2.5 border border-gray-300 rounded bg-white text-gray-800"
                      value={formState?.coverImagePlaceholder || ''}
                      onChange={(e) => setFormState(prev => prev ? { ...prev, coverImagePlaceholder: e.target.value } : null)}
                    />
                  </div>

                  <div className="flex items-center space-x-2 justify-end pt-2">
                    <button onClick={handleCancel} className="px-3 py-1.5 border border-gray-300 rounded">
                      Cancel
                    </button>
                    <button onClick={handleSave} className="px-4 py-1.5 bg-[#D4AF37] text-white rounded font-bold">
                      Save Book
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 text-[9px] font-bold tracking-widest bg-amber-500/10 text-amber-600 rounded border border-amber-500/20 font-mono uppercase">
                      Official Debut
                    </span>
                    {isAdmin && (
                      <button 
                        onClick={handleStartEdit}
                        className="p-1 text-gray-400 hover:text-[#D4AF37] border border-transparent hover:border-gray-200 rounded"
                      >
                        <Edit2 className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-black text-[#0A192F] uppercase tracking-wide">
                      {book.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#5A6E85] mt-1">
                      Author: <span className="text-[#0A192F] font-bold">{book.author}</span>
                    </p>
                  </div>

                  <div className="h-px bg-gray-150"></div>

                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed font-light italic">
                    "{book.description}"
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <button className="px-5 py-3 bg-[#0A192F] hover:bg-[#1E293B] text-white font-bold rounded-lg text-xs tracking-widest uppercase transition-colors flex items-center justify-center space-x-2">
                      <span>LEARN ABOUT THE BOOK</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
