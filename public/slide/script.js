gsap.registerPlugin(ScrollTrigger);

// document.addEventListener("DOMContentLoaded", function () {
//     const footer = document.querySelector(".footer");
//     const lastCard = document.querySelector(".card.scroll");
//     const pinnedSections = gsap.utils.toArray(".pinned");

//     pinnedSections.forEach((section, index, sections) => {
//         let img = section.querySelector(".img");
//         let nextSection = sections[index + 1] || lastCard;

//         let endScalePoint = nextSection.offsetTop - section.offsetTop;


//         gsap.fromTo(img, {
//             scale: 1
//         }, {
//             scale: 0.5,
//             scrollTrigger: {
//                 trigger: section,
//                 start: "top top",
//                 end: `+=${endScalePoint}`,
//                 scrub: true,
//                 pin: true
//             }
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector(".footer");
    const lastCard = document.querySelector(".card.scroll");
    const pinnedSections = gsap.utils.toArray(".pinned");

    pinnedSections.forEach((section, index, sections) => {
        let img = section.querySelector(".img");
        let nextSection = sections[index + 1] || lastCard;

        let endScalePoint = `top+=${nextSection.offsetTop - section.offsetTop} top`;


        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end:
                    index === sections.length - 1
                        ? `+=${lastCard.offsetHeight / 2}`
                        : footer.offsetTop - window.innerHeight,
                pin: true,
                pinSpacing: false,
                scrub: 1,
            }
        });

        gsap.fromTo(img, {
            scale: 1
        }, {
            scale: 0.5,
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: endScalePoint,
                scrub: 1,
            }
        });


    });
});