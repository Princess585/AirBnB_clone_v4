$(document).ready(function() {
    const selectedAmenities = {};

    $('input[type="checkbox"]').change(function() {
        const amenityId = $(this).data('id');
        const amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
            selectedAmenities[amenityId] = amenityName;
        } else {
            delete selectedAmenities[amenityId];
        }

        const amenityList = Object.values(selectedAmenities).join(', ');
        $('.amenities h4').text(amenityList);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    fetch('http://0.0.0.0:5001/api/v1/status/')
        .then(response => response.json())
        .then(data => {
            const apiStatusDiv = document.getElementById('api_status');
            if (data.status === 'OK') {
                apiStatusDiv.classList.add('available');
            } else {
                apiStatusDiv.classList.remove('available');
            }
        })
        .catch(error => console.error('Error:', error));
});

