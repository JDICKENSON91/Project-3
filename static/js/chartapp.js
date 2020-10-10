// from data.js





var CityData = data;

function createchart() {


    

        //var City = "Perth"

        var M = (function() {

        let i = 0;
            for (let i = 0; i <= CityData.length; i++) {
                if (CityData[i].City_Area = d3.select("#city-chart-filter").property("value")) 
                {break;}
                else i++;
                }
                return i
           
            }
            
        );


        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
        type: 'line',
        data: {
        labels: ['1950', '1960', '1970', '1980', '1990', '2000','2010','2020','2030'],
        datasets: [{
            label: 'Population (Thousands)',
            data: [CityData[M].D_1950,CityData[M].D_1960, CityData[M].D_1970, CityData[M].D_1980, CityData[M].D_1990, CityData[M].D_2000, CityData[M].D_2010,CityData[M].D_2020,CityData[M].D_2030],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
        },
        options: {
            }]
        }
    }
}

)

}



//Selecting ID filter button and create the clicking event.
var citybutton = d3.select("#filter-btn-chart");
citybutton.on("click", createchart);
