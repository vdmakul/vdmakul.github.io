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
    $('#intro-teacher-panel').fadeOut();
    $('#intro-teacher-link').fadeOut();

    $('#select-personal-panel').fadeIn();
    $('#select-interests-panel').fadeIn();
    $('#select-interests-link').fadeIn();


    $('#want-teach-link img').removeClass('welcome_selected');
    $('#want-hobby-link img').addClass('welcome_selected');
}

function demo_want_teach_select() {
    $('#select-personal-panel').fadeOut();
    $('#select-interests-panel').fadeOut();
    $('#select-interests-link').fadeOut();

    $('#intro-teacher-panel').fadeIn();
    $('#intro-teacher-link').fadeIn();

    $('#want-hobby-link img').removeClass('welcome_selected');
    $('#want-teach-link img').addClass('welcome_selected');
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
