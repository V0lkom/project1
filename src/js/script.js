document.querySelector(".header__burger").addEventListener("click", () => {
	document.querySelector(".header__burger span").classList.toggle("active"),
		document.querySelector(".header-list").classList.toggle("animate");
});
