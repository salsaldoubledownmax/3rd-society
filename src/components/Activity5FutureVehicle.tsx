import React, { useRef, useState, useEffect } from 'react';
import { FutureVehicleDesign } from '../types';
import { Pencil, Eraser, RotateCcw, Sparkles, Wand2, Stamp } from 'lucide-react';

interface Activity5Props {
  design: FutureVehicleDesign;
  onUpdateDesign: (design: FutureVehicleDesign) => void;
  showAnswers: boolean;
}

export const Activity5FutureVehicle: React.FC<Activity5Props> = ({
  design,
  onUpdateDesign,
  showAnswers
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState<'pen' | 'eraser'>('pen');
  const [color, setColor] = useState('#e60023');
  const [lineWidth, setLineWidth] = useState(3);
  const [selectedStamp, setSelectedStamp] = useState<string | null>(null);

  const colors = ['#000000', '#e60023', '#2563eb', '#16a34a', '#d97706', '#9333ea'];
  const stamps = [
    { label: '날개', icon: '🪽' },
    { label: '로켓', icon: '🚀' },
    { label: '도심항공', icon: '🛸' },
    { label: '친환경', icon: '🌿' },
    { label: '태양광', icon: '☀️' },
    { label: '전기모터', icon: '⚡' }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    if (selectedStamp) {
      ctx.font = '28px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(selectedStamp, x, y);
      saveCanvasState();
      return;
    }

    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || selectedStamp) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (tool === 'pen') {
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
    } else {
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = lineWidth * 4;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    saveCanvasState();
  };

  const saveCanvasState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    onUpdateDesign({ ...design, drawingDataUrl: dataUrl });
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    saveCanvasState();
  };

  const applySampleInvention = () => {
    onUpdateDesign({
      name: '태양광 에코 플라잉카 (하늘택시)',
      environment: '하늘과 도로를 자유롭게 오감',
      powerType: '지붕의 초경량 태양광 패널과 친환경 수소 연료전지',
      specialFeature: '차가 막히면 버튼 하나로 날개가 펼쳐져 하늘길로 이동하며 인공지능이 충돌을 자동 방지함',
      benefit: '교통 체증이 사라져 이동 시간이 절약되고 매연이 전혀 없어 지구를 건강하게 지킴'
    });
  };

  return (
    <section className="bg-[#ffffff] border border-[#dadad3] rounded-[32px] p-6 sm:p-8 mb-8 relative print:border-2 print:border-black print:p-4 print:rounded-none print-break-inside-avoid">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#e5e5e0] pb-4 mb-5">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-full bg-[#000000] text-[#ffffff] flex items-center justify-center font-black text-xs shrink-0">
            5
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-[#000000] tracking-[-0.8px]">
            [활동 5] 내가 상상하는 미래의 새로운 교통수단 발명하기
          </h2>
        </div>
        <span className="px-3 py-1 rounded-full bg-[#f6f6f3] border border-[#dadad3] text-xs font-bold text-[#211922]">
          창의 탐구 20점
        </span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <p className="text-sm text-[#62625b] leading-relaxed">
          환경을 아끼고 사람들을 더 안전하고 편리하게 해줄 미래의 교통수단을 상상하여 멋지게 그리고 소개해 보세요.
        </p>

        <button
          type="button"
          onClick={applySampleInvention}
          className="no-print shrink-0 text-xs font-bold text-[#211922] bg-[#f6f6f3] hover:bg-[#e5e5e0] border border-[#dadad3] px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition-colors"
        >
          <Wand2 className="w-3.5 h-3.5 text-[#e60023]" />
          예시 작품 채우기
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Drawing Canvas Area */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#000000] flex items-center gap-1.5">
              <Pencil className="w-3.5 h-3.5 text-[#e60023]" />
              상상화 그리기 도화지
            </span>
            <span className="text-[11px] text-[#62625b]">
              마우스나 터치로 그림 그리기
            </span>
          </div>

          {/* Canvas Tools Toolbar */}
          <div className="no-print bg-[#f6f6f3] p-2.5 rounded-t-[16px] border border-[#dadad3] flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => {
                  setTool('pen');
                  setSelectedStamp(null);
                }}
                className={`px-3 py-1.5 rounded-[16px] font-bold flex items-center gap-1 transition-colors ${
                  tool === 'pen' && !selectedStamp
                    ? 'bg-[#000000] text-[#ffffff]'
                    : 'bg-[#ffffff] text-[#211922] border border-[#dadad3]'
                }`}
                title="펜 도구"
              >
                <Pencil className="w-3.5 h-3.5" />
                펜
              </button>

              <button
                type="button"
                onClick={() => {
                  setTool('eraser');
                  setSelectedStamp(null);
                }}
                className={`px-3 py-1.5 rounded-[16px] font-bold flex items-center gap-1 transition-colors ${
                  tool === 'eraser'
                    ? 'bg-[#000000] text-[#ffffff]'
                    : 'bg-[#ffffff] text-[#211922] border border-[#dadad3]'
                }`}
                title="지우개"
              >
                <Eraser className="w-3.5 h-3.5" />
                지우개
              </button>

              {/* Color dots */}
              <div className="flex items-center gap-1 pl-1 border-l border-[#dadad3]">
                {colors.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => {
                      setColor(c);
                      setTool('pen');
                      setSelectedStamp(null);
                    }}
                    style={{ backgroundColor: c }}
                    className={`w-5 h-5 rounded-full transition-transform ${
                      color === c && tool === 'pen' && !selectedStamp ? 'scale-125 ring-2 ring-[#000000]' : ''
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Clear button */}
            <button
              type="button"
              onClick={clearCanvas}
              className="px-3 py-1.5 rounded-[16px] bg-[#ffffff] hover:bg-[#e5e5e0] text-[#e60023] border border-[#dadad3] font-bold flex items-center gap-1"
              title="도화지 비우기"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              지우기
            </button>
          </div>

          {/* Stamps Bar */}
          <div className="no-print bg-[#f6f6f3] border-x border-[#dadad3] px-2.5 py-1.5 flex items-center gap-1.5 text-xs overflow-x-auto">
            <span className="text-[10px] font-bold text-[#62625b] shrink-0 flex items-center gap-0.5">
              <Stamp className="w-3 h-3 text-[#000000]" /> 도장:
            </span>
            {stamps.map((s) => (
              <button
                key={s.label}
                type="button"
                onClick={() => {
                  setSelectedStamp(selectedStamp === s.icon ? null : s.icon);
                }}
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border transition-all ${
                  selectedStamp === s.icon
                    ? 'bg-[#000000] text-[#ffffff] border-[#000000]'
                    : 'bg-[#ffffff] text-[#211922] border-[#dadad3] hover:bg-[#e5e5e0]'
                }`}
              >
                {s.icon} {s.label}
              </button>
            ))}
          </div>

          {/* Canvas */}
          <div className="relative border border-[#dadad3] rounded-b-[16px] overflow-hidden bg-[#ffffff]">
            <canvas
              ref={canvasRef}
              width={500}
              height={320}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className="w-full h-[260px] sm:h-[300px] cursor-crosshair touch-none block"
            />
            {/* Guide watermark for paper print */}
            <div className="print-only hidden absolute inset-0 border-2 border-dashed border-black m-2 flex items-center justify-center text-black text-sm">
              [이곳에 미래의 교통수단을 자유롭게 그려보세요]
            </div>
          </div>
        </div>

        {/* Invention Description Form */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-[#f6f6f3] p-5 rounded-[16px] border border-[#dadad3]">
          <div>
            <div className="font-bold text-sm text-[#000000] mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#e60023]" />
              미래 교통수단 설계 카드
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label htmlFor="future-name" className="block font-bold text-[#000000] mb-1">
                  1. 발명품의 이름:
                </label>
                <input
                  type="text"
                  id="future-name"
                  value={design.name}
                  onChange={(e) => onUpdateDesign({ ...design, name: e.target.value })}
                  placeholder="예: 태양광 에코 플라잉카"
                  className="w-full px-3.5 py-2 rounded-[16px] border border-[#dadad3] bg-[#ffffff] font-bold text-[#000000] focus:outline-hidden focus:ring-2 focus:ring-[#435ee5]"
                />
              </div>

              <div>
                <label htmlFor="future-place" className="block font-bold text-[#000000] mb-1">
                  2. 주로 이동하는 공간 (땅, 물, 하늘, 우주 등):
                </label>
                <input
                  type="text"
                  id="future-place"
                  value={design.environment}
                  onChange={(e) => onUpdateDesign({ ...design, environment: e.target.value })}
                  placeholder="예: 하늘과 도로를 자유롭게 오감"
                  className="w-full px-3.5 py-2 rounded-[16px] border border-[#dadad3] bg-[#ffffff] text-[#000000] font-medium focus:outline-hidden focus:ring-2 focus:ring-[#435ee5]"
                />
              </div>

              <div>
                <label htmlFor="future-power" className="block font-bold text-[#000000] mb-1">
                  3. 움직이는 동력 (친환경 에너지 등):
                </label>
                <input
                  type="text"
                  id="future-power"
                  value={design.powerType}
                  onChange={(e) => onUpdateDesign({ ...design, powerType: e.target.value })}
                  placeholder="예: 태양광 발전 패널, 수소 배터리"
                  className="w-full px-3.5 py-2 rounded-[16px] border border-[#dadad3] bg-[#ffffff] text-[#000000] font-medium focus:outline-hidden focus:ring-2 focus:ring-[#435ee5]"
                />
              </div>

              <div>
                <label htmlFor="future-feature" className="block font-bold text-[#000000] mb-1">
                  4. 특별한 기능 (어떤 신기한 능력이 있나요?):
                </label>
                <textarea
                  id="future-feature"
                  rows={2}
                  value={design.specialFeature}
                  onChange={(e) => onUpdateDesign({ ...design, specialFeature: e.target.value })}
                  placeholder="예: 버튼 하나로 날개가 펼쳐져 하늘로 날아오름"
                  className="w-full px-3.5 py-2 rounded-[16px] border border-[#dadad3] bg-[#ffffff] text-[#000000] font-medium focus:outline-hidden focus:ring-2 focus:ring-[#435ee5] resize-none"
                />
              </div>

              <div>
                <label htmlFor="future-benefit" className="block font-bold text-[#000000] mb-1">
                  5. 우리 생활에 주는 편리함과 좋은 점:
                </label>
                <textarea
                  id="future-benefit"
                  rows={2}
                  value={design.benefit}
                  onChange={(e) => onUpdateDesign({ ...design, benefit: e.target.value })}
                  placeholder="예: 매연이 전혀 없고 교통 체증이 해결됨"
                  className="w-full px-3.5 py-2 rounded-[16px] border border-[#dadad3] bg-[#ffffff] text-[#000000] font-medium focus:outline-hidden focus:ring-2 focus:ring-[#435ee5] resize-none"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#dadad3] text-[11px] text-[#33332e] font-medium bg-[#ffffff] p-3 rounded-[16px] border border-[#dadad3]">
            💡 <strong className="text-[#000000]">배움 팁:</strong> 환경 오염을 줄이는 친환경 에너지와 승객의 안전을 지켜주는 첨단 센서를 함께 생각해보면 더욱 훌륭한 발명품이 됩니다.
          </div>
        </div>
      </div>
    </section>
  );
};
