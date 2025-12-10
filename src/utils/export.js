export const exportTemplate = (content, filename) => {
  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export const exportAsPDF = (content, filename) => {
  // This would typically use a library like jsPDF
  // For now, we'll export as text
  exportTemplate(content, filename.replace('.pdf', '.txt'))
}

export const exportChecklist = (items, filename = 'solana-socials-checklist.txt') => {
  const content = items.map((item, i) => `${i + 1}. ${item}`).join('\n')
  exportTemplate(content, filename)
}

