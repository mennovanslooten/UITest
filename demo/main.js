(function() {
        
    var _result;
    var _controls;
        
    function loadAjaxAsync() {
        _result.text('Loading...');
        $.ajax({
            url:'ajax.html',
            async:true,
            cache:false,
            success: function(html) {
                _result.html(html);
            }
        });
    }

    function hideResult() { _result.hide(); }
    function showResult() { _result.show(); }
    
    function addClass() { _result.addClass('newclass'); }
    function removeClass() { _result.removeClass('newclass'); }
    
    function resetResult() { _result.empty().removeClass('newclass'); }
    function resetResult() { _result.empty().removeClass('newclass'); }

    function fadeOutResult() { _result.fadeOut('slow'); }
    function fadeInResult() { _result.fadeIn('slow'); }

    function selectAll() {
        $('#controls-checkboxes input').attr('checked', 'checked');
    }

    function selectNone() {
        $('#controls-checkboxes input').removeAttr('checked');
    }

    function copyText() {
        var value = $('#controls-text input').val();
        setTimeout(function() {
            $('#controls-text p:last-child').text(value);
        }, 1000);
    }

    function selectOption() {
        var value = $(this).val();
        $('#controls-select p:last-child').text(value);
    }

    $(document).ready(function() {
        _result = $('#result');
        
        $('#button-load-ajax').bind('click', loadAjaxAsync);
        
        $('#button-hide').bind('click', hideResult);
        $('#button-show').bind('click', showResult);

        $('#button-fadeout').bind('click', fadeOutResult);
        $('#button-fadein').bind('click', fadeInResult);

        $('#button-add-class').bind('click', addClass);
        $('#button-remove-class').bind('click', removeClass);
        
        $('#action-reset-result').bind('click', resetResult);

        $('#controls').bind('submit', function(e) {
            //e.preventDefault();
            //e.returnValue = false;
            return false;
        });
        
        $('#controls-checkboxes-select-all').bind('click', selectAll);
        $('#controls-checkboxes-select-none').bind('click', selectNone);
        $('#controls-text-ok').bind('click', copyText);
        $('#controls-select select').bind('change', selectOption).change();
    });

})();
