(()=>{"use strict";const e=function(){const e=document.getElementById("main");e.innerHTML="",e.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","home-sec-1");const t=document.createElement("div");t.setAttribute("class","restaurant-name");const n=document.createElement("h1");return n.setAttribute("id","title"),n.innerText="Bulgar Scenes",t.appendChild(n),e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","home-sec-2");const t=document.createElement("div");t.setAttribute("id","review-1");const n=document.createElement("img");n.setAttribute("id","review-img-1"),n.setAttribute("src","./imgs/review-1.jpg");const i=document.createElement("p");i.setAttribute("id","review-text"),i.innerText="\" Unparalleled burger experience! Perfectly seasoned patties, fluffy buns, and irresistible toppings create a flavor explosion. The 'Bulgar Surprise' sauce sets them apart. Excellent service, crispy fries, and creamy milkshakes complete the perfection.\"",t.appendChild(n),t.appendChild(i);const d=document.createElement("div");d.setAttribute("id","review-2");const c=document.createElement("img");c.setAttribute("id","review-img-2"),c.setAttribute("src","./imgs/review-2.jpg");const r=document.createElement("p");return r.setAttribute("id","review-text"),r.innerText='" Captivating ambience, culinary oasis! Happy cows, sizzling patties, and a mesmerizing atmosphere. Flavors and surroundings blend, creating an unforgettable experience."',d.appendChild(c),d.appendChild(r),e.appendChild(t),e.appendChild(d),e}()),e.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","home-sec-3");const t=document.createElement("h2");t.setAttribute("id","chef-name"),t.innerText="Chef Booger";const n=document.createElement("img");n.setAttribute("id","chef-img"),n.setAttribute("src","./imgs/chef-img.jpg");const i=document.createElement("p");return i.setAttribute("id","chef-text"),i.innerText="Meet Chef Booger, a boundary-pushing culinary genius specializing in bold and innovative Bulgarian cuisine. Prepare for an unforgettable gastronomic journey as he masterfully combines unexpected flavors, redefining traditional dishes with his tantalizing creations.",e.appendChild(t),e.appendChild(n),e.appendChild(i),e}())};function t(e,t,n,i){return(e=document.createElement("button")).setAttribute("id",t),e.innerText=n,e}function n(e,t){const n=document.createElement("div");n.setAttribute("id",e);const i=document.createElement("h2");return i.setAttribute("class","section-header"),i.innerText=t,n.appendChild(i),n}function i(e,t,n,i){const d=document.createElement("div");d.setAttribute("id","item");const c=document.createElement("img");c.setAttribute("src",t);const r=document.createElement("div");r.setAttribute("id","item-details");const a=document.createElement("h3");a.innerText=e;const s=document.createElement("p");s.innerText=n;const o=document.createElement("h4");return o.innerText=i,r.appendChild(a),r.appendChild(s),d.appendChild(c),d.appendChild(r),d.appendChild(o),d}const d=function(){const e=document.getElementById("main");e.innerHTML="";const t=document.createElement("div");t.setAttribute("id","menu-page-header");const d=document.createElement("h1");d.setAttribute("id","menu-header-text"),d.innerText="Menu",t.appendChild(d),e.appendChild(t),e.appendChild(function(){const e=n("menu-sec-1","Burgers"),t=i("Fiery Chicken","./imgs/burger1.png","A fiery, juicy chicken breast with crisp lettuce, tomato, and mayo, fulfilling your ultimate craving.","179 INR"),d=i("Veggie Popper","./imgs/burger2.png","A delectable black bean patty infused with chickpeas, veggies, cheese, tomatoes, lettuce, and curry mayo on a premium bun.","149 INR"),c=i("Cheeseburger Deluxe","./imgs/burger3.png","Fresh British beef topped with cheese, pickles, onions, tomatoes, crisp lettuce, ketchup, and mayo.","249 INR"),r=i("Chicken Club","./imgs/burger4.png","Juicy chicken, bacon, avocado, lettuce, tomato, mayo on a toasted bun.","199 INR");return e.appendChild(t),e.appendChild(d),e.appendChild(c),e.appendChild(r),e}()),e.appendChild(function(){const e=n("menu-sec-2","Starters"),t=i("Chili Cheese Fries","./imgs/side-1.png","Our natural-cut, skin-on, sea-salted fries topped our hearty chili and warm, creamy cheese sauce,  and shredded cheddar cheese","149 INR"),d=i("Chicken Nuggets","./imgs/side2.png","8 Pieces of chicken fillet lightly breaded for a crispy outer, then fried to seal in the juicy goodness","189 INR");return e.appendChild(t),e.appendChild(d),e}()),e.appendChild(function(){const e=n("menu-sec-3","Drinks"),t=i("Coke Zero","./imgs/drink1.png","The perfect diet companion to your burger, fries and everything nice. Regular serving size, 300 Ml.","59 INR"),d=i("Mineral Water","./imgs/drink2.png","Water Bottle","29 INR");return e.appendChild(t),e.appendChild(d),e}())};function c(e){const t=document.createElement("div");t.setAttribute("id","card");const n=document.createElement("h2");return n.setAttribute("class","card-header"),n.innerText=e,t.appendChild(n),t}const r=function(){const e=document.getElementById("main");e.innerHTML="",e.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","contact-sec-1");const t=document.createElement("h1");return t.setAttribute("id","visit-us"),t.innerText="Visit Us",e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","contact-sec-2");const t=c("Address"),n=document.createElement("div");n.setAttribute("class","card-text");const i=document.createElement("p");i.setAttribute("id","line01"),i.innerText="123, Mock Street,";const d=document.createElement("p");d.setAttribute("id","line02"),d.innerText="New Delhi, India";const r=document.createElement("p");r.setAttribute("id","line03"),r.innerText="Pincode: 110001",n.appendChild(i),n.appendChild(d),n.appendChild(r),t.appendChild(n);const a=c("Timings"),s=document.createElement("div");s.setAttribute("class","card-text");const o=document.createElement("p");o.setAttribute("id","line11"),o.innerText="We are open";const u=document.createElement("p");u.setAttribute("id","line12"),u.innerText="24x7",s.appendChild(o),s.appendChild(u),a.appendChild(s);const l=c("Contact Us"),p=document.createElement("div");p.setAttribute("class","card-text");const m=document.createElement("p");m.setAttribute("id","line21"),m.innerText="+91 98765 43210";const h=document.createElement("p");h.setAttribute("id","line22"),h.innerText="+91 11 1234 5678";const b=document.createElement("p");return b.setAttribute("id","line23"),b.innerText="bulgarscenes@fakemail.com",p.appendChild(m),p.appendChild(h),p.appendChild(b),l.appendChild(p),e.appendChild(t),e.appendChild(a),e.appendChild(l),e}())};(function(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("div");return e.setAttribute("class","header-nav"),e.appendChild(t("navbtn1","home-btn","Home")),e.appendChild(t("navbtn2","menu-btn","Menu")),e.appendChild(t("navbtn3","contact-btn","Contact")),e}()),e.appendChild(function(){const e=document.createElement("div");return e.setAttribute("id","main"),e}()),e.appendChild(function(){const e=document.createElement("footer"),t=document.createElement("p");t.setAttribute("id","footer-text"),t.innerText="Made by";const n=document.createElement("a");n.setAttribute("id","git-link"),n.setAttribute("href","https://github.com/Its-Tanay"),n.innerText="@Its-Tanay";const i=document.createElement("a");return i.setAttribute("id","credit-text"),i.innerText="Credits for used images in the README file",t.appendChild(n),e.appendChild(t),e.appendChild(i),e}())})(),e(),function(){const t=document.getElementById("home-btn"),n=document.getElementById("menu-btn"),i=document.getElementById("contact-btn");t.addEventListener("click",e),n.addEventListener("click",d),i.addEventListener("click",r)}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzNCcUUsRUFBUWxFLFVBQVksNkNBRXBCZ0UsRUFBV3RFLFlBQVl1RSxHQUN2QkYsRUFBT3JFLFlBQVlzRSxHQUNuQkQsRUFBT3JFLFlBQVl3RSxHQUVaSCxDQUNYLENBVXdCSSxHQUV4QixFR3ZDSSxHQUNBLElBWkosV0FDSSxNQUFNQyxFQUFVN0UsU0FBU0MsZUFBZSxZQUNsQzZFLEVBQVU5RSxTQUFTQyxlQUFlLFlBQ2xDOEUsRUFBYS9FLFNBQVNDLGVBQWUsZUFFM0M0RSxFQUFRRyxpQkFBaUIsUUFBUyxHQUNsQ0YsRUFBUUUsaUJBQWlCLFFBQVMsR0FDbENELEVBQVdDLGlCQUFpQixRQUFTLEVBQ3pDLENBS0lDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2xvYWRwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlU2VjdGlvbjEgKCkge1xuICAgIGNvbnN0IHNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VjdGlvbjEuc2V0QXR0cmlidXRlKCdpZCcsICdob21lLXNlYy0xJyk7XG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Jlc3RhdXJhbnQtbmFtZScpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnQnVsZ2FyIFNjZW5lcyc7XG5cbiAgICBuYW1lLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIHNlY3Rpb24xLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgcmV0dXJuIHNlY3Rpb24xO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWN0aW9uMiAoKSB7XG4gICAgY29uc3Qgc2VjdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWN0aW9uMi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtc2VjLTInKTtcblxuICAgIGNvbnN0IHJldmlldzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXZpZXcxLnNldEF0dHJpYnV0ZSgnaWQnLCAncmV2aWV3LTEnKTtcblxuICAgIGNvbnN0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcxLnNldEF0dHJpYnV0ZSgnaWQnLCAncmV2aWV3LWltZy0xJyk7XG4gICAgaW1nMS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltZ3MvcmV2aWV3LTEuanBnJyk7XG5cbiAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0MS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Jldmlldy10ZXh0Jyk7XG4gICAgdGV4dDEuaW5uZXJUZXh0ID0gJ1wiIFVucGFyYWxsZWxlZCBidXJnZXIgZXhwZXJpZW5jZSEgUGVyZmVjdGx5IHNlYXNvbmVkIHBhdHRpZXMsIGZsdWZmeSBidW5zLCBhbmQgaXJyZXNpc3RpYmxlIHRvcHBpbmdzIGNyZWF0ZSBhIGZsYXZvciBleHBsb3Npb24uIFRoZSBcXCdCdWxnYXIgU3VycHJpc2VcXCcgc2F1Y2Ugc2V0cyB0aGVtIGFwYXJ0LiBFeGNlbGxlbnQgc2VydmljZSwgY3Jpc3B5IGZyaWVzLCBhbmQgY3JlYW15IG1pbGtzaGFrZXMgY29tcGxldGUgdGhlIHBlcmZlY3Rpb24uXCInO1xuXG4gICAgcmV2aWV3MS5hcHBlbmRDaGlsZChpbWcxKTtcbiAgICByZXZpZXcxLmFwcGVuZENoaWxkKHRleHQxKTtcblxuICAgIGNvbnN0IHJldmlldzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXZpZXcyLnNldEF0dHJpYnV0ZSgnaWQnLCAncmV2aWV3LTInKTtcblxuICAgIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcyLnNldEF0dHJpYnV0ZSgnaWQnLCAncmV2aWV3LWltZy0yJyk7XG4gICAgaW1nMi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltZ3MvcmV2aWV3LTIuanBnJyk7XG5cbiAgICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0Mi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Jldmlldy10ZXh0Jyk7XG4gICAgdGV4dDIuaW5uZXJUZXh0ID0gJ1wiIENhcHRpdmF0aW5nIGFtYmllbmNlLCBjdWxpbmFyeSBvYXNpcyEgSGFwcHkgY293cywgc2l6emxpbmcgcGF0dGllcywgYW5kIGEgbWVzbWVyaXppbmcgYXRtb3NwaGVyZS4gRmxhdm9ycyBhbmQgc3Vycm91bmRpbmdzIGJsZW5kLCBjcmVhdGluZyBhbiB1bmZvcmdldHRhYmxlIGV4cGVyaWVuY2UuXCInO1xuXG4gICAgcmV2aWV3Mi5hcHBlbmRDaGlsZChpbWcyKTtcbiAgICByZXZpZXcyLmFwcGVuZENoaWxkKHRleHQyKTtcblxuICAgIHNlY3Rpb24yLmFwcGVuZENoaWxkKHJldmlldzEpO1xuICAgIHNlY3Rpb24yLmFwcGVuZENoaWxkKHJldmlldzIpO1xuXG4gICAgcmV0dXJuIHNlY3Rpb24yO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWN0aW9uMyAoKSB7XG5cbiAgICBjb25zdCBzZWN0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY3Rpb24zLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS1zZWMtMycpO1xuXG4gICAgY29uc3QgY2hlZk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNoZWZOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hlZi1uYW1lJyk7XG4gICAgY2hlZk5hbWUuaW5uZXJUZXh0ID0gJ0NoZWYgQm9vZ2VyJ1xuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hlZi1pbWcnKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWdzL2NoZWYtaW1nLmpwZycpO1xuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hlZi10ZXh0Jyk7XG4gICAgdGV4dC5pbm5lclRleHQgPSAnTWVldCBDaGVmIEJvb2dlciwgYSBib3VuZGFyeS1wdXNoaW5nIGN1bGluYXJ5IGdlbml1cyBzcGVjaWFsaXppbmcgaW4gYm9sZCBhbmQgaW5ub3ZhdGl2ZSBCdWxnYXJpYW4gY3Vpc2luZS4gUHJlcGFyZSBmb3IgYW4gdW5mb3JnZXR0YWJsZSBnYXN0cm9ub21pYyBqb3VybmV5IGFzIGhlIG1hc3RlcmZ1bGx5IGNvbWJpbmVzIHVuZXhwZWN0ZWQgZmxhdm9ycywgcmVkZWZpbmluZyB0cmFkaXRpb25hbCBkaXNoZXMgd2l0aCBoaXMgdGFudGFsaXppbmcgY3JlYXRpb25zLic7XG5cbiAgICBzZWN0aW9uMy5hcHBlbmRDaGlsZChjaGVmTmFtZSk7XG4gICAgc2VjdGlvbjMuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBzZWN0aW9uMy5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgIHJldHVybiBzZWN0aW9uMztcbn1cblxuZnVuY3Rpb24gbG9hZEhvbWUoKXtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuXG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlU2VjdGlvbjEoKSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVTZWN0aW9uMigpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZVNlY3Rpb24zKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTsiLCJmdW5jdGlvbiBjcmVhdGVIZWFkZXIgKCl7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhZGVyLW5hdicpO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZU5hdmJ0bignbmF2YnRuMScsICdob21lLWJ0bicsICdIb21lJykpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjcmVhdGVOYXZidG4oJ25hdmJ0bjInLCAnbWVudS1idG4nLCAnTWVudScpKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2YnRuKCduYXZidG4zJywgJ2NvbnRhY3QtYnRuJywgJ0NvbnRhY3QnKSk7XG5cbiAgICByZXR1cm4gbmF2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXZidG4obmFtZSwgaWQsIHRleHQsIGxpbmspIHtcbiAgICBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIG5hbWUuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbiAoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyICgpe1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmb290ZXJUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyLXRleHQnKTtcbiAgICBmb290ZXJUZXh0LmlubmVyVGV4dCA9ICdNYWRlIGJ5JztcblxuICAgIGNvbnN0IGdpdGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZ2l0bGluay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dpdC1saW5rJyk7XG4gICAgZ2l0bGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL0l0cy1UYW5heScpO1xuICAgIGdpdGxpbmsuaW5uZXJUZXh0ID0gJ0BJdHMtVGFuYXknO1xuXG4gICAgY29uc3QgY3JlZGl0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjcmVkaXRzLnNldEF0dHJpYnV0ZSgnaWQnLCAnY3JlZGl0LXRleHQnKTtcbiAgICBjcmVkaXRzLmlubmVyVGV4dCA9ICdDcmVkaXRzIGZvciB1c2VkIGltYWdlcyBpbiB0aGUgUkVBRE1FIGZpbGUnO1xuXG4gICAgZm9vdGVyVGV4dC5hcHBlbmRDaGlsZChnaXRsaW5rKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNyZWRpdHMpO1xuXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gbG9hZFBhZ2UgKCl7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2U7IiwiZnVuY3Rpb24gY3JlYXRlTWVudVNlY3Rpb24oaWQsIHRleHQpe1xuXG4gICAgY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51U2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2VjdGlvbi1oZWFkZXInKTtcbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gdGV4dDtcblxuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICByZXR1cm4gbWVudVNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtcyhuYW1lLCBsaW5rLCB0ZXh0LCBwcmljZSkge1xuXG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsJ2l0ZW0nKTtcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBsaW5rKTtcblxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZSgnaWQnLCAnaXRlbS1kZXRhaWxzJyk7XG5cbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaXRlbU5hbWUuaW5uZXJUZXh0ID0gbmFtZTtcblxuICAgIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1EZXNjLmlubmVyVGV4dCA9IHRleHQ7XG5cbiAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGl0ZW1QcmljZS5pbm5lclRleHQgPSBwcmljZTtcblxuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoaXRlbURlc2MpO1xuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChkZXRhaWxzKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG5cbiAgICByZXR1cm4gaXRlbTtcbn1cbiAgXG4gIGZ1bmN0aW9uIGNyZWF0ZUJ1cmdlcnNTZWN0aW9uKCkge1xuXG4gICAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZU1lbnVTZWN0aW9uKCdtZW51LXNlYy0xJywgJ0J1cmdlcnMnKTtcbiAgXG4gICAgY29uc3QgYnVyZ2VyMSA9IGNyZWF0ZU1lbnVJdGVtcygnRmllcnkgQ2hpY2tlbicsICcuL2ltZ3MvYnVyZ2VyMS5wbmcnLCAnQSBmaWVyeSwganVpY3kgY2hpY2tlbiBicmVhc3Qgd2l0aCBjcmlzcCBsZXR0dWNlLCB0b21hdG8sIGFuZCBtYXlvLCBmdWxmaWxsaW5nIHlvdXIgdWx0aW1hdGUgY3JhdmluZy4nLCAnMTc5IElOUicpO1xuICAgIGNvbnN0IGJ1cmdlcjIgPSBjcmVhdGVNZW51SXRlbXMoJ1ZlZ2dpZSBQb3BwZXInLCAnLi9pbWdzL2J1cmdlcjIucG5nJywgJ0EgZGVsZWN0YWJsZSBibGFjayBiZWFuIHBhdHR5IGluZnVzZWQgd2l0aCBjaGlja3BlYXMsIHZlZ2dpZXMsIGNoZWVzZSwgdG9tYXRvZXMsIGxldHR1Y2UsIGFuZCBjdXJyeSBtYXlvIG9uIGEgcHJlbWl1bSBidW4uJywgJzE0OSBJTlInKTtcbiAgICBjb25zdCBidXJnZXIzID0gY3JlYXRlTWVudUl0ZW1zKCdDaGVlc2VidXJnZXIgRGVsdXhlJywgJy4vaW1ncy9idXJnZXIzLnBuZycsICdGcmVzaCBCcml0aXNoIGJlZWYgdG9wcGVkIHdpdGggY2hlZXNlLCBwaWNrbGVzLCBvbmlvbnMsIHRvbWF0b2VzLCBjcmlzcCBsZXR0dWNlLCBrZXRjaHVwLCBhbmQgbWF5by4nLCAnMjQ5IElOUicpO1xuICAgIGNvbnN0IGJ1cmdlcjQgPSBjcmVhdGVNZW51SXRlbXMoJ0NoaWNrZW4gQ2x1YicsICcuL2ltZ3MvYnVyZ2VyNC5wbmcnLCAnSnVpY3kgY2hpY2tlbiwgYmFjb24sIGF2b2NhZG8sIGxldHR1Y2UsIHRvbWF0bywgbWF5byBvbiBhIHRvYXN0ZWQgYnVuLicsICcxOTkgSU5SJyk7XG4gIFxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoYnVyZ2VyMSk7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChidXJnZXIyKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGJ1cmdlcjMpO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoYnVyZ2VyNCk7XG4gIFxuICAgIHJldHVybiBzZWN0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2lkZXNTZWN0aW9uKCkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBjcmVhdGVNZW51U2VjdGlvbignbWVudS1zZWMtMicsICdTdGFydGVycycpO1xuICBcbiAgICBjb25zdCBzaWRlMSA9IGNyZWF0ZU1lbnVJdGVtcygnQ2hpbGkgQ2hlZXNlIEZyaWVzJywgJy4vaW1ncy9zaWRlLTEucG5nJywgJ091ciBuYXR1cmFsLWN1dCwgc2tpbi1vbiwgc2VhLXNhbHRlZCBmcmllcyB0b3BwZWQgb3VyIGhlYXJ0eSBjaGlsaSBhbmQgd2FybSwgY3JlYW15IGNoZWVzZSBzYXVjZSwgIGFuZCBzaHJlZGRlZCBjaGVkZGFyIGNoZWVzZScsICcxNDkgSU5SJyk7XG4gICAgY29uc3Qgc2lkZTIgPSBjcmVhdGVNZW51SXRlbXMoJ0NoaWNrZW4gTnVnZ2V0cycsICcuL2ltZ3Mvc2lkZTIucG5nJywgJzggUGllY2VzIG9mIGNoaWNrZW4gZmlsbGV0IGxpZ2h0bHkgYnJlYWRlZCBmb3IgYSBjcmlzcHkgb3V0ZXIsIHRoZW4gZnJpZWQgdG8gc2VhbCBpbiB0aGUganVpY3kgZ29vZG5lc3MnLCAnMTg5IElOUicpO1xuICBcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHNpZGUxKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHNpZGUyKTtcbiAgXG4gICAgcmV0dXJuIHNlY3Rpb247XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGNyZWF0ZURyaW5rc1NlY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZU1lbnVTZWN0aW9uKCdtZW51LXNlYy0zJywgJ0RyaW5rcycpO1xuICBcbiAgICBjb25zdCBkcmluazEgPSBjcmVhdGVNZW51SXRlbXMoJ0Nva2UgWmVybycsICcuL2ltZ3MvZHJpbmsxLnBuZycsICdUaGUgcGVyZmVjdCBkaWV0IGNvbXBhbmlvbiB0byB5b3VyIGJ1cmdlciwgZnJpZXMgYW5kIGV2ZXJ5dGhpbmcgbmljZS4gUmVndWxhciBzZXJ2aW5nIHNpemUsIDMwMCBNbC4nLCAnNTkgSU5SJyk7XG4gICAgY29uc3QgZHJpbmsyID0gY3JlYXRlTWVudUl0ZW1zKCdNaW5lcmFsIFdhdGVyJywgJy4vaW1ncy9kcmluazIucG5nJywgJ1dhdGVyIEJvdHRsZScsICcyOSBJTlInKTtcbiAgXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChkcmluazEpO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZHJpbmsyKTtcbiAgXG4gICAgcmV0dXJuIHNlY3Rpb247XG4gIH1cbiAgXG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuXG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtcGFnZS1oZWFkZXInKTtcbiAgICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXJUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1oZWFkZXItdGV4dCcpO1xuICAgIGhlYWRlclRleHQuaW5uZXJUZXh0ID0gJ01lbnUnO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KVxuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQnVyZ2Vyc1NlY3Rpb24oKSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVTaWRlc1NlY3Rpb24oKSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVEcmlua3NTZWN0aW9uKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTtcblxuIiwiZnVuY3Rpb24gY3JlYXRlU2VjdGlvbjEgKCl7XG4gICAgY29uc3Qgc2VjdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWN0aW9uMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3Qtc2VjLTEnKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Zpc2l0LXVzJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ1Zpc2l0IFVzJztcblxuICAgIHNlY3Rpb24xLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIHJldHVybiBzZWN0aW9uMTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VjdGlvbjIgKCl7XG5cbiAgICBjb25zdCBzZWN0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY3Rpb24yLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1zZWMtMicpO1xuXG4gICAgICAgIGNvbnN0IGNhcmQxID0gY3JlYXRlQ2FyZCgnQWRkcmVzcycpO1xuXG4gICAgICAgICAgICBjb25zdCBjYXJkVGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNhcmRUZXh0MS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtdGV4dCcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgbGluZTAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIGxpbmUwMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xpbmUwMScpO1xuICAgICAgICAgICAgICAgIGxpbmUwMS5pbm5lclRleHQgPSAnMTIzLCBNb2NrIFN0cmVldCwnO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmUwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBsaW5lMDIuc2V0QXR0cmlidXRlKCdpZCcsICdsaW5lMDInKTtcbiAgICAgICAgICAgICAgICBsaW5lMDIuaW5uZXJUZXh0ID0gJ05ldyBEZWxoaSwgSW5kaWEnO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmUwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBsaW5lMDMuc2V0QXR0cmlidXRlKCdpZCcsICdsaW5lMDMnKTtcbiAgICAgICAgICAgICAgICBsaW5lMDMuaW5uZXJUZXh0ID0gJ1BpbmNvZGU6IDExMDAwMSc7XG5cbiAgICAgICAgICAgICAgICBjYXJkVGV4dDEuYXBwZW5kQ2hpbGQobGluZTAxKTtcbiAgICAgICAgICAgICAgICBjYXJkVGV4dDEuYXBwZW5kQ2hpbGQobGluZTAyKTtcbiAgICAgICAgICAgICAgICBjYXJkVGV4dDEuYXBwZW5kQ2hpbGQobGluZTAzKTtcblxuICAgICAgICAgICAgY2FyZDEuYXBwZW5kQ2hpbGQoY2FyZFRleHQxKTtcblxuICAgICAgICBjb25zdCBjYXJkMiA9IGNyZWF0ZUNhcmQoJ1RpbWluZ3MnKTtcblxuICAgICAgICAgICAgY29uc3QgY2FyZFRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjYXJkVGV4dDIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLXRleHQnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmUxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBsaW5lMTEuc2V0QXR0cmlidXRlKCdpZCcsICdsaW5lMTEnKTtcbiAgICAgICAgICAgICAgICBsaW5lMTEuaW5uZXJUZXh0ID0gJ1dlIGFyZSBvcGVuJztcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lMTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgbGluZTEyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbGluZTEyJyk7XG4gICAgICAgICAgICAgICAgbGluZTEyLmlubmVyVGV4dCA9ICcyNHg3JztcblxuICAgICAgICAgICAgICAgIGNhcmRUZXh0Mi5hcHBlbmRDaGlsZChsaW5lMTEpO1xuICAgICAgICAgICAgICAgIGNhcmRUZXh0Mi5hcHBlbmRDaGlsZChsaW5lMTIpO1xuXG4gICAgICAgICAgICBjYXJkMi5hcHBlbmRDaGlsZChjYXJkVGV4dDIpO1xuICAgIFxuICAgICAgICBjb25zdCBjYXJkMyA9IGNyZWF0ZUNhcmQoJ0NvbnRhY3QgVXMnKTtcblxuICAgICAgICBjb25zdCBjYXJkVGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZFRleHQzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC10ZXh0Jyk7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbGluZTIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgbGluZTIxLnNldEF0dHJpYnV0ZSgnaWQnLCAnbGluZTIxJyk7XG4gICAgICAgICAgICBsaW5lMjEuaW5uZXJUZXh0ID0gJys5MSA5ODc2NSA0MzIxMCc7XG4gICAgICAgICAgICBjb25zdCBsaW5lMjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBsaW5lMjIuc2V0QXR0cmlidXRlKCdpZCcsICdsaW5lMjInKTtcbiAgICAgICAgICAgIGxpbmUyMi5pbm5lclRleHQgPSAnKzkxIDExIDEyMzQgNTY3OCc7XG4gICAgICAgICAgICBjb25zdCBsaW5lMjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBsaW5lMjMuc2V0QXR0cmlidXRlKCdpZCcsICdsaW5lMjMnKTtcbiAgICAgICAgICAgIGxpbmUyMy5pbm5lclRleHQgPSAnYnVsZ2Fyc2NlbmVzQGZha2VtYWlsLmNvbSc7XG5cbiAgICAgICAgICAgIGNhcmRUZXh0My5hcHBlbmRDaGlsZChsaW5lMjEpO1xuICAgICAgICAgICAgY2FyZFRleHQzLmFwcGVuZENoaWxkKGxpbmUyMik7XG4gICAgICAgICAgICBjYXJkVGV4dDMuYXBwZW5kQ2hpbGQobGluZTIzKTtcbiBcbiAgICAgICAgY2FyZDMuYXBwZW5kQ2hpbGQoY2FyZFRleHQzKTtcblxuICAgIHNlY3Rpb24yLmFwcGVuZENoaWxkKGNhcmQxKTtcbiAgICBzZWN0aW9uMi5hcHBlbmRDaGlsZChjYXJkMik7XG4gICAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQoY2FyZDMpO1xuXG4gICAgcmV0dXJuIHNlY3Rpb24yO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDYXJkICh0ZXh0KSB7XG5cbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmQnKTtcblxuICAgIGNvbnN0IGNhcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNhcmRIZWFkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLWhlYWRlcicpO1xuICAgIGNhcmRIZWFkZXIuaW5uZXJUZXh0ID0gdGV4dDtcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEhlYWRlcik7XG5cbiAgICByZXR1cm4gY2FyZDtcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRhY3QgKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuXG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlU2VjdGlvbjEoKSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVTZWN0aW9uMigpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7IiwiaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL21vZHVsZXMvaG9tZVwiO1xuaW1wb3J0IGxvYWRQYWdlIGZyb20gXCIuL21vZHVsZXMvbG9hZHBhZ2VcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tb2R1bGVzL21lbnVcIjtcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi9tb2R1bGVzL2NvbnRhY3RcIjtcblxucnVuKCk7XG5cbmZ1bmN0aW9uIG5hdkNsaWNrcyAoKXtcbiAgICBjb25zdCBob21lYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtYnRuJyk7XG4gICAgY29uc3QgbWVudWJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJ0bicpO1xuICAgIGNvbnN0IGNvbnRhY3RidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1idG4nKTtcblxuICAgIGhvbWVidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRIb21lKTtcbiAgICBtZW51YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkTWVudSk7XG4gICAgY29udGFjdGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZENvbnRhY3QpO1xufVxuXG5mdW5jdGlvbiBydW4oKXtcbiAgICBsb2FkUGFnZSgpO1xuICAgIGxvYWRIb21lKCk7XG4gICAgbmF2Q2xpY2tzKCk7XG59XG4iXSwibmFtZXMiOlsibWFpbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsInNlY3Rpb24xIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIm5hbWUiLCJ0aXRsZSIsImlubmVyVGV4dCIsImNyZWF0ZVNlY3Rpb24xIiwic2VjdGlvbjIiLCJyZXZpZXcxIiwiaW1nMSIsInRleHQxIiwicmV2aWV3MiIsImltZzIiLCJ0ZXh0MiIsImNyZWF0ZVNlY3Rpb24yIiwic2VjdGlvbjMiLCJjaGVmTmFtZSIsImltZyIsInRleHQiLCJjcmVhdGVTZWN0aW9uMyIsImNyZWF0ZU5hdmJ0biIsImlkIiwibGluayIsImNyZWF0ZU1lbnVTZWN0aW9uIiwibWVudVNlY3Rpb24iLCJoZWFkZXIiLCJjcmVhdGVNZW51SXRlbXMiLCJwcmljZSIsIml0ZW0iLCJpbWFnZSIsImRldGFpbHMiLCJpdGVtTmFtZSIsIml0ZW1EZXNjIiwiaXRlbVByaWNlIiwiaGVhZGVyVGV4dCIsInNlY3Rpb24iLCJidXJnZXIxIiwiYnVyZ2VyMiIsImJ1cmdlcjMiLCJidXJnZXI0IiwiY3JlYXRlQnVyZ2Vyc1NlY3Rpb24iLCJzaWRlMSIsInNpZGUyIiwiY3JlYXRlU2lkZXNTZWN0aW9uIiwiZHJpbmsxIiwiZHJpbmsyIiwiY3JlYXRlRHJpbmtzU2VjdGlvbiIsImNyZWF0ZUNhcmQiLCJjYXJkIiwiY2FyZEhlYWRlciIsImNhcmQxIiwiY2FyZFRleHQxIiwibGluZTAxIiwibGluZTAyIiwibGluZTAzIiwiY2FyZDIiLCJjYXJkVGV4dDIiLCJsaW5lMTEiLCJsaW5lMTIiLCJjYXJkMyIsImNhcmRUZXh0MyIsImxpbmUyMSIsImxpbmUyMiIsImxpbmUyMyIsImNvbnRlbnQiLCJuYXYiLCJjcmVhdGVIZWFkZXIiLCJjcmVhdGVNYWluIiwiZm9vdGVyIiwiZm9vdGVyVGV4dCIsImdpdGxpbmsiLCJjcmVkaXRzIiwiY3JlYXRlRm9vdGVyIiwiaG9tZWJ0biIsIm1lbnVidG4iLCJjb250YWN0YnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5hdkNsaWNrcyJdLCJzb3VyY2VSb290IjoiIn0=