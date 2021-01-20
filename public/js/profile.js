/* eslint-disable prefer-arrow-callback */
$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.userName);
    $.get("/api/collection", function (req) {
      req.forEach(sneaker => {
        const $clone = $("#collectionSneaker")
          .clone()
          .removeAttr("id");
        $clone.find(".collectionSneakerName").text(sneaker.name);
        $clone.find(".collectionBrand").text(sneaker.brand);
        $clone.find(".collectionShoeName").text(sneaker.shoe);
        $clone.find(".collectionRetailPrice").text(sneaker.retailPrice);
        $clone.find(".collectionReleaseDate").text(sneaker.releaseDate);
        if (!sneaker.media) {
          $clone.find("img").prop("src", "./images/outline-shoes.jpg");
        }
        $clone1.find("img").prop("src", sneaker.media);
        $clone1.appendTo("#collectionSneakers");
      });
      $.get("/api/wishlist", function (req) {
        req.forEach(sneaker => {
          const $clone1 = $("#wishlistSneaker")
            .clone()
            .removeAttr("id");
          $clone1.find(".wishlistSneakerName").text(sneaker.name);
          $clone1.find(".wishlistBrand").text(sneaker.brand);
          $clone1.find(".wishlistShoeName").text(sneaker.shoe);
          $clone1.find(".wishlistRetailPrice").text(sneaker.retailPrice);
          $clone1.find(".wishlistReleaseDate").text(sneaker.releaseDate);
          if (!sneaker.media) {
            $clone1.find("img").prop("src", "./images/outline-shoes.jpg");
          }
          $clone1.find("img").prop("src", sneaker.media);
          $clone1.appendTo("#wishlistSneakers");
        });
      });
    });
  });
});