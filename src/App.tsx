import React, { useState } from 'react';
import {
  StudentInfo,
  VehicleEra,
  VehiclePlace,
  FutureVehicleDesign,
  EvaluationItem
} from './types';
import {
  VEHICLE_ITEMS,
  QUIZ_QUESTIONS,
  RIDDLE_QUESTIONS,
  INITIAL_EVALUATIONS
} from './data/worksheetData';
import { HeaderSection } from './components/HeaderSection';
import { Activity1PastPresent } from './components/Activity1PastPresent';
import { Activity2LocationGroup } from './components/Activity2LocationGroup';
import { Activity3ChangeQuiz } from './components/Activity3ChangeQuiz';
import { Activity4RiddleTrivia } from './components/Activity4RiddleTrivia';
import { Activity5FutureVehicle } from './components/Activity5FutureVehicle';
import { SelfEvaluationSection } from './components/SelfEvaluationSection';
import { GradingModal } from './components/GradingModal';
import { Printer, CheckCircle2 } from 'lucide-react';

export default function App() {
  // Student Info
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({
    grade: '3',
    classNum: '1',
    studentNum: '7',
    name: '',
    date: new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })
  });

  // User Answers
  const [act1Selections, setAct1Selections] = useState<Record<string, VehicleEra>>({});
  const [act2Locations, setAct2Locations] = useState<Record<string, VehiclePlace>>({});
  const [act3Answers, setAct3Answers] = useState<Record<number, string>>({});
  const [act4Answers, setAct4Answers] = useState<Record<number, string>>({});
  const [act5Design, setAct5Design] = useState<FutureVehicleDesign>({
    name: '',
    powerType: '',
    environment: '',
    specialFeature: '',
    benefit: ''
  });
  const [evaluations, setEvaluations] = useState<EvaluationItem[]>(INITIAL_EVALUATIONS);
  const [teacherComment, setTeacherComment] = useState<string>('');

  // Mode Toggles
  const [showAnswers, setShowAnswers] = useState<boolean>(false);
  const [isGraded, setIsGraded] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [scores, setScores] = useState({
    act1Score: 0,
    act2Score: 0,
    act3Score: 0,
    act4Score: 0,
    act5Score: 0,
    total: 0
  });

  // Handlers
  const handleSelectEra = (id: string, era: VehicleEra) => {
    setAct1Selections((prev) => ({ ...prev, [id]: era }));
  };

  const handleSelectPlace = (id: string, place: VehiclePlace) => {
    setAct2Locations((prev) => ({ ...prev, [id]: place }));
  };

  const handleSelectQuizAnswer = (id: number, answer: string) => {
    setAct3Answers((prev) => ({ ...prev, [id]: answer }));
  };

  const handleRiddleAnswer = (id: number, text: string) => {
    setAct4Answers((prev) => ({ ...prev, [id]: text }));
  };

  const handleEvaluationRating = (id: number, rating: number) => {
    setEvaluations((prev) =>
      prev.map((item) => (item.id === id ? { ...item, rating } : item))
    );
  };

  // Grade Calculation
  const handleGradeWorksheet = () => {
    // Activity 1: 20 pts (8 items -> 2.5 each)
    let a1 = 0;
    VEHICLE_ITEMS.forEach((item) => {
      if (act1Selections[item.id] === item.era) {
        a1 += 2.5;
      }
    });

    // Activity 2: 20 pts (8 items -> 2.5 each)
    let a2 = 0;
    VEHICLE_ITEMS.forEach((item) => {
      if (act2Locations[item.id] === item.place) {
        a2 += 2.5;
      }
    });

    // Activity 3: 25 pts (6 questions)
    let a3 = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (act3Answers[q.id] === q.correctAnswer) {
        a3 += 25 / QUIZ_QUESTIONS.length;
      }
    });

    // Activity 4: 15 pts (5 riddles -> 3 each)
    let a4 = 0;
    RIDDLE_QUESTIONS.forEach((r) => {
      const userText = (act4Answers[r.id] || '').trim().replace(/\s+/g, '');
      const correctText = r.answer.replace(/\s+/g, '');
      if (userText === correctText) {
        a4 += 3;
      }
    });

    // Activity 5: 20 pts (creative points)
    let a5 = 0;
    if (act5Design.name.trim().length > 0) a5 += 5;
    if (act5Design.powerType.trim().length > 0) a5 += 5;
    if (act5Design.specialFeature.trim().length > 0) a5 += 5;
    if (act5Design.benefit.trim().length > 0 || act5Design.drawingDataUrl) a5 += 5;

    const roundA1 = Math.round(a1);
    const roundA2 = Math.round(a2);
    const roundA3 = Math.round(a3);
    const roundA4 = Math.round(a4);
    const roundA5 = Math.round(a5);
    const totalScore = Math.min(100, roundA1 + roundA2 + roundA3 + roundA4 + roundA5);

    setScores({
      act1Score: roundA1,
      act2Score: roundA2,
      act3Score: roundA3,
      act4Score: roundA4,
      act5Score: roundA5,
      total: totalScore
    });

    setIsGraded(true);
    setIsModalOpen(true);
  };

  const handleReset = () => {
    if (window.confirm('작성한 모든 답안과 그림을 초기화할까요?')) {
      setAct1Selections({});
      setAct2Locations({});
      setAct3Answers({});
      setAct4Answers({});
      setAct5Design({
        name: '',
        powerType: '',
        environment: '',
        specialFeature: '',
        benefit: ''
      });
      setIsGraded(false);
      setShowAnswers(false);
      setScores({ act1Score: 0, act2Score: 0, act3Score: 0, act4Score: 0, act5Score: 0, total: 0 });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#f6f6f3] text-[#211922] py-6 px-3 sm:px-6 lg:px-8 print:p-0 print:bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header & Student Metadata */}
        <HeaderSection
          studentInfo={studentInfo}
          onUpdateStudentInfo={setStudentInfo}
          showAnswers={showAnswers}
          onToggleShowAnswers={() => setShowAnswers(!showAnswers)}
          onGradeWorksheet={handleGradeWorksheet}
          onReset={handleReset}
          totalScore={isGraded ? scores.total : null}
          onPrint={handlePrint}
        />

        <main>
          {/* Activity 1 */}
          <Activity1PastPresent
            items={VEHICLE_ITEMS.slice(0, 8)}
            userSelections={act1Selections}
            onSelectEra={handleSelectEra}
            showAnswers={showAnswers}
            isGraded={isGraded}
          />

          {/* Activity 2 */}
          <Activity2LocationGroup
            items={VEHICLE_ITEMS.slice(0, 8)}
            userLocations={act2Locations}
            onSelectPlace={handleSelectPlace}
            showAnswers={showAnswers}
            isGraded={isGraded}
          />

          {/* Activity 3 */}
          <Activity3ChangeQuiz
            questions={QUIZ_QUESTIONS}
            userAnswers={act3Answers}
            onSelectAnswer={handleSelectQuizAnswer}
            showAnswers={showAnswers}
            isGraded={isGraded}
          />

          {/* Activity 4 */}
          <Activity4RiddleTrivia
            riddles={RIDDLE_QUESTIONS}
            userAnswers={act4Answers}
            onAnswerChange={handleRiddleAnswer}
            showAnswers={showAnswers}
            isGraded={isGraded}
          />

          {/* Activity 5 */}
          <Activity5FutureVehicle
            design={act5Design}
            onUpdateDesign={setAct5Design}
            showAnswers={showAnswers}
          />

          {/* Self & Teacher Evaluation */}
          <SelfEvaluationSection
            evaluations={evaluations}
            onRatingChange={handleEvaluationRating}
            teacherComment={teacherComment}
            onCommentChange={setTeacherComment}
          />
        </main>

        {/* Bottom Floating Bar */}
        <div className="no-print sticky bottom-4 z-40 mt-8">
          <div className="bg-[#211922]/95 backdrop-blur-md text-[#ffffff] px-5 py-3 rounded-[16px] border border-[#dadad3]/30 shadow-xl flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e60023]" />
              <span className="text-xs font-bold text-[#f6f6f3]">
                초등 3학년 사회 · 1단원 2. 우리가 알아보는 교통수단
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                id="footer-btn-print"
                onClick={handlePrint}
                className="px-3.5 py-2 rounded-[16px] text-xs font-bold bg-[#ffffff]/10 hover:bg-[#ffffff]/20 text-[#ffffff] border border-[#ffffff]/10 transition-colors flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                A4 인쇄
              </button>

              <button
                type="button"
                id="footer-btn-grade"
                onClick={handleGradeWorksheet}
                className="px-4 py-2 rounded-[16px] text-xs font-bold bg-[#e60023] hover:bg-[#cc001f] active:bg-[#b5001c] text-[#ffffff] transition-all flex items-center gap-1.5 shadow-sm"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                다 풀었어요! 채점하기
              </button>
            </div>
          </div>
        </div>

        {/* Authentic Worksheet Footer Information */}
        <footer className="mt-8 text-center text-xs text-[#62625b] border-t border-[#dadad3] pt-6 pb-12 print:mt-4 print:text-[10px] print:pt-2">
          <p className="font-bold text-[#000000]">
            [초등학교 3학년 사회과 교육과정 연계] 2. 우리가 알아보는 교통과 통신수단의 발달
          </p>
          <p className="text-[11px] text-[#91918c] mt-1">
            본 학습지는 초등학교 수업 현장에서 교실 발표, 모둠 탐구, 원격 학습 및 A4 종이 출력용으로 자유롭게 활용할 수 있습니다.
          </p>
        </footer>

        {/* Score & Encouragement Modal */}
        <GradingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          scores={scores}
          studentName={studentInfo.name}
          onPrint={handlePrint}
          onViewAnswers={() => setShowAnswers(true)}
        />
      </div>
    </div>
  );
}
