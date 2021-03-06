function demo_init_page() {
    $('.final-toggle').on('select', new function() {
        toggle_final_step()
    }).on('change', new function() {
        toggle_final_step()
    });

    window.setInterval("toggle_final_step()",300);

    $('[data-toggle="popover"]').popover();

    $('#demo-navbar-collapse').find('a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
}

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

    $('#final-step-div')
        .attr('data-content', 'Расскажите немного о себе и нажмите для выбора хобби именно для Вас')
        .popover();
}

function demo_want_teach_select() {
    $('#select-personal-panel').fadeOut();
    $('#select-interests-panel').fadeOut();
    $('#select-interests-link').fadeOut();

    $('#intro-teacher-panel').fadeIn();
    $('#intro-teacher-link').fadeIn();

    $('#want-hobby-link img').removeClass('welcome_selected');
    $('#want-teach-link img').addClass('welcome_selected');

    $('#final-step-div')
        .attr('data-content', 'Заполните поля о себе и зарегистрируйте Ваше хобби')
        .popover();
}

function demo_run_hobby() {
    if ($('#want-hobby-link img').hasClass('welcome_selected')) {
        demo_open_search_with_results();
    }
    if ($('#want-teach-link img').hasClass('welcome_selected')) {
        demo_open_create_hobby();
    }
}

function demo_open_search_with_results() {
    $('#showDetailedQuery').toggleClass('collapsed', true);
    $('#detailedSearch').toggleClass('in', false);
    $('#searchResults').removeClass('hidden');

    $('#search-hobby-link').click();
}

function demo_home() {
    $('#want-hobby-link img').removeClass('welcome_selected');
    $('#want-teach-link img').removeClass('welcome_selected');

    $('#intro-teacher-panel').hide();
    $('#select-personal-panel').hide();
    $('#select-interests-panel').hide();

    $('#selected-interests').find('span.badge').remove();
    $('#select-personal-panel').find('input[name=gender]:checked').attr('checked', false).prop('checked', false);
    $('#select-personal-panel').find('input[name=gender]').closest('label').removeClass('active');
    $('#select-personal-panel').find('input[name=age]').val("");

    $('#intro-teacher-panel').find('input[name=nameSurname]').val("");
    $('#intro-teacher-panel').find('input[name=email]').val("");

    $('#intro-teacher-link').show();
    $('#select-interests-link').show();

    $('#welcome-page-link').click();
}

function demo_open_hobby() {
    $('#open-hobby-link').click();
}

function demo_open_create_hobby() {
    $('#create-hobby-link').click();
}

function on_interests_select() {
    $('#selected-interests').append(
        '<span class="badge">' + $('#interests-select').val() +
        '<button type="button" onclick="delete_interest(event)" class="close"><span>&times;</span></button>' +
        '</span>');
    $('#interests-select').val('');
}

function delete_interest(event) {
    $(event.target).closest('span.badge').remove();
}

function toggle_final_step() {
    var final = false;
    if ($('#want-hobby-link img').hasClass('welcome_selected')) {
        final = $('#selected-interests').find('span.badge').length > 0
            || $('#select-personal-panel').find('input[name=gender]:checked').length > 0
            || $('#select-personal-panel').find('input[name=age]').val() != "";
    }
    if ($('#want-teach-link img').hasClass('welcome_selected')) {
        final = $('#intro-teacher-panel').find('input[name=nameSurname]').val() != "" &&
            $('#intro-teacher-panel').find('input[name=email]').val() != "";
    }

    $('#final-step img').toggleClass("behobby_selected", final)
}