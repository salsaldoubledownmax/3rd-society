export type VehicleEra = 'past' | 'present';
export type VehiclePlace = 'land' | 'water' | 'air';

export interface VehicleItem {
  id: string;
  name: string;
  era: VehicleEra;
  place: VehiclePlace;
  powerSource: string;
  description: string;
  features: string[];
  iconType: string;
}

export interface StudentInfo {
  grade: string;
  classNum: string;
  studentNum: string;
  name: string;
  date: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  type: 'ox' | 'blank' | 'choice';
  options?: string[];
  correctAnswer: string;
  explanation: string;
  hint?: string;
}

export interface RiddleQuestion {
  id: number;
  clue: string;
  initialConsonants: string; // 초성 힌트 (예: ㄱㅁ)
  answer: string;
  hint: string;
  iconType: string;
}

export interface FutureVehicleDesign {
  name: string;
  powerType: string;
  environment: string; // 이동하는 곳 (하늘, 바다, 땅 등)
  specialFeature: string;
  benefit: string;
  drawingDataUrl?: string;
}

export interface EvaluationItem {
  id: number;
  criteria: string;
  rating: number; // 1, 2, 3
}
