console.log('Working');

const weatherForm = document.querySelector('.weatherForm');
const weatherDesc = document.querySelector('.weatherDesc');
const locationInput = document.getElementById('location');

weatherForm.addEventListener('submit', e => {
   e.preventDefault();

   const location = encodeURIComponent(locationInput.value);
   // console.log(location);

   locationInput.value = '';
   weatherDesc.textContent = 'Loading...';
   const url = `/weather?address=${location}`;

   fetch(url)
      .then(response => response.json())
      .then(data => {
         const { forecast, location } = data;

         weatherDesc.textContent = `In ${location}, ${forecast}.`;
      });
});
