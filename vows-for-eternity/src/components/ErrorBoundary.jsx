import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
    this.reset = this.reset.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // show the raw error in console (devtools) and keep it in state for UI
    console.error("Uncaught error (ErrorBoundary):", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  reset() {
    this.setState({ hasError: false, error: null, errorInfo: null });
  }

  render() {
    if (this.state.hasError) {
      const { error, errorInfo } = this.state;
      return (
        <div style={{ padding: 24, fontFamily: "system-ui, Arial" }}>
          <h1>Something went wrong.</h1>
          <p>
            The app caught an exception — the full error and component stack are
            shown below. (This is temporary for debugging.)
          </p>

          <button onClick={this.reset} style={{ marginBottom: 12 }}>
            Try again (reset)
          </button>

          <div style={{ marginTop: 12 }}>
            <strong>Error:</strong>
            <pre style={{ whiteSpace: "pre-wrap", background: "#f7f7f7", padding: 12, borderRadius: 6 }}>
              {error ? error.toString() : "—"}
            </pre>

            <strong>Component stack:</strong>
            <pre style={{ whiteSpace: "pre-wrap", background: "#f7f7f7", padding: 12, borderRadius: 6 }}>
              {errorInfo && errorInfo.componentStack ? errorInfo.componentStack : "—"}
            </pre>

            <strong>Full JS stack (if available):</strong>
            <pre style={{ whiteSpace: "pre-wrap", background: "#f7f7f7", padding: 12, borderRadius: 6 }}>
              {error && error.stack ? error.stack : "—"}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

