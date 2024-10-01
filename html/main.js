// Slider1 //
let currentIndex = 0;

function showNextSlide() {
    const slides = document.querySelectorAll('.slide1');
    const totalSlides = slides.length;

    // Move each slide
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    // Calculate next slide index
    currentIndex = (currentIndex + 1) % totalSlides;

    // Reset to first slide without transition after the last slide
    if (currentIndex === 0) {
        setTimeout(() => {
            slides.forEach((slide) => {
                slide.style.transition = 'none';
                slide.style.transform = 'translateX(0)';
            });

            // Restore transition
            setTimeout(() => {
                slides.forEach((slide) => {
                    slide.style.transition = '';
                });
            }, 50);
        }, 1000); // Delay reset to match transition duration
    }
}

// Automatically show the next slide every 3 seconds
setInterval(showNextSlide, 3000);


// //Slider//

let slideIndex = 0;
const slides = document.querySelectorAll('.slide-track .slide');
const slideTrack = document.querySelector('.slide-track');
const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');
const slideWidth = slides[0].getBoundingClientRect().width;
const totalSlides = slides.length;

// Update slide track width to fit all slides
slideTrack.style.width = `${totalSlides * slideWidth}px`;

// Update slide position
function updateSlidePosition() {
    const offset = -slideIndex * slideWidth;
    slideTrack.style.transform = `translateX(${offset}px)`;
}

updateSlidePosition();

nextButton.addEventListener('click', () => {
    if (slideIndex < totalSlides - 1) {
        slideIndex++;
        updateSlidePosition();
    }
});

prevButton.addEventListener('click', () => {
    if (slideIndex > 0) {
        slideIndex--;
        updateSlidePosition();
    }
});


 // <!--Search box js-->
 const products = {
    "visiting cards": "Visitingcards.html",
 "letter heads": "Letterheads.html",
 "envelopes": "Envelopes.html",
 "books": "Books.html",
 "booklet": "Booklet.html",
 "brochure": "Brochure.html",
 "certificates": "Certificates.html",
 "pocket folders": "PocketFolders.html",
 "thank you cards": "ThankYouCards.html",
 "label & sticker": "LabelSticker.html",
 "pvc sticker": "PVCSticker.html",
 "vinyl sticker": "VinylSticker.html",
 "flyers": "Flyers.html",
 "menu card": "MenuCard.html",
 "poster a3": "PosterA3.html",
 "tent card": "TentCard.html",
 "calendar": "Calendar.html",
 "table calendar": "TableCalendar.html",
 "packaging box": "PackagingBox.html",
 "wedding invitations": "WeddingInvitations.html",
 "bill books": "BillBooks.html",
 "cash vouchers": "CashVouchers.html",
 "challan book": "ChallanBook.html",
 "pamphlet b/w": "PamphletBW.html",
 "notebooks": "Notebooks.html",
 "pen": "Pen.html",
 "diary": "Diary.html",
 "t-shirt": "TShirt.html",
 "caps": "Caps.html",
 "corporate gifts": "CorporateGifts.html",
 "key rings": "KeyRings.html",
 "shippers": "Shippers.html",
 "mugs": "Mugs.html",
 "lanyards": "Lanyards.html",
 "id cards": "IDCards.html",
 "carry bags": "CarryBags.html",
 "awards": "Awards.html",
 "stamps": "Stamps.html",
 "tag": "Tag.html",
 "flex/banner": "FlexBanner.html",
 "canopy": "Canopy.html",
 "glass frosted film": "GlassFrostedFilm.html",
 "glow sign board": "GlowSignBoard.html",
 "one way vision": "OneWayVision.html",
 "standy": "Standy.html",
 "branding vinyl": "BrandingVinyl.html",
 "backdrop": "Backdrop.html",
 "sunboard": "Sunboard.html",
 "acrylic vinyl board": "AcrylicVinylBoard.html",
 "canvas": "Canvas.html",
 "name plate": "Nameplate.html",
 "clipon": "Clipon.html"
 };
 
 document.getElementById('search-icon').addEventListener('click', function() {
     document.querySelector('.search-container').classList.toggle('expanded');
     document.getElementById('search-input').focus();
 });
 
 document.getElementById('search-input').addEventListener('input', function() {
     const query = this.value.toLowerCase();
     const suggestions = document.getElementById('suggestions');
     suggestions.innerHTML = '';
     
     if (query) {
         Object.keys(products).forEach(product => {
             if (product.includes(query)) {
                 const suggestion = document.createElement('div');
                 suggestion.textContent = product;
                 suggestion.addEventListener('click', function() {
                     window.location.href = products[product];
                 });
                 suggestions.appendChild(suggestion);
             }
         });
         suggestions.style.display = 'block';
     } else {
         suggestions.style.display = 'none';
     }
 });
 
 document.getElementById('search-input').addEventListener('keypress', function(e) {
     if (e.key === 'Enter') {
         const query = this.value.toLowerCase();
         const url = products[query];
         
         if (url) {
             window.location.href = url;
         } else {
             alert('Product not found');
         }
     }
 });