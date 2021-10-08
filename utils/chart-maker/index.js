const puppeteer = require('puppeteer')
const { writeFile } = require('fs-extra')
const fs = require('fs')

function templateString(dataString){
     return `AmCharts.makeChart("chartdiv", {
          type: "serial",
          categoryField: "category",
          startDuration: 0,
          color: "#000",
          categoryAxis: {
               gridPosition: "start"
          },
          trendLines: [],
          graphs: [
               {
                    balloonText: "[[title]] of [[category]]:[[value]]",
                    fillAlphas: 1,
                    fillColors: "#0D9DF7",
                    id: "AmGraph-1",
                    lineAlpha: 0,
                    title: "Hafta boshidagi holat",
                    type: "column",
                    color: "#0D9DF7",
                    valueField: "subscribers",
               },
               {
                    balloonText: "[[title]] of [[category]]:[[value]]",
                    fillAlphas: 1,
                    fillColors: "#88CCF7",
                    id: "AmGraph-2",
                    lineAlpha: 0,
                    title: "Hafta davomidagi o'sish",
                    type: "column",
                    color: "#88CCF7",
                    valueField: "newComers",
                    fillColorsField: "#000"
               }
          ],
     
          guides: [],
          valueAxes: [{
               id: "left-title",
               stackType: "regular",
               title: "Hafta davomida natijalarini oshirganlar bo'yicha"
          }],
          allLabels: [],
          balloon: {},
          legend: {
               enabled: true,
               useGraphSettings: true
          },
          titles: [{
                    id: "header-title",
                    size: 32,
                    text: "Viloyatlar miqyosida yuqori natijali abiturientlar statistikasi"
          }],
     
          dataProvider: [
               ${dataString}
          ]
     })`
}

// data = [{ subscribers: 12344, newComers: 4322, provinceName: "Andijon vil"}, {...}, {...}]
function makeChart(data, imageName){
     let result = ''
     let str = ''
     
     for(let i=0; i < data.length; i++){
          const obj = data[i]
          str += `{ "subscribers": ${obj.subscribers}, "newComers": ${obj.newComers}, "category": "${obj.provinceName}" },`
     }

     result = templateString(str)

     fs.writeFileSync(__dirname+'/assets/index.js', result)
     
     return puppeteer.launch()
     .then(async browser => {
          browser.newPage()
          .then( async page => {
               page.setViewport({ width: 1920, height: 1080 })
               .then( async () => {
                    page.goto('file://' + __dirname + '/assets/index.html')
                    .then( async () => {
                         page.screenshot({})
                         .then( async imageBuffer => {
                              browser.close()
                              .then( async () => {
                                   writeFile(imageName, imageBuffer)
                              })
                         })
                    })
               })
          })
     })
}

module.exports = { makeChart }