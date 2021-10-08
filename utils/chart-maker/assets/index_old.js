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
               title: "Hafta boshidagi soni",
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
               title: "Hafta davomida qo'shilganlar soni",
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
          title: "Foydalanuvchilar soni"
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
               text: "Viloyatlar miqyosida foydalanuvchilar soni statistikasi"
     }],

     dataProvider: [
          { "subscribers": 3000, "newComers": 800, "category": "Andijon vil" },
          { "subscribers": 4106, "newComers": 100, "category": "Buxoro vil" },
          { "subscribers": 6000, "newComers": 300, "category": "Jizzax vil" },
          { "subscribers": 5000, "newComers": 400, "category": "Qashqadaryo vil" },
          { "subscribers": 8000, "newComers": 120, "category": "Navoiy vil" },
          { "subscribers": 4000, "newComers": 900, "category": "Namangan vil" },
          { "subscribers": 8000, "newComers": 700, "category": "Samarqand vil" },
          { "subscribers": 6000, "newComers": 500, "category": "Surxondaryo vil" },
          { "subscribers": 9000, "newComers": 300, "category": "Sirdaryo vil" },
          { "subscribers": 8000, "newComers": 800, "category": "Toshkent vil" },
          { "subscribers": 6000, "newComers": 2000, "category": "Farg'ona vil" },
          { "subscribers": 9000, "newComers": 1500, "category": "Xorazm vil" },
          { "subscribers": 9000, "newComers": 150, "category": "Toshkent sh" }
     ]
})