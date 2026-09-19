import React from 'react';
import { RiddleQuestion } from '../types';
import { VehicleIcon } from './VehicleIcon';

interface Activity4Props {
  riddles: RiddleQuestion[];
  userAnswers: Record<number, string>;
  onAnswerChange: (id: number, text: string) => void;
  showAnswers: boolean;
  isGraded: boolean;
}

export const Activity4RiddleTrivia: React.FC<Activity4Props> = ({
  riddles,
  userAnswers,
  onAnswerChange,
  showAnswers,
  isGraded
}) => {
  return (
    <section className="bg-[#ffffff] border border-[#dadad3] rounded-[32px] p-6 sm:p-8 mb-8 relative print:border-2 print:border-black print:p-4 print:rounded-none print-break-inside-avoid">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#e5e5e0] pb-4 mb-5">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-full bg-[#000000] text-[#ffffff] flex items-center justify-center font-black text-xs shrink-0">
            4
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-[#000000] tracking-[-0.8px]">
            [활동 4] 교통수단 수수께끼와 초성 낱말 맞히기
          </h2>
        </div>
        <span className="px-3 py-1 rounded-full bg-[#f6f6f3] border border-[#dadad3] text-xs font-bold text-[#211922]">
          배점 15점
        </span>
      </div>

      <p className="text-sm text-[#62625b] mb-6 leading-relaxed">
        설명을 잘 읽고 수수께끼의 주인공이 누구인지 초성 힌트(자음)를 참고하여 낱말을 적어보세요.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {riddles.map((item, idx) => {
          const userVal = (userAnswers[item.id] || '').trim();
          const isCorrect = userVal.replace(/\s+/g, '') === item.answer.replace(/\s+/g, '');
          const displayVal = showAnswers ? item.answer : userAnswers[item.id] || '';

          return (
            <div
              key={item.id}
              className={`p-5 rounded-[16px] border transition-all flex flex-col justify-between ${
                isGraded
                  ? isCorrect
                    ? 'border-[#103c25] bg-[#c7f0da]/30'
                    : 'border-[#cc001f] bg-[#fbfbf9]'
                  : 'border-[#dadad3] bg-[#f6f6f3]'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#211922] text-[#ffffff] font-extrabold text-[11px] flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#ffffff] border border-[#dadad3] text-xs font-bold text-[#000000]">
                      초성: {item.initialConsonants}
                    </span>
                  </div>
                  <VehicleIcon iconType={item.iconType} className="w-8 h-8 shrink-0" />
                </div>

                <p className="text-xs sm:text-sm text-[#33332e] leading-relaxed mb-4 min-h-[44px]">
                  {item.clue}
                </p>
              </div>

              {/* Answer Input */}
              <div className="pt-3 border-t border-[#dadad3]">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#62625b] shrink-0">
                    정답 입력:
                  </span>
                  <input
                    type="text"
                    id={`input-riddle-${item.id}`}
                    value={displayVal}
                    onChange={(e) => onAnswerChange(item.id, e.target.value)}
                    placeholder="낱말을 적어보세요"
                    className="w-full px-3.5 py-2 rounded-[16px] text-sm font-bold bg-[#ffffff] border border-[#dadad3] text-[#000000] focus:outline-hidden focus:ring-2 focus:ring-[#435ee5]"
                  />
                </div>

                {/* Print Blank Lines */}
                <div className="print-only hidden mt-2 text-center text-xs text-[#62625b] border-b border-dashed border-[#dadad3] pb-1">
                  (초성: {item.initialConsonants}) 정답: [　　　　]
                </div>

                {(isGraded || showAnswers) && (
                  <div className="mt-2.5 text-xs font-bold flex items-center justify-between">
                    <span className="text-[#e60023]">
                      정답: {item.answer}
                    </span>
                    {isGraded && (
                      <span className={isCorrect ? 'text-[#103c25]' : 'text-[#cc001f]'}>
                        {isCorrect ? '참 잘했어요! ⭕' : '아쉬워요 ❌'}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
