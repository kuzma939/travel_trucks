import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Оновлюємо стан, щоб відобразити резервний UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Тут можна записати помилку до зовнішнього сервісу
    console.error("Помилка в ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Щось пішло не так.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;