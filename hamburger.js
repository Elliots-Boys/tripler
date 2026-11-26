// TripleR Hamburger Menu
// Add <script src="hamburger.js"></script> to every page before </body>

(function() {
    var nav = document.getElementById('navBarWhole');
    if (!nav) return;

    // Create hamburger button
    var btn = document.createElement('button');
    btn.id = 'hamburgerBtn';
    btn.setAttribute('aria-label', 'Menu');
    btn.innerHTML = '<span></span><span></span><span></span>';
    nav.insertBefore(btn, nav.firstChild);

    // Toggle menu open/closed
    btn.addEventListener('click', function() {
        var container = document.querySelector('.navBarContainer');
        container.classList.toggle('open');
    });

    // Close menu when a link is tapped
    var links = nav.querySelectorAll('a');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            document.querySelector('.navBarContainer').classList.remove('open');
        });
    });
})();
