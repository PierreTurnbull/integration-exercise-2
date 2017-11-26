document.addEventListener("DOMContentLoaded", function()
{
  var elements  = document.querySelectorAll(".social_element");
  var images    = document.querySelectorAll(".social_element_img");

  for (let i = 0; elements[i] != undefined; i++)
  {
    elements[i].addEventListener("mouseover", function()
    {
      images[i].src = "img/007_footer/social_logo_hover_" + (i + 1) + ".png";
    });
    elements[i].addEventListener("mouseout", function()
    {
      images[i].src = "img/007_footer/social_logo_" + (i + 1) + ".png";
    });
  }
});
