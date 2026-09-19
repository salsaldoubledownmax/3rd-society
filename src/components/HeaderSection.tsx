import React from 'react';
import { Printer, CheckCircle2, RotateCcw, Eye, Sparkles, Compass } from 'lucide-react';
import { StudentInfo } from '../types';

interface HeaderSectionProps {
  studentInfo: StudentInfo;
  onUpdateStudentInfo: (info: StudentInfo) => void;
  showAnswers: boolean;
  onToggleShowAnswers: () => void;
  onGradeWorksheet: () => void;
  onReset: () => void;
  totalScore?: number | null;
  onPrint: () => void;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  studentInfo,
  onUpdateStudentInfo,
  showAnswers,
  onToggleShowAnswers,
  onGradeWorksheet,
  onReset,
  totalScore,
  onPrint
}) => {
  return (
    <header className="mb-8">
      {/* Top Sticky/Floating Chrome Nav (Pinterest Signature Quiet Nav with Red Anchor) */}
      <div className="no-print sticky top-3 z-50 mb-6 bg-[#ffffff]/95 backdrop-blur-md border border-[#dadad3] rounded-[16px] px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#e60023] text-white flex items-center justify-center font-black text-sm">
            사
          </div>
          <div>
            <div className="text-[11px] font-bold text-[#62625b] uppercase tracking-wider">
              초등 3학년 사회 · 1단원
            </div>
            <div className="text-sm font-bold text-[#000000] tracking-tight">
              교통수단의 발달 탐구 활동지
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Teacher Answer Key Filter Chip */}
          <button
            type="button"
            id="btn-toggle-answers"
            onClick={onToggleShowAnswers}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all ${
              showAnswers
                ? 'bg-[#000000] text-[#ffffff]'
                : 'bg-[#f6f6f3] hover:bg-[#e5e5e0] text-[#211922] border border-[#dadad3]'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            {showAnswers ? '정답 숨기기' : '교사용 정답·해설'}
          </button>

          {/* Reset button */}
          <button
            type="button"
            id="btn-reset-worksheet"
            onClick={onReset}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-[16px] text-xs font-bold bg-[#f6f6f3] hover:bg-[#e5e5e0] text-[#62625b] border border-[#dadad3] transition-colors"
            title="초기화"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            초기화
          </button>

          {/* Secondary Action: Print */}
          <button
            type="button"
            id="btn-print-worksheet"
            onClick={onPrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[16px] text-xs font-bold bg-[#e5e5e0] hover:bg-[#dadad3] text-[#211922] transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-[#211922]" />
            A4 인쇄 / PDF
          </button>

          {/* Primary Action: Pinterest Red CTA */}
          <button
            type="button"
            id="btn-grade-worksheet"
            onClick={onGradeWorksheet}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[16px] text-xs font-bold bg-[#e60023] hover:bg-[#cc001f] active:bg-[#b5001c] text-white shadow-xs transition-transform active:scale-[0.98]"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            활동지 채점하기
          </button>
        </div>
      </div>

      {/* Main Worksheet Hero Container (Canvas #ffffff with 32px Radius & Hairline Border) */}
      <div className="bg-[#ffffff] border border-[#dadad3] rounded-[32px] p-6 sm:p-8 relative print:border-2 print:border-black print:p-4 print:rounded-none">
        {/* Subtle top metadata */}
        <div className="flex items-center justify-between text-[11px] font-semibold text-[#62625b] mb-4 pb-3 border-b border-[#e5e5e0]">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#f6f6f3] text-[#211922] font-bold text-[11px] border border-[#dadad3]">
              <Compass className="w-3 h-3 text-[#e60023]" />
              사회과 배움 활동지
            </span>
            <span className="hidden sm:inline">2. 우리가 알아보는 교통수단</span>
          </div>
          <div className="font-mono text-[10px] text-[#91918c]">
            SOC-GRADE3-CH02-01
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-5">
          {/* Left Title & Learning Goal */}
          <div className="max-w-xl">
            <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#000000] tracking-[-1.2px] leading-tight mb-3">
              교통수단의 발달과 <br className="hidden sm:inline" />
              생활 모습의 변화
            </h1>
            <p className="text-sm text-[#33332e] leading-relaxed">
              옛날과 오늘날의 교통수단이 어떻게 달라졌는지 알아보고, 빨라진 교통수단 덕분에 변화된 우리의 일상과 미래에 등장할 멋진 교통수단을 탐구해 봅시다.
            </p>
          </div>

          {/* Right: Student Info Card (Warm-cream Surface Card #f6f6f3 with 16px Radius) */}
          <div className="bg-[#f6f6f3] border border-[#dadad3] rounded-[16px] p-4 sm:p-5 min-w-[300px] print:bg-white print:border-black">
            <div className="flex items-center justify-between text-xs font-bold text-[#000000] border-b border-[#dadad3] pb-2 mb-3">
              <span className="tracking-tight">학습자 확인란</span>
              <span className="text-[#62625b] font-medium text-[11px]">
                {studentInfo.date}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2 text-xs items-center mb-3">
              <div className="flex items-center gap-1">
                <span className="font-bold text-[#33332e] whitespace-nowrap">3학년</span>
                <input
                  type="text"
                  id="input-class"
                  value={studentInfo.classNum}
                  onChange={(e) => onUpdateStudentInfo({ ...studentInfo, classNum: e.target.value })}
                  placeholder=" "
                  className="w-8 text-center bg-[#ffffff] border border-[#dadad3] rounded-[8px] py-1 font-bold text-[#000000] focus:outline-hidden focus:ring-2 focus:ring-[#435ee5]"
                />
                <span>반</span>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="text"
                  id="input-number"
                  value={studentInfo.studentNum}
                  onChange={(e) => onUpdateStudentInfo({ ...studentInfo, studentNum: e.target.value })}
                  placeholder=" "
                  className="w-8 text-center bg-[#ffffff] border border-[#dadad3] rounded-[8px] py-1 font-bold text-[#000000] focus:outline-hidden focus:ring-2 focus:ring-[#435ee5]"
                />
                <span>번</span>
              </div>
              <div className="col-span-2 flex items-center gap-1.5">
                <span className="font-bold text-[#33332e] whitespace-nowrap">이름:</span>
                <input
                  type="text"
                  id="input-name"
                  value={studentInfo.name}
                  onChange={(e) => onUpdateStudentInfo({ ...studentInfo, name: e.target.value })}
                  placeholder="홍길동"
                  className="w-full text-center bg-[#ffffff] border border-[#dadad3] rounded-[8px] py-1 font-bold text-[#000000] focus:outline-hidden focus:ring-2 focus:ring-[#435ee5]"
                />
              </div>
            </div>

            {/* Score & Stamp preview */}
            <div className="flex items-center justify-between pt-2 border-t border-[#dadad3] text-xs">
              <div className="flex items-center gap-1.5">
                <span className="text-[#62625b] font-medium">평가 결과:</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#ffffff] border border-[#dadad3] text-[#e60023] font-bold text-[11px]">
                  {totalScore !== null && totalScore !== undefined ? `${totalScore}점 / 100점` : '참 잘했어요 💮'}
                </span>
              </div>
              {showAnswers && (
                <span className="text-[11px] font-bold text-[#e60023] bg-[#ffffff] px-2 py-0.5 rounded-full border border-[#e60023]/30">
                  교사용 모드
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Instructions banner */}
        <div className="bg-[#f6f6f3] rounded-[16px] p-3 text-xs text-[#33332e] flex items-center gap-2 border border-[#e5e5e0]">
          <span className="font-bold text-[#ffffff] bg-[#211922] px-2 py-0.5 rounded-full text-[10px] shrink-0">
            학습 안내
          </span>
          <span className="leading-normal">
            각 활동을 차례대로 읽고 옛날과 오늘날의 교통수단을 바르게 가려내며, 미래를 이끌 나만의 탈것을 멋지게 발명해 보세요.
          </span>
        </div>
      </div>
    </header>
  );
};
