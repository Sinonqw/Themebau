const headerHTML = `
<a href="#" class="burger burger--follow">
    <span class=""></span>
</a>
<div class="close-btn"></div>
<div class="header__mobile-menu">
    <ul class="header__mobile-nav">
        <div class="header__logo">
            <a href="#">Themebau.</a>
        </div>
        <li class="header__nav-item active"><a class="header__nav-link" href="../pages/index.html">home</a></li>
        <li class="header__nav-item"><a class="header__nav-link" href"../pages/portfolio.html">projects</a></li>
        <li class="header__nav-item"><a class="header__nav-link" href="../pages/contacts.html">contact</a></li>
    </ul>
    <ul class="header__mobile-socials">
        <li class="header__socials-item">
            <a class="header__socials-link" href="#"><img src="images/header/facebook.svg" alt=""></a>
        </li>
        <li class="header__socials-item">
            <a class="header__socials-link" href="#"><img src="images/header/twitter.svg" alt=""></a>
        </li>
        <li class="header__socials-item">
            <a class="header__socials-link" href="#"><img src="images/header/instagram.svg" alt=""></a>
        </li>
    </ul>
</div>
<div class="header__inner">
    <div class="header__logo">
        <a href="#">Themebau.</a>
    </div>
    <ul class="header__nav">
        <li class="header__nav-item active"><a class="header__nav-link" href="../index.html">home</a></li>
        <li class="header__nav-item"><a class="header__nav-link" href="./pages/portfolio.html">projects</a></li>
        <li class="header__nav-item"><a class="header__nav-link" href="./pages/contacts.html">contact</a></li>
    </ul>
    <ul class="header__socials">
        <li class="header__socials-item">
            <a class="header__socials-link" href="#"><img src="images/header/facebook.svg" alt=""></a>
        </li>
        <li class="header__socials-item">
            <a class="header__socials-link" href="#"><img src="images/header/twitter.svg" alt=""></a>
        </li>
        <li class="header__socials-item">
            <a class="header__socials-link" href="#"><img src="images/header/instagram.svg" alt=""></a>
        </li>
    </ul>
</div>
`

function renderHeader() {
	document.getElementById('menu').insertAdjacentHTML('afterbegin', headerHTML)
}

document.addEventListener('DOMContentLoaded', renderHeader)
