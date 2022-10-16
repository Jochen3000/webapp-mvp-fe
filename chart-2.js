const ctx = document.getElementById('myChart').getContext("2d");
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0.2, 'rgb(73, 153, 40,0.1)');
            gradient.addColorStop(1, 'rgb(73, 153, 40,0)');

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug'];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: {
                target: 'origin',
                above: gradient
              },
    borderColor: 'rgb(73, 153, 40)',
    tension: 0.1
  }]
};

  const config = {
    type: 'line',
    data: data,
    options: {
      plugins: {
         legend: {
            display: false
         }
      }
    }
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
