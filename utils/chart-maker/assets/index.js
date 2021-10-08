AmCharts.makeChart("chartdiv", {
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
               { "subscribers": 300, "newComers": 8, "category": "Andijon vil" },{ "subscribers": 416, "newComers": 13, "category": "Buxoro vil" },{ "subscribers": 600, "newComers": 32, "category": "Jizzax vil" },{ "subscribers": 530, "newComers": 4, "category": "Qashqadaryo vil" },{ "subscribers": 834, "newComers": 12, "category": "Navoiy vil" },{ "subscribers": 405, "newComers": 9, "category": "Namangan vil" },{ "subscribers": 800, "newComers": 7, "category": "Samarqand vil" },{ "subscribers": 600, "newComers": 5, "category": "Surxondaryo vil" },{ "subscribers": 900, "newComers": 3, "category": "Sirdaryo vil" },{ "subscribers": 801, "newComers": 8, "category": "Toshkent vil" },{ "subscribers": 660, "newComers": 20, "category": "Farg'ona vil" },{ "subscribers": 980, "newComers": 15, "category": "Xorazm vil" },{ "subscribers": 907, "newComers": 15, "category": "Toshkent sh" },
          ]
     })