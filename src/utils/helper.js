export const formatFileSize = (size, units = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], delimiter = '') => {
  const threshold = 1024
  size = size * threshold
  const i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(threshold))
  return (size / Math.pow(threshold, i)).toFixed(2) * 1 + delimiter + units[i]
}
