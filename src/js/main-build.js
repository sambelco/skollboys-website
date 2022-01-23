// Footer accordion
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
	accordionItemHeader.addEventListener("click", event => {

		// Uncomment in case you only want to allow for the display of only one collapsed item at a time!

		// const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
		// if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
		//   currentlyActiveAccordionItemHeader.classList.toggle("active");
		//   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
		// }

		accordionItemHeader.classList.toggle("active");
		const accordionItemBody = accordionItemHeader.nextElementSibling;
		if (accordionItemHeader.classList.contains("active")) {
			accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
		} else {
			accordionItemBody.style.maxHeight = 0;
		}

	});
});

// Change roadmap on mobile divices
window.addEventListener('resize', () => {
	let htmlROADMAP;
	const container = document.querySelector('.section04-roadmap');
	if ((window.matchMedia("(max-width: 350px)").matches)) {
		htmlROADMAP = `
        <img src="src/img/title-roadmap.PNG" class="title-type titleIMG" alt="title-type">
        <ul class="roadmap-ul" id="roadmap-ul">
            <li>January 14th</li>
            <p>Our collection is already on sale. When the first 50 Skoll Boys have being sould we wil do a give awat of 2 Skoll Boys on Instagram.</p>
            <li>TBA</li>
            <p>Our second collection will be listed which will be consist of so more Skoll Boys, these will have a higher price compared to our first collection. However the our second collection would be more exclusive.</p>
            <li>TBA</li>
            <p>We will have more surprises planned for holders and non-holders.</p>
            <li>TBA</li>
            <p>Phase done, Roadmap 2.0 released</p>
        </ul>
        <p>ROADMAP will be updated according to the activities and surprises that we do along the way!! <3</p>`;
		container.innerHTML = htmlROADMAP;
	} else {
		htmlROADMAP = `
        <img src="src/img/title-roadmap.PNG" class="title-type titleIMG" alt="title-type">
        <div class="roadmapIMG" id="roadmapIMG">
            <img src="src/img/roadmap.png" alt="roadmap-skollboys">
        </div>
        `;
		container.innerHTML = htmlROADMAP;

	}
});
