import React from 'react';
import { VehicleItem, VehiclePlace } from '../types';
import { VehicleIcon } from './VehicleIcon';
import { MapPin, Waves, CloudSun } from 'lucide-react';

interface Activity2Props {
  items: VehicleItem[];
  userLocations: Record<string, VehiclePlace>;
  onSelectPlace: (id: string, place: VehiclePlace) => void;
  showAnswers: boolean;
  isGraded: boolean;
}

export const Activity2LocationGroup: React.FC<Activity2Props> = ({
  items,
  userLocations,
  onSelectPlace,
  showAnswers,
  isGraded
}) => {
  const places: { key: VehiclePlace; label: string; icon: React.ReactNode }[] = [
    {
      key: 'land',
      label: '땅 (육상 교통수단)',
      icon: <MapPin className="w-4 h-4 text-[#000000]" />
    },
    {
      key: 'water',
      label: '물 (해상 교통수단)',
      icon: <Waves className="w-4 h-4 text-[#000000]" />
    },
    {
      key: 'air',
      label: '하늘 (항공 교통수단)',
      icon: <CloudSun className="w-4 h-4 text-[#000000]" />
    }
  ];

  return (
    <section className="bg-[#ffffff] border border-[#dadad3] rounded-[32px] p-6 sm:p-8 mb-8 relative print:border-2 print:border-black print:p-4 print:rounded-none print-break-inside-avoid">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#e5e5e0] pb-4 mb-5">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-full bg-[#000000] text-[#ffffff] flex items-center justify-center font-black text-xs shrink-0">
            2
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-[#000000] tracking-[-0.8px]">
            [활동 2] 다니는 장소(땅, 물, 하늘)에 따라 분류하기
          </h2>
        </div>
        <span className="px-3 py-1 rounded-full bg-[#f6f6f3] border border-[#dadad3] text-xs font-bold text-[#211922]">
          배점 20점
        </span>
      </div>

      <p className="text-sm text-[#62625b] mb-6 leading-relaxed">
        교통수단은 움직이는 공간에 따라 <strong className="text-[#000000] font-bold">땅(육상)</strong>, <strong className="text-[#000000] font-bold">물(해상)</strong>, <strong className="text-[#000000] font-bold">하늘(항공)</strong> 교통수단으로 나뉩니다. 각 교통수단이 다니는 곳을 선택해 보세요.
      </p>

      {/* Select Grid */}
      <div className="no-print grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
        {items.map((item) => {
          const currentPlace = showAnswers ? item.place : userLocations[item.id];
          const isCorrect = userLocations[item.id] === item.place;

          return (
            <div
              key={`loc-item-${item.id}`}
              className="p-3.5 rounded-[16px] border border-[#dadad3] bg-[#f6f6f3] flex flex-col justify-between"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <VehicleIcon iconType={item.iconType} className="w-8 h-8 shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-[#000000] truncate">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-[#62625b] font-medium">
                    {item.era === 'past' ? '옛날' : '오늘날'}
                  </div>
                </div>
              </div>

              {/* 3 Pill Options */}
              <div className="grid grid-cols-3 gap-1.5 text-xs">
                <button
                  type="button"
                  id={`btn-place-land-${item.id}`}
                  onClick={() => onSelectPlace(item.id, 'land')}
                  className={`py-1.5 rounded-[16px] text-xs font-bold transition-colors ${
                    currentPlace === 'land'
                      ? 'bg-[#000000] text-[#ffffff] shadow-xs'
                      : 'bg-[#e5e5e0] hover:bg-[#dadad3] text-[#211922]'
                  }`}
                >
                  땅
                </button>
                <button
                  type="button"
                  id={`btn-place-water-${item.id}`}
                  onClick={() => onSelectPlace(item.id, 'water')}
                  className={`py-1.5 rounded-[16px] text-xs font-bold transition-colors ${
                    currentPlace === 'water'
                      ? 'bg-[#000000] text-[#ffffff] shadow-xs'
                      : 'bg-[#e5e5e0] hover:bg-[#dadad3] text-[#211922]'
                  }`}
                >
                  물
                </button>
                <button
                  type="button"
                  id={`btn-place-air-${item.id}`}
                  onClick={() => onSelectPlace(item.id, 'air')}
                  className={`py-1.5 rounded-[16px] text-xs font-bold transition-colors ${
                    currentPlace === 'air'
                      ? 'bg-[#e60023] text-[#ffffff] shadow-xs'
                      : 'bg-[#e5e5e0] hover:bg-[#dadad3] text-[#211922]'
                  }`}
                >
                  하늘
                </button>
              </div>

              {(isGraded || showAnswers) && (
                <div className="mt-2 pt-2 text-[10px] font-bold border-t border-[#dadad3] flex justify-between">
                  <span className="text-[#62625b]">
                    정답: {item.place === 'land' ? '땅' : item.place === 'water' ? '물' : '하늘'}
                  </span>
                  {isGraded && (
                    <span className={isCorrect ? 'text-[#103c25]' : 'text-[#cc001f]'}>
                      {isCorrect ? '⭕' : '❌'}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 3 Categories Summary Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {places.map((place) => {
          const categorizedItems = items.filter((item) =>
            showAnswers ? item.place === place.key : userLocations[item.id] === place.key
          );

          return (
            <div
              key={`col-${place.key}`}
              className="border border-[#dadad3] bg-[#f6f6f3] rounded-[16px] p-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#dadad3]">
                  {place.icon}
                  <h3 className="font-bold text-xs sm:text-sm text-[#000000]">
                    {place.label}
                  </h3>
                </div>

                <div className="min-h-[100px] flex flex-col gap-2">
                  {categorizedItems.length > 0 ? (
                    categorizedItems.map((item) => (
                      <div
                        key={`cat-${place.key}-${item.id}`}
                        className="flex items-center justify-between text-xs py-2 px-3 rounded-[16px] bg-[#ffffff] border border-[#dadad3] shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
                      >
                        <span className="font-bold text-[#000000] flex items-center gap-2">
                          <VehicleIcon iconType={item.iconType} className="w-5 h-5" />
                          {item.name}
                        </span>
                        <span className="text-[10px] font-bold text-[#62625b] bg-[#f6f6f3] px-2 py-0.5 rounded-full border border-[#e5e5e0]">
                          {item.era === 'past' ? '옛날' : '오늘날'}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="h-full flex items-center justify-center text-xs text-[#91918c] italic py-6 print-only:hidden">
                      해당하는 교통수단을 위에서 선택해 주세요.
                    </div>
                  )}

                  {/* Print writing lines */}
                  <div className="print-only hidden space-y-3 pt-2">
                    <div className="border-b border-[#dadad3] h-5" />
                    <div className="border-b border-[#dadad3] h-5" />
                    <div className="border-b border-[#dadad3] h-5" />
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-[#dadad3] text-[11px] text-[#62625b] font-medium text-right">
                분류된 수: <strong className="text-[#000000]">{categorizedItems.length}개</strong>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
