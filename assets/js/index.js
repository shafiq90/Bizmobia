$(document).ready(() => {
  $(".filter_gallery .items").isotope({
    itemSelector: ".item",
    layoutMode: "fitRows",
  });
  $(".btns button").click(function () {
    $(".btns button").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr("data-filter");
    console.log(this);
    $(".filter_gallery .items").isotope({
      filter: selector,
    });
    return false;
  });

  // OWL Carousel
  $(".owl-carousel.items").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });

  // Sevices
  $(".owl-carousel.owl-services").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // health
  $(".owl-carousel.owl-health").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // PARTNERS
  $(".owl-carousel.owl-partners").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  // clients
  $(".owl-carousel.owl-clients").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    rtl:true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});



//search filter
const searchFun = () => {
  let filter = document.getElementById("myInput").value.toUpperCase();
  let myTable = document.getElementById("myTable");
  let tr = myTable.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      let textvalue = td.textContent || td.innerHTML;

      if (textvalue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

// navbar
let lastPositionvalue = 0;
let body = document.body;

window.addEventListener("scroll", () => {
  let currentPositionvalue = window.pageYOffset;

  if (currentPositionvalue <= 0) {
    body.classList.remove("remove_header");
  }

  if (
    currentPositionvalue > lastPositionvalue &&
    !body.classList.contains("remove_header")
  ) {
    // body.classList.add("remove_header");
    body.classList.add("show_header");
  }
  if (
    currentPositionvalue < lastPositionvalue &&
    body.classList.contains("remove_header")
  ) {
    body.classList.remove("remove_header");
    body.classList.add("show_header");
  }
  lastPositionvalue = currentPositionvalue;
});

// gototop

let gototop = document.querySelector(".gototop");
gototop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// number increasing
(function () {
  const valuesContainer = document.querySelector(".points");
  const values = valuesContainer.querySelectorAll(".value");

  values.forEach(function (value) {
    const updateValue = function () {
      const valueMax = +value.getAttribute("data-max");
      const innerValue = +value.innerText;
      const inc = valueMax / 2000;

      if (innerValue < valueMax) {
        value.innerText = Math.ceil(innerValue + inc);
        setTimeout(updateValue, 5);
      } else {
        innerValue.innerText = valueMax;
      }
    };
    updateValue();
  });
})();

$(document).ready(function () {
  $(".gallery").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

$(document).ready(function () {
  $(".products").magnificPopup({
    delegate: "a",
    type: "image",
    products: {
      enabled: true,
    },
  });
});


// floating icon JS



