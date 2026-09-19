import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { Check, Lightbulb } from 'lucide-react';

interface Activity3Props {
  questions: QuizQuestion[];
  userAnswers: Record<number, string>;
  onSelectAnswer: (id: number, answer: string) => void;
  showAnswers: boolean;
  isGraded: boolean;
}

export const Activity3ChangeQuiz: React.FC<Activity3Props> = ({
  questions,
  userAnswers,
  onSelectAnswer,
  showAnswers,
  isGraded
}) => {
  const [activeHintId, setActiveHintId] = useState<number | null>(null);

  const toggleHint = (id: number) => {
    setActiveHintId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-[#ffffff] border border-[#dadad3] rounded-[32px] p-6 sm:p-8 mb-8 relative print:border-2 print:border-black print:p-4 print:rounded-none print-break-inside-avoid">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#e5e5e0] pb-4 mb-5">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-full bg-[#000000] text-[#ffffff] flex items-center justify-center font-black text-xs shrink-0">
            3
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-[#000000] tracking-[-0.8px]">
            [활동 3] 교통수단 발달과 생활 모습의 변화 탐구
          </h2>
        </div>
        <span className="px-3 py-1 rounded-full bg-[#f6f6f3] border border-[#dadad3] text-xs font-bold text-[#211922]">
          배점 25점
        </span>
      </div>

      <p className="text-sm text-[#62625b] mb-6 leading-relaxed">
        교통수단이 발달하면서 우리 생활은 어떻게 달라졌을까요? 알맞은 낱말을 고르거나 O, X를 선택해 봅시다.
      </p>

      <div className="space-y-4">
        {questions.map((q, idx) => {
          const userAnswer = userAnswers[q.id];
          const isCorrect = userAnswer === q.correctAnswer;
          const displayAnswer = showAnswers ? q.correctAnswer : userAnswer;

          return (
            <div
              key={q.id}
              className={`p-5 rounded-[16px] border transition-all ${
                isGraded
                  ? isCorrect
                    ? 'border-[#103c25] bg-[#c7f0da]/30'
                    : 'border-[#cc001f] bg-[#fbfbf9]'
                  : 'border-[#dadad3] bg-[#f6f6f3]'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-start gap-2.5">
                  <span className="font-extrabold text-sm text-[#000000] shrink-0 mt-0.5">
                    ({idx + 1})
                  </span>
                  <div className="text-sm sm:text-base font-bold text-[#000000] leading-snug tracking-tight">
                    {q.question}
                  </div>
                </div>

                {q.hint && (
                  <button
                    type="button"
                    onClick={() => toggleHint(q.id)}
                    className="no-print shrink-0 text-xs text-[#000000] bg-[#ffffff] hover:bg-[#e5e5e0] border border-[#dadad3] px-3 py-1 rounded-full font-bold flex items-center gap-1 transition-colors"
                    title="힌트 보기"
                  >
                    <Lightbulb className="w-3.5 h-3.5 text-[#e60023]" />
                    힌트
                  </button>
                )}
              </div>

              {/* Hint Box */}
              {activeHintId === q.id && q.hint && (
                <div className="no-print my-3 p-3 rounded-[16px] bg-[#ffffff] border border-[#dadad3] text-xs text-[#33332e] flex items-center gap-2">
                  <span className="font-bold text-[#e60023]">💡 힌트:</span>
                  <span>{q.hint}</span>
                </div>
              )}

              {/* Options */}
              <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-[#e5e5e0]">
                <span className="text-xs font-bold text-[#62625b] mr-1">
                  선택:
                </span>
                {q.options?.map((opt) => {
                  const isSelected = displayAnswer === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      id={`btn-q${q.id}-opt-${opt}`}
                      onClick={() => onSelectAnswer(q.id, opt)}
                      className={`px-4 py-2 rounded-[16px] text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                        isSelected
                          ? q.type === 'ox'
                            ? opt === 'O'
                              ? 'bg-[#e60023] text-[#ffffff] shadow-xs'
                              : 'bg-[#000000] text-[#ffffff] shadow-xs'
                            : 'bg-[#e60023] text-[#ffffff] shadow-xs'
                          : 'bg-[#ffffff] hover:bg-[#e5e5e0] text-[#211922] border border-[#dadad3]'
                      }`}
                    >
                      {opt}
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </button>
                  );
                })}

                {/* Print Blank */}
                <div className="print-only hidden ml-auto text-sm font-bold text-[#000000]">
                  정답: (　　　　)
                </div>
              </div>

              {/* Teacher Explanation Mode */}
              {(isGraded || showAnswers) && (
                <div className="mt-3.5 pt-3 border-t border-[#dadad3] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#e60023]">
                      [정답] {q.correctAnswer}
                    </span>
                    <span className="text-[#62625b]">
                      | {q.explanation}
                    </span>
                  </div>
                  {isGraded && (
                    <span className={`font-bold ${isCorrect ? 'text-[#103c25]' : 'text-[#cc001f]'}`}>
                      {isCorrect ? '정답입니다! 👏' : '다시 확인해 보세요 ✍️'}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
