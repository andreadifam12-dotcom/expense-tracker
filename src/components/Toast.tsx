import React from 'react';
import './Toast.css'; // Assuming you have some styles for the Toast component

interface ToastProps {
  message: string;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="toast">
      {message}
    </div>
  );
};

export default Toast;
