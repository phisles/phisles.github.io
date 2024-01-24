document.addEventListener('DOMContentLoaded', function() {
    // ... [Your existing code for astronomical data]

    const earthImage = document.getElementById('earth-image');
    const earthImageCaption = document.getElementById('earth-image-caption');

    fetch('https://epic.gsfc.nasa.gov/api/natural')
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                // Getting the latest image
                const latestImage = data[0];

                // Constructing the image URL
                const imageUrl = constructImageUrl(latestImage);
                earthImage.src = imageUrl;

                // Adding caption
                earthImageCaption.textContent = `Image Date: ${latestImage.date}`;
            } else {
                earthImageCaption.textContent = 'No latest Earth image available.';
            }
        })
        .catch(error => {
            console.error('Error fetching Earth image: ', error);
            earthImageCaption.textContent = 'Unable to load Earth image.';
        });
});

function constructImageUrl(imageData) {
    const date = new Date(imageData.date);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${imageData.image}.png`;
    console.log('Constructed Image URL:', imageUrl);  // Log the URL for debugging
    return imageUrl;
}
