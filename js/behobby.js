function demo_search() {
    $('#showDetailedQuery').toggleClass('collapsed', true);
    $('#detailedSearch').toggleClass('in', false);
    $('#searchResults').removeClass('hidden');
}

function demo_welcome_search() {

    $('#search-query').val($('#welcome-query').val());

    demo_open_search_with_results();
}

function demo_want_hobby_select() {
    demo_clear_welcome_state();
    $('#want-hobby-link img').addClass('welcome_selected');
    $('.welcome-want-hobby').show();
}

function demo_want_teach_select() {
    demo_clear_welcome_state();
    $('#want-teach-link img').addClass('welcome_selected');
    $('.welcome-want-teach').show();
}

function demo_clear_welcome_state() {
    $('.welcome.thumbnail img').removeClass('welcome_selected');
    $('.welcome-want-hobby').hide();
    $('.welcome-want-teach').hide();
}

function demo_run_hobby() {
    if($('#want-hobby-link img').hasClass('welcome_selected')) {
        demo_open_search_with_results();
    } else {
        demo_open_create_hobby();
    }
}

function demo_open_search_with_results() {
    $('#showDetailedQuery').toggleClass('collapsed', true);
    $('#detailedSearch').toggleClass('in', false);
    $('#searchResults').removeClass('hidden');

    $('#search-hobby-link').click();
}

function demo_open_hobby() {
    $('#open-hobby-link').click();
}

function demo_open_create_hobby() {
    $('#create-hobby-link').click();
}
