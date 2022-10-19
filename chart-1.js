const ctx1 = document.getElementById('barChart');
const barChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['01', '02', '03', '04', '05', '06'],
        datasets: [{
            label: '# of Votes',
            data: [200, 210, 310, 300, 200, 320],
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1,
            barThickness: 8,
            borderRadius: 5,
            borderSkipped: false
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        scales: {
    y: {
      ticks: { color: '#FFFFFF'}
    },
    x: {
      ticks: { color: '#FFFFFF'}
    }
  },
        plugins: {
         legend: {
            display: false
         }
      }
    }
});
