// click appear menu-list

const toolSearch = $('.tool-search svg');

toolSearch.addEventListener('click', function() {
    $('.search-form').classList.toggle('active');
    $('.header-list').classList.toggle('hidden');
});