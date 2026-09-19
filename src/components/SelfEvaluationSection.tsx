import React, { useState } from 'react';
import { EvaluationItem } from '../types';
import { Star, Award } from 'lucide-react';

interface SelfEvalProps {
  evaluations: EvaluationItem[];
  onRatingChange: (id: number, rating: number) => void;
  teacherComment: string;
  onCommentChange: (comment: string) => void;
}

export const SelfEvaluationSection: React.FC<SelfEvalProps> = ({
  evaluations,
  onRatingChange,
  teacherComment,
  onCommentChange
}) => {
  const [selectedStamp, setSelectedStamp] = useState<string>('참 잘했어요! 👍');
  const stampOptions = ['참 잘했어요! 👍', '최고예요! 🌟', '열심히 탐구했어요! 🍀', '노력이 빛나요! 👏'];

  return (
    <section className="bg-[#ffffff] border border-[#dadad3] rounded-[32px] p-6 sm:p-8 mb-8 relative print:border-2 print:border-black print:p-4 print:rounded-none print-break-inside-avoid">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#e5e5e0] pb-4 mb-5">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-full bg-[#000000] text-[#ffffff] flex items-center justify-center font-black text-xs shrink-0">
            ✓
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-[#000000] tracking-[-0.8px]">
            [스스로 되돌아보기 및 선생님 칭찬 한마디]
          </h2>
        </div>
        <span className="px-3 py-1 rounded-full bg-[#f6f6f3] border border-[#dadad3] text-xs font-bold text-[#211922]">
          자기 성찰
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Self Evaluation Checklist */}
        <div className="lg:col-span-8 space-y-3">
          <div className="text-xs font-bold text-[#62625b] mb-2">
            스스로 공부한 내용을 돌아보고 나의 배움 정도를 솔직하게 별표(★)로 표시해 봅시다.
          </div>

          <div className="border border-[#dadad3] rounded-[16px] overflow-hidden divide-y divide-[#dadad3] bg-[#ffffff]">
            {evaluations.map((item) => (
              <div
                key={item.id}
                className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#ffffff] hover:bg-[#f6f6f3] transition-colors"
              >
                <div className="text-xs sm:text-sm font-bold text-[#000000] leading-relaxed">
                  {item.criteria}
                </div>

                {/* 3-Star clickable scale */}
                <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-auto">
                  {[1, 2, 3].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => onRatingChange(item.id, star)}
                      className="p-1 rounded-full transition-transform hover:scale-115"
                      title={`${star}점`}
                    >
                      <Star
                        className={`w-5 h-5 ${
                          star <= item.rating
                            ? 'fill-[#e60023] text-[#e60023]'
                            : 'text-[#dadad3]'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#f6f6f3] border border-[#dadad3] text-[11px] font-bold text-[#211922] ml-1">
                    {item.rating === 3 ? '매우 잘함' : item.rating === 2 ? '보통' : '노력'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Teacher Stamp & Encouraging Message Box */}
        <div className="lg:col-span-4 bg-[#f6f6f3] border border-[#dadad3] rounded-[16px] p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#000000] flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#e60023]" />
                선생님 칭찬 도장 & 한마디
              </span>
              <span className="text-[10px] text-[#211922] bg-[#ffffff] border border-[#dadad3] px-2 py-0.5 rounded-full font-bold">
                확인란
              </span>
            </div>

            {/* Stamp Display */}
            <div className="my-3 p-4 rounded-[16px] bg-[#ffffff] border border-[#dadad3] text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-[#e60023] text-[#e60023] font-bold text-xs bg-[#fbfbf9] tracking-wide">
                💮 {selectedStamp}
              </div>
            </div>

            {/* Stamp Selector */}
            <div className="no-print grid grid-cols-2 gap-1.5 mb-3">
              {stampOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setSelectedStamp(opt)}
                  className={`text-[11px] font-semibold py-1.5 px-2 rounded-full border transition-all truncate ${
                    selectedStamp === opt
                      ? 'bg-[#e60023] text-[#ffffff] border-[#e60023] font-bold'
                      : 'bg-[#ffffff] text-[#211922] border-[#dadad3] hover:bg-[#e5e5e0]'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* Teacher Note Input */}
            <textarea
              rows={2}
              value={teacherComment}
              onChange={(e) => onCommentChange(e.target.value)}
              placeholder="선생님의 칭찬과 격려의 말씀 (예: 옛날과 오늘날의 교통수단을 꼼꼼하게 비교하며 잘 탐구했어요!)"
              className="w-full p-3 text-xs rounded-[16px] border border-[#dadad3] bg-[#ffffff] text-[#000000] focus:outline-hidden focus:ring-2 focus:ring-[#435ee5] resize-none font-medium leading-relaxed"
            />
          </div>

          <div className="text-[11px] text-[#62625b] text-right mt-3">
            지도교사: (인)
          </div>
        </div>
      </div>
    </section>
  );
};
