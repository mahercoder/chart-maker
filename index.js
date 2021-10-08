const { ChartMaker } = require('./utils')

const DATA = [     
  { "subscribers": 300, "newComers": 8, "provinceName": "Andijon vil" },
  { "subscribers": 416, "newComers": 13, "provinceName": "Buxoro vil" },
  { "subscribers": 600, "newComers": 32, "provinceName": "Jizzax vil" },
  { "subscribers": 530, "newComers": 4, "provinceName": "Qashqadaryo vil" },
  { "subscribers": 834, "newComers": 12, "provinceName": "Navoiy vil" },
  { "subscribers": 405, "newComers": 9, "provinceName": "Namangan vil" },
  { "subscribers": 800, "newComers": 7, "provinceName": "Samarqand vil" },
  { "subscribers": 600, "newComers": 5, "provinceName": "Surxondaryo vil" },
  { "subscribers": 900, "newComers": 3, "provinceName": "Sirdaryo vil" },
  { "subscribers": 801, "newComers": 8, "provinceName": "Toshkent vil" },
  { "subscribers": 660, "newComers": 20, "provinceName": "Farg'ona vil" },
  { "subscribers": 980, "newComers": 15, "provinceName": "Xorazm vil" },
  { "subscribers": 907, "newComers": 15, "provinceName": "Toshkent sh" }
]

// imageName -> path and file name
ChartMaker.makeChart(DATA, 'stat.jpg')