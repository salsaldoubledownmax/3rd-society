import React from 'react';
import { Award, X, Printer } from 'lucide-react';

interface GradingModalProps {
  isOpen: boolean;
  onClose: () => void;
  scores: {
    act1Score: number;
    act2Score: number;
    act3Score: number;
    act4Score: number;
    act5Score: number;
    total: number;
  };
  studentName: string;
  onPrint: () => void;
  onViewAnswers: () => void;
}

export const GradingModal: React.FC<GradingModalProps> = ({
  isOpen,
  onClose,
  scores,
  studentName,
  onPrint,
  onViewAnswers
}) => {
  if (!isOpen) return null;

  const getEncouragement = (total: number) => {
    if (total >= 90) {
      return {
        badge: '👑 교통 박사 마스터!',
        message: '대단해요! 교통수단의 역사와 발달 과정을 완벽히 이해했습니다. 미래의 훌륭한 교통 혁신가가 될 자질이 가득해요!',
        badgeStyle: 'bg-[#e60023] text-[#ffffff]'
      };
    } else if (total >= 70) {
      return {
        badge: '🌟 성실한 탐험가!',
        message: '참 잘했어요! 옛날과 오늘날의 교통수단을 깊이 있게 잘 비교했습니다. 조금만 더 복습하면 백점 만점이에요!',
        badgeStyle: 'bg-[#000000] text-[#ffffff]'
      };
    } else {
      return {
        badge: '🌱 쑥쑥 자라는 꿈나무!',
        message: '수고 많았어요! 틀린 문제를 다시 확인하고 정답과 해설을 읽어보면 더욱 멋지게 이해할 수 있어요.',
        badgeStyle: 'bg-[#f6f6f3] text-[#000000] border border-[#dadad3]'
      };
    }
  };

  const evalResult = getEncouragement(scores.total);

  return (
    <div className="no-print fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000000]/60 backdrop-blur-xs">
      <div className="bg-[#ffffff] rounded-[32px] max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#dadad3] relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#62625b] hover:text-[#000000] hover:bg-[#f6f6f3] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e60023] text-white shadow-sm mb-3">
            <Award className="w-6 h-6" />
          </div>
          <div className="text-[11px] font-bold text-[#62625b] uppercase tracking-wider">
            사회과 배움 결과표
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#000000] mt-1 tracking-tight">
            {studentName ? `${studentName} 어린이` : '3학년 배움 친구'}의 성적표
          </h3>

          <div className="mt-4 flex items-baseline justify-center gap-1">
            <span className="text-5xl font-black text-[#000000] tracking-[-1.5px]">
              {scores.total}
            </span>
            <span className="text-sm font-bold text-[#91918c]">/ 100점</span>
          </div>

          <div className={`mt-3 inline-block px-3.5 py-1 rounded-full text-xs font-bold ${evalResult.badgeStyle}`}>
            {evalResult.badge}
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="bg-[#f6f6f3] rounded-[16px] p-4 border border-[#dadad3] space-y-2 mb-5 text-xs font-semibold">
          <div className="flex justify-between items-center text-[#62625b]">
            <span>[활동 1] 옛날 vs 오늘날 구분 (20점)</span>
            <span className="font-bold text-[#000000]">{scores.act1Score}점</span>
          </div>
          <div className="flex justify-between items-center text-[#62625b]">
            <span>[활동 2] 다니는 장소별 분류 (20점)</span>
            <span className="font-bold text-[#000000]">{scores.act2Score}점</span>
          </div>
          <div className="flex justify-between items-center text-[#62625b]">
            <span>[활동 3] 생활 모습 변화 탐구 (25점)</span>
            <span className="font-bold text-[#000000]">{scores.act3Score}점</span>
          </div>
          <div className="flex justify-between items-center text-[#62625b]">
            <span>[활동 4] 수수께끼 & 초성 퀴즈 (15점)</span>
            <span className="font-bold text-[#000000]">{scores.act4Score}점</span>
          </div>
          <div className="flex justify-between items-center text-[#62625b]">
            <span>[활동 5] 미래 교통수단 발명 (20점)</span>
            <span className="font-bold text-[#000000]">{scores.act5Score}점</span>
          </div>
        </div>

        <p className="text-xs text-[#33332e] bg-[#f6f6f3] p-3.5 rounded-[16px] border border-[#dadad3] leading-relaxed text-center mb-6">
          {evalResult.message}
        </p>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              onViewAnswers();
            }}
            className="py-2.5 px-3 rounded-[16px] bg-[#e5e5e0] hover:bg-[#dadad3] text-[#211922] font-bold text-xs transition-colors flex items-center justify-center gap-1"
          >
            정답·해설 확인하기
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onPrint();
            }}
            className="py-2.5 px-3 rounded-[16px] bg-[#e60023] hover:bg-[#cc001f] text-white font-bold text-xs transition-colors flex items-center justify-center gap-1 shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            활동지 인쇄하기
          </button>
        </div>
      </div>
    </div>
  );
};
