import { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

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
    console.error("ErrorBoundary caught error:", error, errorInfo);

    // If dynamic chunk import failed (e.g. network change or new build chunks)
    const isChunkError =
      error.message?.includes("Failed to fetch dynamically imported module") ||
      error.message?.includes("Loading chunk") ||
      error.message?.includes("network error");

    if (isChunkError) {
      const isRetried = sessionStorage.getItem("chunk_reload_retry");
      if (!isRetried) {
        sessionStorage.setItem("chunk_reload_retry", "true");
        window.location.reload();
      }
    }
  }

  private handleReload = () => {
    sessionStorage.removeItem("chunk_reload_retry");
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-200 text-center">
            <div className="w-14 h-14 rounded-full bg-red-50 text-[#8B1D1D] mx-auto flex items-center justify-center mb-4">
              <AlertCircle className="w-7 h-7" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2 font-display">
              Connection Interrupted
            </h2>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Your network connection changed or was briefly interrupted while loading the page assets.
            </p>
            <button
              onClick={this.handleReload}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#8B1D1D] text-white font-semibold hover:bg-[#721717] transition-colors shadow-sm"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reload Page</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
