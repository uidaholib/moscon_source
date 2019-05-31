---
# create lunr store 
---
{%- assign items = site.data[site.data.theme.metadata] -%}
var store = [ 
    {% for item in items %} 
    { 
        "indexId": {{ item.object-id | jsonify }},
        "name": {{ item.interviewee | jsonify }},
        "date": {{ item.date | jsonify }},
        "description": {{ item.description | normalize_whitespace | jsonify }},
        "location": {{ item.location | jsonify }}
    }{%- unless forloop.last -%},{%- endunless -%}
    {%- endfor -%}
];