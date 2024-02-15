document.addEventListener('DOMContentLoaded', function() {
    // Save selected variant's data
    let selectedVariant = {
      color: null,
      size: null,
      count: 0
    };
  
    const sizeOptions = document.querySelectorAll('.size_box input');
    sizeOptions.forEach(option => {
      option.addEventListener('change', function() {
        // Update selected variant data
        updateSelectedVariant();
      });
    });
  
    // Event listeners for count buttons
    const decreaseButton = document.querySelector('.decrease');
    const increaseButton = document.querySelector('.increase');
    decreaseButton.addEventListener('click', function() {
      const count = document.querySelector('.count');
      let currentCount = parseInt(count.textContent);
      if (currentCount > 0) {
        currentCount--;
        count.textContent = currentCount;
        updateSelectedVariant();
      }
    });
    increaseButton.addEventListener('click', function() {
      const count = document.querySelector('.count');
      let currentCount = parseInt(count.textContent);
      currentCount++;
      count.textContent = currentCount;
      updateSelectedVariant();
    });
  
    function updateSelectedVariant() {
      const selectedColor = document.querySelector('.colors button.selected');
      const selectedSize = document.querySelector('.size_box input:checked');
  
      selectedVariant.color = selectedColor ? selectedColor.dataset.color : null;
      selectedVariant.size = selectedSize ? selectedSize.nextElementSibling.textContent : null;
      selectedVariant.count = parseInt(document.querySelector('.count').textContent);
    }
  });
  
  

  document.addEventListener('DOMContentLoaded', function() {
    
    function calculatePercentageOff(mrp, salePrice) {
      const priceDifference = mrp - salePrice;
      const percentageOff = (priceDifference / mrp) * 100;
      const roundedPercentageOff = Math.round(percentageOff * 100) / 100;
      return roundedPercentageOff;
    }
  
    
    const mrp = 15999.00; 
    const salePrice = 12999.00; 
  
    const mrpElement = document.getElementById('mrp');
    const discountElement = document.getElementById('discount');
    mrpElement.textContent = `MRP: $${mrp.toFixed(2)}`;
    const percentageOff = calculatePercentageOff(mrp, salePrice);
    discountElement.textContent = `Discount: ${percentageOff}%`;
  });



  document.addEventListener("DOMContentLoaded", function() {
    const productImage = document.querySelector('.product_image');
    const miniImages = document.querySelectorAll('.miniImages');

    miniImages.forEach(miniImage => {
      miniImage.addEventListener('click', function() {
        // Get the background image of the clicked miniImage
        const backgroundImage = getComputedStyle(this).backgroundImage;
        // Set the product image background to the clicked miniImage background
        productImage.style.backgroundImage = backgroundImage;
      });
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    const colorOptions = document.querySelectorAll('.colors > div');
  
    colorOptions.forEach(option => {
      option.addEventListener('click', function() {
        // Remove 'checkmark' class from all color options
        colorOptions.forEach(option => {
          option.querySelector('.checkmark').style.display = 'none';
        });
  
        // Toggle 'checkmark' class for the clicked color option
        this.querySelector('.checkmark').style.display = 'block';
      });
    });
  });
  


  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('productForm');
    const colorButtons = form.querySelectorAll('.colors button');
    const sizeInputs = form.querySelectorAll('.sizes input');

    let selectedColor = null;
    let selectedSize = null;

    colorButtons.forEach(button => {
      button.addEventListener('click', function() {
      
        colorButtons.forEach(btn => btn.classList.remove('active'));
       
        button.classList.add('active');
        selectedColor = button.style.backgroundColor;
      });
    });

    sizeInputs.forEach(input => {
      input.addEventListener('change', function() {
        selectedSize = input.value;
      });
    });

    form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      if (selectedColor && selectedSize) {
        const quantity = parseInt(form.querySelector('.count').textContent);
        const message = `Color: ${selectedColor}, Size: ${selectedSize}, Quantity: ${quantity}`;
        window.alert('Product added to cart.\n' + message);
      } else {
        window.alert('Please select both color and size before adding to cart.');
      }
    });
  });