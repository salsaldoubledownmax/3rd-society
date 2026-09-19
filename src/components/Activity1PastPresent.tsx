import React from 'react';
import { VehicleItem, VehicleEra } from '../types';
import { VehicleIcon } from './VehicleIcon';
import { Check } from 'lucide-react';

interface Activity1Props {
  items: VehicleItem[];
  userSelections: Record<string, VehicleEra>;
  onSelectEra: (id: string, era: VehicleEra) => void;
  showAnswers: boolean;
  isGraded: boolean;
}

export const Activity1PastPresent: React.FC<Activity1Props> = ({
  items,
  userSelections,
  onSelectEra,
  showAnswers,
  isGraded
}) => {
  return (
    <section className="bg-[#ffffff] border border-[#dadad3] rounded-[32px] p-6 sm:p-8 mb-8 relative print:border-2 print:border-black print:p-4 print:rounded-none print-break-inside-avoid">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-[#e5e5e0] pb-4 mb-5">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-full bg-[#000000] text-[#ffffff] flex items-center justify-center font-black text-xs shrink-0">
            1
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-[#000000] tracking-[-0.8px]">
            [활동 1] 옛날과 오늘날의 교통수단 가려내기
          </h2>
        </div>
        <span className="px-3 py-1 rounded-full bg-[#f6f6f3] border border-[#dadad3] text-xs font-bold text-[#211922]">
          배점 20점
        </span>
      </div>

      <p className="text-sm text-[#62625b] mb-6 leading-relaxed">
        아래 교통수단 카드를 살펴보고, <strong className="text-[#000000] font-bold">‘옛날’</strong>에 주로 이용했던 것인지, <strong className="text-[#000000] font-bold">‘오늘날’</strong> 주로 이용하는 것인지 알맞은 단추를 눌러보세요.
      </p>

      {/* Pin Masonry Style Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
        {items.map((item) => {
          const userChoice = userSelections[item.id];
          const isCorrect = userChoice === item.era;
          const displayChoice = showAnswers ? item.era : userChoice;

          return (
            <div
              key={item.id}
              className={`rounded-[16px] p-4 transition-all flex flex-col justify-between border ${
                isGraded
                  ? isCorrect
                    ? 'border-[#103c25] bg-[#c7f0da]/30'
                    : 'border-[#cc001f] bg-[#fbfbf9]'
                  : 'border-[#dadad3] bg-[#f6f6f3]'
              }`}
            >
              <div>
                {/* Header item with icon and pin-overlay-pill */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <VehicleIcon iconType={item.iconType} className="w-10 h-10 shrink-0" />
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#ffffff] border border-[#dadad3] text-[11px] font-bold text-[#62625b]">
                    {item.powerSource}
                  </span>
                </div>

                <div className="font-bold text-sm sm:text-base text-[#000000] tracking-tight mb-1">
                  {item.name}
                </div>

                <p className="text-xs text-[#62625b] leading-relaxed mb-4 min-h-[36px]">
                  {item.description}
                </p>
              </div>

              <div>
                {/* Interactive Selectors (16px radius, neutral/accent state) */}
                <div className="no-print grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    id={`btn-era-past-${item.id}`}
                    onClick={() => onSelectEra(item.id, 'past')}
                    className={`py-2 px-3 rounded-[16px] text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                      displayChoice === 'past'
                        ? 'bg-[#000000] text-[#ffffff] shadow-xs'
                        : 'bg-[#e5e5e0] hover:bg-[#dadad3] text-[#211922]'
                    }`}
                  >
                    옛날
                    {displayChoice === 'past' && <Check className="w-3 h-3" />}
                  </button>
                  <button
                    type="button"
                    id={`btn-era-present-${item.id}`}
                    onClick={() => onSelectEra(item.id, 'present')}
                    className={`py-2 px-3 rounded-[16px] text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                      displayChoice === 'present'
                        ? 'bg-[#e60023] text-[#ffffff] shadow-xs'
                        : 'bg-[#e5e5e0] hover:bg-[#dadad3] text-[#211922]'
                    }`}
                  >
                    오늘날
                    {displayChoice === 'present' && <Check className="w-3 h-3" />}
                  </button>
                </div>

                {/* Print write line */}
                <div className="print-only hidden text-xs font-bold text-[#62625b] border-t border-dashed border-[#dadad3] pt-2 mt-2 text-center">
                  시대: [　　　　]
                </div>

                {/* Feedback Indicator */}
                {(isGraded || showAnswers) && (
                  <div className="mt-2.5 pt-2 border-t border-[#dadad3] text-[11px] font-bold flex items-center justify-between">
                    <span className={item.era === 'past' ? 'text-[#000000]' : 'text-[#e60023]'}>
                      정답: {item.era === 'past' ? '옛날' : '오늘날'}
                    </span>
                    {isGraded && (
                      <span className={isCorrect ? 'text-[#103c25]' : 'text-[#cc001f]'}>
                        {isCorrect ? '정답 ⭕' : '오답 ❌'}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Collection Trays (Warm-cream Surfaces with Pill Chips) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Past Tray */}
        <div className="border border-[#dadad3] rounded-[16px] p-4 bg-[#f6f6f3]">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-xs text-[#000000] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#000000]" />
              옛날의 교통수단 모음
            </h3>
            <span className="text-[11px] font-bold text-[#62625b]">
              {items.filter((i) => (showAnswers ? i.era === 'past' : userSelections[i.id] === 'past')).length}개
            </span>
          </div>

          <div className="min-h-[56px] flex flex-wrap gap-2 items-center">
            {items
              .filter((i) => (showAnswers ? i.era === 'past' : userSelections[i.id] === 'past'))
              .map((item) => (
                <span
                  key={`past-badge-${item.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ffffff] text-[#000000] font-bold text-xs border border-[#dadad3] shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
                >
                  <VehicleIcon iconType={item.iconType} className="w-4 h-4" />
                  {item.name}
                </span>
              ))}
            {items.filter((i) => (showAnswers ? i.era === 'past' : userSelections[i.id] === 'past')).length === 0 && (
              <span className="text-xs text-[#91918c] italic">
                위 카드에서 '옛날'을 선택하면 이곳에 모입니다.
              </span>
            )}
          </div>
        </div>

        {/* Present Tray */}
        <div className="border border-[#dadad3] rounded-[16px] p-4 bg-[#f6f6f3]">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-xs text-[#000000] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e60023]" />
              오늘날의 교통수단 모음
            </h3>
            <span className="text-[11px] font-bold text-[#62625b]">
              {items.filter((i) => (showAnswers ? i.era === 'present' : userSelections[i.id] === 'present')).length}개
            </span>
          </div>

          <div className="min-h-[56px] flex flex-wrap gap-2 items-center">
            {items
              .filter((i) => (showAnswers ? i.era === 'present' : userSelections[i.id] === 'present'))
              .map((item) => (
                <span
                  key={`present-badge-${item.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ffffff] text-[#000000] font-bold text-xs border border-[#dadad3] shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
                >
                  <VehicleIcon iconType={item.iconType} className="w-4 h-4" />
                  {item.name}
                </span>
              ))}
            {items.filter((i) => (showAnswers ? i.era === 'present' : userSelections[i.id] === 'present')).length === 0 && (
              <span className="text-xs text-[#91918c] italic">
                위 카드에서 '오늘날'을 선택하면 이곳에 모입니다.
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
