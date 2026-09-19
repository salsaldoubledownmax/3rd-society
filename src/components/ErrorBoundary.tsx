import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RotateCcw, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Worksheet Uncaught Error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#f6f6f3] text-[#211922]">
          <div className="max-w-md w-full bg-[#ffffff] border border-[#dadad3] rounded-[32px] p-8 text-center shadow-lg">
            <div className="w-12 h-12 rounded-full bg-[#e60023] text-white flex items-center justify-center mx-auto mb-4 font-black">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-[#000000] mb-2 tracking-tight">
              화면을 불러오는 중 오류가 발생했습니다
            </h2>
            <p className="text-xs text-[#62625b] mb-6 leading-relaxed">
              활동지 페이지를 새로고침하여 다시 시작해 보세요.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[16px] bg-[#e60023] hover:bg-[#cc001f] text-white font-bold text-xs shadow-xs transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              페이지 새로고침
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
