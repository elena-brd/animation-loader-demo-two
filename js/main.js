const loader = document.querySelector('.loader');
const infoSection = document.querySelector('.info-section');

function loadingInfo() {
    setTimeout(() => {
        infoSection.style.display = 'block';
        infoSection.style.opacity = '1';
        loader.style.display = 'none'
    }, 3000)
}

loadingInfo();