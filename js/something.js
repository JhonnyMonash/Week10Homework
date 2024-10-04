var vg_1 = "js/station_patronage.vg.json";
vegaEmbed("#vg_1", vg_1, { "actions": false }).then(function (result) {
    var view = result.view;
    var lines = [
        'Alamein',
        'Belgrave',
        'City Loop',
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
