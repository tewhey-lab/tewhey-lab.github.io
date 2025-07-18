---
layout: page
title: People
permalink: /people/
---

Our team is composed of talented scientists with diverse backgrounds in genomics, molecular biology, and computational science.

<div class="container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
{% for member in site.data.team %}
  <div class="profile-card" style="text-align: center;">
    <img src="{{ member.avatar | relative_url }}" alt="Photo of {{ member.name }}" style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover;">
    <h3 style="margin-top: 1rem; margin-bottom: 0.25rem;">{{ member.name }}</h3>
    <p style="font-style: italic; margin-top: 0;">{{ member.position }}</p>
    {% if member.scholar %}
      <a href="https://scholar.google.com/citations?user={{ member.scholar }}" target="_blank" rel="noopener noreferrer">Google Scholar</a>
    {% endif %}
  </div>
{% endfor %}
</div>
