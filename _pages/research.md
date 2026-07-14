---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

<style>
  .research-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0 0 1.5rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.75rem;
  }

  .research-tab {
    cursor: pointer;
    background: transparent;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.4rem 0.85rem;
    font-size: 0.95em;
    color: inherit;
    transition: color 0.15s ease, border-color 0.15s ease, background-color 0.15s ease;
  }

  .research-tab:hover {
    border-color: #52adc8;
    color: #52adc8;
    background-color: rgba(82, 173, 200, 0.08);
  }

  .research-tab.is-active {
    border-color: #52adc8;
    color: #52adc8;
    font-weight: 600;
  }

  .research-tab.is-active:hover {
    background-color: rgba(82, 173, 200, 0.12);
  }

  .research-panel {
    display: none;
  }

  .research-panel.is-active {
    display: block;
  }

  .project {
    margin-bottom: 1em; /* Reduce spacing between projects */
  }

  .project-title {
    font-weight: normal; /* Remove bold */
    margin-bottom: 0.25em; /* Reduce space below the title */
  }

  .project-links {
    display: inline; /* Keep links and toggle on the same line */
  }

  .toggle-abstract {
    display: inline;
    cursor: pointer;
    color: black;
    font-size: 0.9em;
    margin-left: 0.5em; /* Add small gap from the links */
    text-decoration: none;
  }

  .abstract {
    display: none; /* Abstracts remain hidden by default */
    margin-top: 0.5em;
    color: black;
    font-size: 0.9em;
  }

  /* Dark mode overrides for page-local black text */
  html[data-theme="dark"] .toggle-abstract,
  html[data-theme="dark"] .abstract {
    color: #e6edf3;
  }

  html[data-theme="dark"] .research-tabs {
    border-bottom-color: #30363d;
  }

  html[data-theme="dark"] .research-tab {
    border-color: #30363d;
  }

  html[data-theme="dark"] .research-tab:hover {
    border-color: #7ec8db;
    color: #7ec8db;
    background-color: rgba(126, 200, 219, 0.1);
  }

  html[data-theme="dark"] .research-tab.is-active {
    border-color: #7ec8db;
    color: #7ec8db;
  }

  html[data-theme="dark"] .research-tab.is-active:hover {
    background-color: rgba(126, 200, 219, 0.14);
  }

  @media (prefers-color-scheme: dark) {
    html:not([data-theme="light"]) .toggle-abstract,
    html:not([data-theme="light"]) .abstract {
      color: #e6edf3;
    }

    html:not([data-theme="light"]) .research-tabs {
      border-bottom-color: #30363d;
    }

    html:not([data-theme="light"]) .research-tab {
      border-color: #30363d;
    }

    html:not([data-theme="light"]) .research-tab:hover {
      border-color: #7ec8db;
      color: #7ec8db;
      background-color: rgba(126, 200, 219, 0.1);
    }

    html:not([data-theme="light"]) .research-tab.is-active {
      border-color: #7ec8db;
      color: #7ec8db;
    }

    html:not([data-theme="light"]) .research-tab.is-active:hover {
      background-color: rgba(126, 200, 219, 0.14);
    }
  }
</style>

<!--
<style> details { float:left; cursor: pointer; &:hover { color: #fff; background-color: #b21619 !important; } } details > summary { display: inline-block; margin-bottom: 0.25em; padding: 0.125em 0.25em; color: #b21619; text-align: center; text-decoration: none !important; border: 1px solid; border-color: #b21619; border-radius: 4px; cursor: pointer; } details > summary::-webkit-details-marker { display: none; float:left; } details > p { margin-bottom: 0.25em; padding: 0.125em 0.25em; box-shadow: 1px 1px 2px #bbbbbb; } </style> 
-->

<div class="research-tabs" role="tablist">
  {% for tab in site.data.research_tabs %}
    <button
      type="button"
      class="research-tab{% if forloop.first %} is-active{% endif %}"
      role="tab"
      aria-selected="{% if forloop.first %}true{% else %}false{% endif %}"
      data-tab="{{ tab.id }}"
    >{{ tab.label }}</button>
  {% endfor %}
</div>

{% for tab in site.data.research_tabs %}
  {% assign tab_folder = tab.id | append: "/" %}
  {% assign tab_papers = site.research | where_exp: "paper", "paper.relative_path contains tab_folder" | sort: "order" %}
  <div
    class="research-panel{% if forloop.first %} is-active{% endif %}"
    role="tabpanel"
    data-panel="{{ tab.id }}"
    {% unless forloop.first %}hidden{% endunless %}
  >
    {% for paper in tab_papers %}
{{ paper.content }}
    {% endfor %}
  </div>
{% endfor %}

<script>
  (function () {
    var tabs = document.querySelectorAll('.research-tab');
    var panels = document.querySelectorAll('.research-panel');

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var id = tab.getAttribute('data-tab');

        tabs.forEach(function (t) {
          var active = t === tab;
          t.classList.toggle('is-active', active);
          t.setAttribute('aria-selected', active ? 'true' : 'false');
        });

        panels.forEach(function (panel) {
          var active = panel.getAttribute('data-panel') === id;
          panel.classList.toggle('is-active', active);
          if (active) {
            panel.removeAttribute('hidden');
          } else {
            panel.setAttribute('hidden', '');
          }
        });
      });
    });

    document.querySelectorAll('.toggle-abstract').forEach(function (button) {
      button.addEventListener('click', function () {
        var abstract = this.closest('.project').querySelector('.abstract');
        var isHidden = abstract.style.display === 'none' || abstract.style.display === '';
        abstract.style.display = isHidden ? 'block' : 'none';
        this.textContent = isHidden ? '▼ Hide abstract' : '▶ Abstract';
      });
    });
  })();
</script>
