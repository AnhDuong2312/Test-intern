import { useEffect, useState } from 'react'
import '../CSS/shared/Toast.css'

interface ToastProps {
  message: string
  duration?: number
  onClose: () => void
}

function Toast({ message, duration = 2000, onClose }: ToastProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(onClose, 300) 
    }, duration)
    return () => clearTimeout(timer)
  }, [duration, onClose])

  return visible ? (
    <div className="toast-notification">
      <span>{message}</span>
      <div className="toast-timer"></div>
    </div>
  ) : null
}

export default Toast
