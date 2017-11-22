var BUBBLE_PARAMETERS = {
    "data_file": "regional_employment_data.csv",
    "report_title": "DVRPC Employment",
    "footer_text": "Concept for PFF Freight Employment tool",
    "width": 940,
    "height": 700,
    "force_strength": 0.06,
    "force_type": "charge",
    "radius_field": "employment",
    "numeric_fields": ["employment", "establishments", "wage"],
    "fill_color": {
        "data_field": "type",
        "color_groups": {
            "E": "#312867",
            "P": "#396ab2",
            "D": "#f4b387",
            "C": "#efefef"
        }
    },
    "tooltip": [
        {"title": "NAICS", "data_field": "naics"},
        {"title": "Sector Name", "data_field": "SubSector"},
        {"title": "Employment", "data_field": "employment"},
        {"title": "Establishments", "data_field": "establishments"}
    ],
    "modes": [
        {
            "button_text": "All Sectors",
            "button_id": "all",
            "type": "grid",
            "labels": null,
            "grid_dimensions": {"rows": 1, "columns": 1},
            "data_field": null
        },
        {
            "button_text": "Color 'em",
            "button_id": "color",
            "type": "color",
            "labels": null,
            "grid_dimensions": {"rows": 1, "columns": 1},
            "data_field": null
        },
        {
            "button_text": "Extraction Industries",
            "button_id": "extraction",
            "type": "isolate",
            "labels": ["Extraction"],
            "isolate": ["E"],
            "grid_dimensions": {"rows": 2, "columns": 1},
            "data_field": "type"
        },
        {
            "button_text": "Production Industries",
            "button_id": "production",
            "type": "isolate",
            "labels": ["Production"],
            "isolate": ["P"],
            "grid_dimensions": {"rows": 2, "columns": 1},
            "data_field": "type"
        },
        {
            "button_text": "Distribution Industries",
            "button_id": "distribution",
            "type": "isolate",
            "labels": ["Distribution"],
            "isolate": ["D"],
            "grid_dimensions": {"rows": 2, "columns": 1},
            "data_field": "type"
        }
    ]
};