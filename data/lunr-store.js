---
# create lunr store 
---
{%- assign items = site.data[site.data.theme.metadata] -%}
{%- assign fields = site.data.lunr-config -%}
var store = [ 
{%- for item in items -%} 
{ "id": {{ item.object-id | jsonify }}, {% for f in fields %}{{ f.field | jsonify }}: {% if item[f.field] %}{{ item[f.field] | replace: '""','"' | jsonify }}{% else %}"none"{% endif %}{% unless forloop.last %},{% endunless %}{% endfor %} }{%- unless forloop.last -%},{%- endunless -%}
{%- endfor -%}
];
