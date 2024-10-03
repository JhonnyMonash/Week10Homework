var vg_2 = "js/station_patronage.vg.json";
vegaEmbed("#vg_2", vg_2, { "actions": false }).then(function (result) {
    var view = result.view;
    var lines = [
        'Alamein',
        'Belgrave',
        'Craigieburn',
        'Cranbourne',
        'Frankston',
        'Glen Waverley',
        'Hurstbridge',
        'Lilydale',
        'Mernda',
        'Pakenham',
        'Sandringham',
        'Sunbury',
        'Upfield',
        'Werribee',
        'Williamstown'
    ];

    // Bind checkboxes to Vega-Lite parameters
    lines.forEach(function (line) {
        var paramName = 'line_' + line.replace(/\s+/g, '_');
        var checkbox = document.getElementById(paramName);
        checkbox.addEventListener('change', function () {
            view.signal(paramName, checkbox.checked).run();
        });
    });
 }).catch(console.error);
