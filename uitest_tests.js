// This file contains the Automated UI tests

(function() {
        
    UITest.addTestScript({
        name    : 'Demo Test: Basic',
        url     : 'demo/demo.html',
        waitFor : 'pageToLoad',
        thenRun : function() {
            UITest.log('Hide result');
            $('#button-hide').click();
            UITest.assertIsHidden('#result');
            
            UITest.log('Show result');
            $('#button-show').click();
            UITest.assertIsVisible('#result');
            
            UITest.log('Add class');
            $('#button-add-class').click();
            UITest.assertHasClass('#result', 'newclass');
            
            UITest.log('Remove class');
            $('#button-remove-class').click();
            UITest.assertNotHasClass('#result', 'newclass');
            UITest.log('Check all checkboxes');
            $('#controls-checkboxes-select-all').click();
            UITest.assertIsChecked('#controls-checkboxes input');

            UITest.log('Uncheck all checkboxes');
            $('#controls-checkboxes-select-none').click();
            UITest.assertNotIsChecked('#controls-checkboxes input');

            UITest.log('Check select default');
            UITest.assertHasValue('#controls-select select', 'Default');
            UITest.assertHasText('#controls-select p:last-child', 'Default');

            UITest.log('Change select value');
            $('#controls-select select').val("Option 3").change();
            UITest.assertHasText('#controls-select p:last-child', 'Option 3');

            // This will fail because ajax is asynchronous
            // UITest.log('Load async ajax');
            // $('#button-load-ajax').click();
            // UITest.assertIsVisible('#result p');  
        }
    });


    UITest.addTestScript({
        name    : 'Demo Test: Ajax Fail',
        url     : 'demo/demo.html',
        waitFor : 'pageToLoad',
        thenRun : function() {
            UITest.log('Load async ajax');
            $('#button-load-ajax').click();
            UITest.assertIsVisible('#result p');  
        }
    });


    UITest.addTestScript({
        name    : 'Demo Test: Ajax Pass',
        url     : 'demo/demo.html',
        tests   : [
            {
                waitFor: 'pageToLoad',
                thenRun: function() {
                    UITest.log('Load async ajax');
                    $('#button-load-ajax').click();
                }
            },
            {
                // We have to wait for the result to be available:
                waitFor: '#result p',
                thenRun: function() {
                    UITest.log('Ajax data available');
                }
            }
        ]
    });


    UITest.addTestScript({
        name    : 'Demo Test: Fade Out/Fade In',
        url     : 'demo/demo.html',
        tests   : [
            {   
                waitFor: 'pageToLoad',    
                thenRun: function() {
                    UITest.log('FadeOut result');
                    $('#button-fadeout').click();
                }
            },
            {
                // We have to wait for the fadeout to complete:
                waitFor: '!#result',
                thenRun: function() {     
                    UITest.log('Result hidden');
                    UITest.log('FadeIn result');
                    $('#button-fadein').click();
                }
            },
            {
                // We have to wait for the fadein to complete:
                waitFor: '#result',
                thenRun: function() {     
                    UITest.log('Result visible');
                }
            }
        ]
    });


    UITest.addTestScript({
        name    : 'Demo Test: Follow links',
        url     : 'demo/demo.html',
        tests   : [
            {   
                waitFor: 'pageToLoad',    
                thenRun: function() {
                    $('#link').followLink();
                }
            },
            {
                // We have to wait for the page load to complete:
                waitFor: 'pageToLoad',
                thenRun: function() {     
                    $('a').followLink();
                }
            },
            {
                // We have to wait for the fadein to complete:
                waitFor: 'pageToLoad',
                thenRun: function() {     
                    UITest.log('Links followed');
                }
            }
        ]
    });


})();
