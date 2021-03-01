function formatDate(date?: string): string {
  const dateToFormat = date ? new Date(date) : new Date();

  return Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(dateToFormat);
}

export default formatDate;
