const STORAGE_KEY = 'sushiCounterState'

export function getStoredCount(): { [key: string]: number } {
  if (typeof window === 'undefined') return {}
  const storedData = localStorage.getItem(STORAGE_KEY)
  return storedData ? JSON.parse(storedData) : {}
}

export function setStoredCount(counts: { [key: string]: number }): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(counts))
}

