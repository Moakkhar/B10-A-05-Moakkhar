document.getElementById('show-donation-btn').addEventListener('click', function (){
    this.classList.add('bg-[#B4F461]')
    document.getElementById('show-history-btn').classList.remove('bg-[#B4F461]')
    showSectionById('donate-section')
});


document.getElementById('show-history-btn').addEventListener('click', function (){
    this.classList.add('bg-[#B4F461]')
    document.getElementById('show-donation-btn').classList.remove('bg-[#B4F461]')
    showSectionById('donation-history')
});


document.getElementById('blog-btn').addEventListener('click', function(){

    showDomSectionById('faq-section')
})

document.getElementById('home-btn').addEventListener('click', function(){

    showDomSectionById('main-section')
})


