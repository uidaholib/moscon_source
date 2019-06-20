---
title: Unknowns
layout: page
permalink: /unknown.html
---

# Mystery Items

These items were found in MosCon archives boxes, but do not have specific metadata. 
Can you help identify the year of these souvenirs and their significance?
Thank you!

{% assign items = site.data.unknown %}
<div class="row">
{% for i in items %}
<div class="col-md-6">
<figure class="figure m-2 p-2 border rounded">
<img class="figure-img img-fluid rounded" src="https://www.lib.uidaho.edu/digital/objects/moscon/unknown/{{ i.filename }}" alt="MosCon item">
<figcaption class="figure-caption text-center">{{ i.title }} (?)</figcaption>
</figure>
</div>
{% endfor %}
</div>