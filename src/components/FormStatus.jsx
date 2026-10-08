import { CheckCircle2, AlertCircle } from 'lucide-react'

export default function FormStatus({ status, successMessage }) {
  if (!status) return null

  const isSuccess = status === 'success'
  const isError = typeof status === 'string' && status !== 'success'

  if (!isSuccess && !isError) return null

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10,
        padding: '14px 16px',
        borderRadius: 'var(--radius-sm)',
        marginBottom: 18,
        fontSize: 14.5,
        background: isSuccess ? 'var(--color-primary-soft)' : 'var(--color-accent-soft)',
        color: isSuccess ? 'var(--color-primary-dark)' : '#A85A2E',
      }}
    >
      {isSuccess ? <CheckCircle2 size={20} style={{ flexShrink: 0 }} /> : <AlertCircle size={20} style={{ flexShrink: 0 }} />}
      <span>{isSuccess ? successMessage : status}</span>
    </div>
  )
}
