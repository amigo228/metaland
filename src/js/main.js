//header

let navOpener = document.querySelector('.js-nav-opener');
let header = document.querySelector('.header');

navOpener.addEventListener('click', () => {

    if (header.classList.contains('active')) {
        header.classList.remove('active');
        document.body.style.overflowY = 'visible';
    }
    else {
        header.classList.add('active');
        document.body.style.overflowY = 'hidden';
    }
});

//story-section

const btnBlock = document.querySelector('.btn-list');
let btnList = btnBlock.children;
const block = document.getElementById('block');

let structure1 = `  <div class="img-holder">
<img src="src/img/story.png" alt="story photo">
</div>
<div class="info-holder">
<span class="span-g">META record label was founded by Shaky Lake and Baky Hike in 2020
    business accelerator.</span>
<div class="text-holder">
    <p>Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo.
        Tortor aliquam nulla facilisi cras.</p>
    <p>Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit ut
        aliquam purus. Porta nibh venenatis cras sed felis. Aenean vel elit scelerisque
        mauris pellentesque pulvinar. Et malesuada fames ac turpis egestas sed tempus. Enim
        sit amet venenatis urna cursus eget.</p>
    <p>Maecenas ultricies mi eget mauris pharetra et ultrices. A condimentum vitae sapien
        pellentesque habitant morbi.</p>
</div>
</div>`;

let structure2 = `  <div class="img-holder">
<img src="src/img/story.png" alt="story photo">
</div>
<div class="info-holder">
<span class="span-g">META team has really reliable and powerfull partners in
    business accelerator.</span>
<div class="text-holder">
    <p>Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo.
        Tortor aliquam nulla facilisi cras.</p>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis beatae facere animi dolor
    odio eius, veniam nulla atque optio deserunt. Unde quo deleniti delectus eius quasi aliquam
    illum ullam provident.</p>
    <p>Maecenas ultricies mi eget mauris pharetra et ultrices. A condimentum vitae sapien
        pellentesque habitant morbi.</p>
</div>
</div>`;

let structure3 = `  <div class="img-holder">
<img src="src/img/story.png" alt="story photo">
</div>
<div class="info-holder">
<span class="span-g">META future guarantees you best improvement in you beginings and
    business accelerator.</span>
<div class="text-holder">
    <p>Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo.
        Tortor aliquam nulla facilisi cras.</p>
    <p> ue optio deserunt. Unde quo deleniti delectus eius quasi aliquam
    illum ullam provident.</p>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis beatae facere animi dolor
    odio eius, veniam nulla atque optio deserunt. Unde quo deleniti delectus eius quasi aliquam
    illum ullam provident.</p>
</div>
</div>`;

block.insertAdjacentHTML('beforeend', structure1);

btnBlock.addEventListener('click', (event) => {
    const btn = event.target.closest('.btn-item');

    if (btn) {
        for (let i = 0; i < 3; i++) {
            btnList[i].classList.remove('active-btn');
        }

        btn.classList.add('active-btn');
        while (block.firstChild) {
            block.removeChild(block.firstChild);
        };


        if (btn == btnList[0]) {
            block.insertAdjacentHTML('beforeend', structure1)
        }

        else if (btn == btnList[1]) {
            block.insertAdjacentHTML('beforeend', structure2)
        }
        else {
            block.insertAdjacentHTML('beforeend', structure3)
        }

    }

})

//roadmap section

let roadmap = document.querySelector('.roadmap');
let firstChild = document.getElementById('first');
let secondtChild = document.getElementById('second');
let thirdChild = document.getElementById('third');

window.addEventListener('scroll', (event) => {
    if (window.pageYOffset > 1900) {
        interupt(1);
    }

    if (window.pageYOffset > 2300) {
        interupt(2);
    }

    if (window.pageYOffset > 2700) {
        interupt(3);
    }

    if (window.pageYOffset < 1500) {
        remove(1);
        remove(2);
        remove(3);
    }
});



function interupt(check) {
    switch (check) {
        case 1: firstChild.classList.add('side');
            break;

        case 2: secondtChild.classList.add('side');
            break;

        case 3: thirdChild.classList.add('side');
            break;
    }
}

function remove(check) {
    switch (check) {
        case 1: firstChild.classList.remove('side');
            break;

        case 2: secondtChild.classList.remove('side');
            break;

        case 3: thirdChild.classList.remove('side');
            break;
    }
}