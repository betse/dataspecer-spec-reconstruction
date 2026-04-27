const state = {
  data: null,
  route: "browse",
  selectedId: null,
  viewMode: "map",
  query: "",
  showClasses: true,
  showProperties: true,
  showShapes: true,
  zoom: 1,
  inspectorTab: "overview",
  docsClassId: null,
  docsRequirement: "all",
  docsPropertyId: null,
  docsPropertyType: "all",
  docsTab: "overview",
  graphSelectedId: null,
  graphShowClasses: true,
  graphShowProperties: true,
  graphShowProfileOf: true,
  graphShowDomainRange: true,
  graphRequirement: "all",
  devFormat: "typescript",
};

const nodePositions = {
  "dcat-ap": { x: 50, y: 50 },
  "dcat-vocab": { x: 50, y: 18 },
  "dcat-dap": { x: 17, y: 50 },
  "shacl-shapes": { x: 83, y: 50 },
  "prov-o": { x: 50, y: 78 },
};

const routeLabels = {
  browse: {
    title: "Specification Browser",
    text: "The working entry point is ready. Other views will become coordinated pages that reuse the selected specification, class, and property context.",
    icon: "⌁",
  },
  docs: {
    title: "Structured Documentation Placeholder",
    text: "This page will provide searchable, filterable class and property documentation generated from model.owl.ttl and dsv.ttl.",
    icon: "D",
  },
  graph: {
    title: "Interactive Graph Placeholder",
    text: "This page will focus on class, property, domain/range, profileOf, and specializes relationships with graph-first controls.",
    icon: "G",
  },
  dev: {
    title: "Developer Tools Placeholder",
    text: "This page will expose TypeScript, JSON Schema, SHACL, RDF, and implementation-oriented metadata for selected profiles.",
    icon: "</>",
  },
};

const app = document.querySelector("#app");
const browseTemplate = document.querySelector("#browseTemplate");
const placeholderTemplate = document.querySelector("#placeholderTemplate");
const searchInput = document.querySelector("#globalSearch");

init();

function init() {
  state.data = window.specificationsData;
  state.selectedId = state.data.defaultSpecificationId;
  state.route = getRouteFromHash();
  bindChrome();
  render();
}

function bindChrome() {
  window.addEventListener("hashchange", () => {
    state.route = getRouteFromHash();
    render();
  });

  document.querySelector("#globalSearchForm").addEventListener("submit", (event) => {
    event.preventDefault();
  });

  searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    if (state.route === "browse") {
      renderBrowseContent();
    } else if (state.route === "docs") {
      renderDocsContent();
    } else if (state.route === "graph") {
      renderGraphContent();
    } else if (state.route === "dev") {
      renderDevContent();
    } else {
      location.hash = "#browse";
    }
  });

  document.addEventListener("keydown", (event) => {
    const isSearchShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
    if (isSearchShortcut) {
      event.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
  });
}

function getRouteFromHash() {
  const route = location.hash.replace("#", "");
  return ["browse", "docs", "graph", "dev"].includes(route) ? route : "browse";
}

function render() {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === state.route);
  });

  if (state.route === "browse") {
    renderBrowse();
  } else if (state.route === "docs") {
    renderDocs();
  } else if (state.route === "graph") {
    renderGraphPage();
  } else if (state.route === "dev") {
    renderDevPage();
  } else {
    renderPlaceholder();
  }
}

function renderBrowse() {
  app.replaceChildren(browseTemplate.content.cloneNode(true));
  bindBrowseEvents();
  renderBrowseContent();
}

function bindBrowseEvents() {
  app.querySelectorAll("[data-view-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.viewMode = button.dataset.viewMode;
      renderBrowseContent();
    });
  });

  // app.querySelector("#showClasses").addEventListener("change", (event) => {
  //   state.showClasses = event.target.checked;
  //   renderBrowseContent();
  // });

  // app.querySelector("#showProperties").addEventListener("change", (event) => {
  //   state.showProperties = event.target.checked;
  //   renderBrowseContent();
  // });

  app.querySelector("#showShapes").addEventListener("change", (event) => {
    state.showShapes = event.target.checked;
    renderBrowseContent();
  });

  app.querySelector("#filterButton").addEventListener("click", () => {
    showToast("Filters are active on the map and list.");
  });

  app.querySelector("#zoomIn").addEventListener("click", () => {
    state.zoom = Math.min(1.18, state.zoom + 0.08);
    updateZoom();
  });

  app.querySelector("#zoomOut").addEventListener("click", () => {
    state.zoom = Math.max(0.82, state.zoom - 0.08);
    updateZoom();
  });

  app.querySelector("#fitView").addEventListener("click", () => {
    state.zoom = 1;
    updateZoom();
    showToast("Map fitted to view.");
  });

  app.querySelector("#lockCanvas").addEventListener("click", () => {
    showToast("Layout locked for this session.");
  });

  app.querySelector("#sourceForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = app.querySelector("#sourceUrl");
    const match = findSpecByUrl(input.value);
    state.selectedId = match.id;
    state.query = "";
    searchInput.value = "";
    renderBrowseContent();
    showToast(`Loaded ${match.name} from mock JSON.`);
  });

  app.querySelectorAll("[data-panel-action]").forEach((button) => {
    button.addEventListener("click", () => showToast("This shortcut is ready for later persistence data."));
  });
}

function renderBrowseContent() {
  const selected = getSelectedSpec();
  const mapView = app.querySelector("#mapView");
  const listView = app.querySelector("#listView");
  const sourceUrl = app.querySelector("#sourceUrl");

  app.querySelectorAll("[data-view-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.viewMode === state.viewMode);
  });

  // app.querySelector("#showClasses").checked = state.showClasses;
  // app.querySelector("#showProperties").checked = state.showProperties;
  app.querySelector("#showShapes").checked = state.showShapes;
  sourceUrl.value = selected.sourceUrl;

  mapView.hidden = state.viewMode !== "map";
  listView.hidden = state.viewMode !== "list";

  renderSpecTree();
  renderRelatedSpecs();
  renderMap();
  renderList();
  renderInspector();
}

function renderSpecTree() {
  const container = app.querySelector("#specTree");
  const hierarchy = [
    { id: "dcat-vocab", label: "DCAT", icon: "book", external: true, children: [
      { id: "dcat-dap", label: "DCAT-DAP", icon: "layers", children: [
        { id: "dcat-ap", label: "DCAT-AP", icon: "cube" },
      ] },
    ] },
  ];

  container.replaceChildren(
    ...hierarchy.map((node) => specTreeNode(node))
  );
}

function specTreeNode(node, depth = 0) {
  const spec = state.data.specifications.find((item) => item.id === node.id);
  const children = node.children ?? [];
  const isActive = state.selectedId === node.id;

  return element("div", { class: `tree-branch depth-${depth}` }, [
    element("button", {
      class: `tree-item ${isActive ? "active" : ""}`,
      type: "button",
      onclick: () => selectSpec(node.id),
      title: spec?.name ?? node.label,
    }, [
      element("span", { class: `tree-item-icon ${typeToClass(spec?.type)}` }, icon(node.icon)),
      element("span", { class: "tree-item-copy" }, [
        element("strong", {}, node.label),
        spec ? element("small", {}, spec.type) : null,
      ].filter(Boolean)),
      node.external ? element("span", { class: "tree-external", title: "External vocabulary" }, icon("external")) : null,
    ].filter(Boolean)),
    children.length ? element("div", { class: "tree-children" }, children.map((child) => specTreeNode(child, depth + 1))) : null,
  ].filter(Boolean));
}

function renderRelatedSpecs() {
  const container = app.querySelector("#relatedSpecs");
  container.replaceChildren(
    ...state.data.relatedSpecifications.map((spec) =>
      element("button", { class: "related-item", type: "button", onclick: () => selectSpec(spec.id) }, [
        element("span", { class: "related-name" }, [icon("stack"), element("span", {}, spec.name)]),
        element("span", { class: spec.status === "Stable" ? "status-dot" : "count-badge", title: spec.status }, spec.status === "Stable" ? "" : "ext"),
      ])
    )
  );
}

function renderMap() {
  const nodeLayer = app.querySelector("#nodeLayer");
  const svg = app.querySelector("#relationshipSvg");
  const specs = visibleSpecifications();
  const specIds = new Set(specs.map((spec) => spec.id));
  const relationships = state.data.relationships.filter((rel) => specIds.has(rel.source) && specIds.has(rel.target));

  nodeLayer.style.transform = `scale(${state.zoom})`;
  nodeLayer.replaceChildren(...specs.map((spec) => renderNode(spec)));
  renderEdges(svg, relationships);
}

function renderNode(spec) {
  const position = nodePositions[spec.id] ?? { x: 50, y: 50 };
  const typeClass = typeToClass(spec.type);
  const node = element("button", {
    class: `spec-node ${typeClass} ${spec.id === state.selectedId ? "active" : ""}`,
    type: "button",
    style: `left:${position.x}%;top:${position.y}%;`,
    onclick: () => selectSpec(spec.id),
    "aria-label": `Select ${spec.name}`,
  }, [
    element("span", { class: "node-icon" }, icon(iconForType(spec.type))),
    element("span", { class: "node-content" }, [
      element("span", { class: "node-title" }, [spec.name, element("span", { class: "status-pill" }, spec.status)]),
      element("span", { class: "node-meta" }, spec.type),
      element("span", { class: "node-stats" }, [
        stat("cube", spec.counts.classes),
        stat("link", spec.counts.properties),
        stat("shield", spec.counts.shapes),
      ]),
    ]),
  ]);
  return node;
}

function renderEdges(svg, relationships) {
  svg.replaceChildren();
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  defs.innerHTML = `
    <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto">
      <path d="M0,0 L8,3.5 L0,7 Z" fill="context-stroke"></path>
    </marker>
  `;
  svg.append(defs);

  relationships.forEach((rel) => {
    const source = nodePositions[rel.source];
    const target = nodePositions[rel.target];
    if (!source || !target) return;
    const x1 = source.x * 10;
    const y1 = source.y * 6.5;
    const x2 = target.x * 10;
    const y2 = target.y * 6.5;
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    const labelY = Math.abs(y1 - y2) < 10 ? midY - 46 : midY;
    const color = edgeColor(rel.type);

    const line = svgEl("line", {
      x1,
      y1,
      x2,
      y2,
      class: "edge-line",
      stroke: color,
      "stroke-dasharray": rel.type === "uses" ? "7 7" : rel.type === "specializes" ? "5 5" : "",
    });
    const labelBg = svgEl("rect", {
      x: midX - 38,
      y: labelY - 13,
      width: 76,
      height: 26,
      rx: 13,
      class: "edge-label-bg",
    });
    const label = svgEl("text", {
      x: midX,
      y: labelY + 1,
      class: "edge-label",
      fill: color,
    });
    label.textContent = rel.label;
    svg.append(line, labelBg, label);
  });
}

function renderList() {
  const tbody = app.querySelector("#specTableBody");
  tbody.replaceChildren(
    ...visibleSpecifications().map((spec) =>
      element("tr", { class: spec.id === state.selectedId ? "active" : "", onclick: () => selectSpec(spec.id) }, [
        element("td", {}, spec.name),
        element("td", {}, spec.type),
        element("td", {}, element("span", { class: "status-pill" }, spec.status)),
        element("td", {}, spec.counts.classes),
        element("td", {}, spec.counts.properties),
        element("td", {}, spec.counts.shapes),
        element("td", {}, spec.sourceUrl),
      ])
    )
  );
}

function renderInspector() {
  const selected = getSelectedSpec();
  const relationships = state.data.relationships.filter((rel) => rel.source === selected.id || rel.target === selected.id);
  const inspector = app.querySelector("#inspector");
  const tabs = ["overview", "metadata", "notes"];

  inspector.replaceChildren(
    element("div", { class: "inspector-header" }, [
      element("div", { class: "inspector-title-row" }, [
        element("div", {}, [
          element("h2", {}, selected.name),
          element("p", { class: "inspector-subtitle" }, [selected.type, " ", element("span", { class: "status-pill" }, selected.status)]),
          element("p", { class: "inspector-release" }, `Release: ${selected.release}`),
        ]),
        element("button", { class: "icon-button", type: "button", title: "Favorite", onclick: () => showToast(`${selected.name} added to favorites.`) }, icon("star")),
      ]),
      element("div", { class: "metric-grid" }, selected.metrics.slice(0, 3).map((metric) =>
        element("div", { class: "metric" }, [element("strong", {}, metric.value), element("span", {}, metric.label)])
      )),
    ]),
    element("div", { class: "inspector-tabs" }, tabs.map((tab) =>
      element("button", {
        class: `inspector-tab ${state.inspectorTab === tab ? "active" : ""}`,
        type: "button",
        onclick: () => {
          state.inspectorTab = tab;
          renderInspector();
        },
      }, capitalize(tab))
    )),
    element("div", { class: "inspector-body" }, inspectorBody(selected, relationships))
  );
}

function inspectorBody(selected, relationships) {
  if (state.inspectorTab === "metadata") {
    return [
      block("Metadata", [
        metaRow("IRI", selected.iri, true),
        metaRow("Author", selected.author),
        metaRow("License", selected.license),
        metaRow("Source URL", selected.sourceUrl, true),
      ]),
      block("Relationships", relationships.map((rel) => {
        const otherId = rel.source === selected.id ? rel.target : rel.source;
        const other = state.data.specifications.find((spec) => spec.id === otherId);
        return element("button", { class: "relationship-row", type: "button", onclick: () => selectSpec(otherId) }, [
          element("span", { class: "relationship-type" }, rel.label),
          element("strong", { class: "relationship-target" }, other?.name ?? otherId),
        ]);
      })),
    ];
  }

  if (state.inspectorTab === "notes") {
    return [
      block("Generated Notes", [
        element("p", {}, "This mock browser treats Dataspecer outputs as a coordinated package: HTML documentation, RDF vocabularies, application profile TTL, validation shapes, and implementation schemas."),
        element("p", {}, "The selected specification context can be passed into Docs, Graph, and Dev Tools once those placeholder pages are implemented."),
      ]),
    ];
  }

  return [
    block("Description", [element("p", {}, selected.description)]),
    block("Attachments", selected.attachments.map((attachment) => attachmentRow(attachment))),
    block("Quick Actions", [
      actionButton("Open Documentation", "book", () => {
        location.hash = "#docs";
      }),
      actionButton("Open Graph View", "graph", () => {
        location.hash = "#graph";
      }),
      actionButton("Open Developer View", "code", () => {
        location.hash = "#dev";
      }),
    ], "inspector-actions"),
  ];
}

function renderDocs() {
  app.replaceChildren(buildDocsPage());
  bindDocsEvents();
  renderDocsContent();
}

function buildDocsPage() {
  const selected = getSelectedSpec();
  return element("section", { class: "docs-layout" }, [
    element("aside", { class: "docs-sidebar" }, [
      element("div", { class: "docs-side-head" }, [
        element("span", { class: "docs-side-icon" }, icon("book")),
        element("div", {}, [
          element("h2", {}, "Documentation"),
          element("p", {}, selected.name),
        ]),
      ]),
      element("label", { class: "docs-local-search" }, [
        icon("search"),
        element("input", { id: "docsSearch", type: "search", placeholder: "Filter classes & properties..." }),
      ]),
      element("section", { class: "docs-filter-group" }, [
        element("h3", {}, "Primer"),
        element("div", { id: "docsPrimerClasses", class: "docs-primer-card" }),
      ]),
      element("section", { class: "docs-filter-group" }, [
        element("h3", {}, "Filters"),
        element("div", { class: "docs-filter-label" }, "Requirement"),
        element("div", { class: "docs-filter-pills docs-filter-row" }, [
          docsFilterButton("all", "All"),
          docsFilterButton("mandatory", "Mandatory"),
          docsFilterButton("recommended", "Recommended"),
          docsFilterButton("optional", "Optional"),
        ]),
        element("div", { class: "docs-filter-label" }, "Value type"),
        element("div", { class: "docs-filter-pills docs-filter-row" }, [
          docsTypeFilterButton("all", "All"),
          docsTypeFilterButton("literal", "Literal"),
          docsTypeFilterButton("object", "Object"),
        ]),
      ]),
      element("section", { class: "docs-filter-group docs-class-group" }, [
        element("h3", {}, "Classes"),
        element("div", { id: "docsClassList", class: "docs-class-list" }),
      ]),
    ]),
    element("section", { class: "docs-main" }, [
      element("div", { class: "docs-main-scroll" }, [
        element("div", { id: "docsHeader" }),
        element("div", { id: "docsTabs", class: "docs-tabs", role: "tablist" }),
        element("div", { id: "docsTabPanel", class: "docs-tab-panel" }),
      ]),
    ]),
    element("aside", { id: "docsInspector", class: "docs-inspector" }),
  ]);
}

function bindDocsEvents() {
  app.querySelector("#docsSearch").value = state.query;
  app.querySelector("#docsSearch").addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    searchInput.value = event.target.value;
    renderDocsContent();
  });

  app.querySelectorAll("[data-docs-requirement]").forEach((button) => {
    button.addEventListener("click", () => {
      state.docsRequirement = button.dataset.docsRequirement;
      renderDocsContent();
    });
  });

  app.querySelectorAll("[data-docs-type]").forEach((button) => {
    button.addEventListener("click", () => {
      state.docsPropertyType = button.dataset.docsType;
      state.docsPropertyId = null;
      renderDocsContent();
    });
  });

  app.querySelector("#docsTabs").addEventListener("click", (event) => {
    const button = event.target.closest("[data-docs-tab]");
    if (!button) return;
    state.docsTab = button.dataset.docsTab;
    if (state.docsTab === "graph") {
      state.graphSelectedId = state.docsPropertyId ? `property:${state.docsPropertyId}` : `class:${state.docsClassId}`;
    } else if (state.docsTab === "code") {
      state.devFormat = "typescript";
    }
    renderDocsContent();
  });
}

function renderDocsContent() {
  if (state.route !== "docs") return;

  const selected = getSelectedSpec();
  const classes = getDocClasses(selected);
  if (!classes.length) {
    renderDocsEmpty(selected);
    return;
  }

  if (!state.docsClassId || !classes.some((profile) => profile.id === state.docsClassId)) {
    state.docsClassId = classes[0].id;
  }

  const activeClass = classes.find((profile) => profile.id === state.docsClassId) ?? classes[0];
  const properties = filteredDocProperties(activeClass);
  if (!state.docsPropertyId || !properties.some((property) => property.id === state.docsPropertyId)) {
    state.docsPropertyId = properties[0]?.id ?? activeClass.properties[0]?.id ?? null;
  }

  renderDocsPrimer(classes);
  renderDocsClassList(classes);
  renderDocsHeader(selected, activeClass);
  renderDocsTabs();
  renderDocsTabPanel(selected, activeClass, properties);
  renderDocsInspector(activeClass, properties);

  app.querySelectorAll("[data-docs-requirement]").forEach((button) => {
    button.classList.toggle("active", button.dataset.docsRequirement === state.docsRequirement);
  });
  app.querySelectorAll("[data-docs-type]").forEach((button) => {
    button.classList.toggle("active", button.dataset.docsType === state.docsPropertyType);
  });
}

function renderDocsTabs() {
  app.querySelector("#docsTabs").replaceChildren(
    docsTabButton("overview", "Overview"),
    docsTabButton("examples", "Examples"),
    docsTabButton("graph", "Graph"),
    docsTabButton("code", "Code")
  );
}

function docsTabButton(value, label) {
  return element("button", {
    class: state.docsTab === value ? "active" : "",
    type: "button",
    role: "tab",
    "aria-selected": state.docsTab === value ? "true" : "false",
    "data-docs-tab": value,
  }, label);
}

function renderDocsTabPanel(spec, activeClass, properties) {
  if (state.docsTab === "examples") {
    renderDocsExamples(spec, activeClass);
  } else if (state.docsTab === "graph") {
    renderDocsGraph(activeClass);
  } else if (state.docsTab === "code") {
    renderDocsCode(activeClass);
  } else {
    renderDocsProperties(properties);
  }
}

function renderDocsClassList(classes) {
  const container = app.querySelector("#docsClassList");
  const query = state.query;
  const visibleClasses = classes.filter((profile) => {
    const haystack = [profile.name, profile.definition, ...profile.properties.map((property) => property.name)].join(" ").toLowerCase();
    return !query || haystack.includes(query);
  });

  container.replaceChildren(
    ...visibleClasses.map((profile) =>
      element("button", {
        class: `docs-class-item ${profile.id === state.docsClassId ? "active" : ""}`,
        type: "button",
        onclick: () => {
          state.docsClassId = profile.id;
          state.docsPropertyId = profile.properties[0]?.id ?? null;
          renderDocsContent();
        },
      }, [
        element("span", { class: "docs-class-icon" }, icon("cube")),
        element("span", { class: "docs-class-copy" }, [
          element("strong", {}, profile.name),
          element("small", {}, docsClassMeta(profile)),
        ]),
        element("span", { class: "role-pill" }, profile.role),
      ])
    )
  );
}

function renderDocsPrimer(classes) {
  const primerIds = ["catalogue", "catalog", "dataset", "distribution"];
  const primerClasses = primerIds
    .map((id) => classes.find((profile) => profile.id === id))
    .filter(Boolean);

  app.querySelector("#docsPrimerClasses").replaceChildren(
    ...primerClasses.map((profile) =>
      element("button", {
        class: `docs-primer-item ${profile.id === state.docsClassId ? "active" : ""}`,
        type: "button",
        onclick: () => {
          state.docsClassId = profile.id;
          state.docsPropertyId = profile.properties[0]?.id ?? null;
          renderDocsContent();
        },
      }, [
        element("span", { class: "docs-primer-icon" }, icon(primerIcon(profile))),
        element("span", {}, profile.name),
        icon("chevron"),
      ])
    )
  );
}

function renderDocsHeader(spec, profile) {
  const counts = {
    mandatory: profile.properties.filter((property) => property.requirement === "mandatory").length,
    recommended: profile.properties.filter((property) => property.requirement === "recommended").length,
    optional: profile.properties.filter((property) => property.requirement === "optional").length,
  };
  const header = app.querySelector("#docsHeader");

  header.replaceChildren(
    element("section", { class: "docs-hero" }, [
      element("div", {}, [
        element("div", { class: "docs-kicker" }, [
          element("span", {}, spec.name),
          element("span", {}, profile.role),
          element("span", {}, "Application Profile"),
        ]),
        element("h1", {}, profile.name),
        element("p", {}, profile.definition),
        element("div", { class: "lineage-row" }, profile.lineage.map((item, index) => [
          element("span", { class: "lineage-chip" }, item),
          index < profile.lineage.length - 1 ? element("span", { class: "lineage-arrow" }, "→") : null,
        ]).flat().filter(Boolean)),
      ]),
      element("div", { class: "docs-summary-card" }, [
        element("div", {}, [element("strong", {}, counts.mandatory), element("span", {}, "mandatory")]),
        element("div", {}, [element("strong", {}, counts.recommended), element("span", {}, "recommended")]),
        element("div", {}, [element("strong", {}, counts.optional), element("span", {}, "optional")]),
      ]),
    ])
  );
}

function renderDocsProperties(properties) {
  app.querySelector("#docsTabPanel").replaceChildren(
    element("section", { class: "docs-section" }, [
      element("div", { class: "docs-section-title" }, [
        element("h2", {}, "Properties"),
        element("span", { class: "count-badge" }, properties.length),
      ]),
      element("div", { class: "property-table-wrap" }, [
        element("table", { class: "property-table" }, [
          element("thead", {}, [
            element("tr", {}, [
              element("th", {}, "Property"),
              element("th", {}, "Cardinality"),
              element("th", {}, "Range"),
              element("th", {}, "Requirement"),
              element("th", {}, "Source / profileOf"),
            ]),
          ]),
          element("tbody", {}, properties.map((property) =>
            element("tr", {
              class: property.id === state.docsPropertyId ? "active" : "",
              onclick: () => {
                state.docsPropertyId = property.id;
                renderDocsContent();
              },
            }, [
              element("td", {}, [
                element("strong", {}, property.name),
                element("span", {}, property.definition),
              ]),
              element("td", {}, property.cardinality),
              element("td", {}, element("code", {}, property.range)),
              element("td", {}, element("span", { class: `req-badge ${property.requirement}` }, property.requirement)),
              element("td", {}, [
                element("span", {}, property.source),
                element("small", {}, property.profileOf),
              ]),
            ])
          )),
        ]),
      ]),
    ])
  );
}

function renderDocsExamples(spec, activeClass) {
  const exampleProperties = activeClass.properties.slice(0, 3);
  app.querySelector("#docsTabPanel").replaceChildren(
    element("section", { class: "docs-section docs-examples" }, [
      element("div", { class: "docs-section-title" }, [
        element("h2", {}, "Examples"),
        element("span", { class: "count-badge" }, spec.name),
      ]),
      element("div", { class: "example-grid" }, [
        element("article", { class: "example-panel" }, [
          element("h3", {}, `${activeClass.name} JSON shape`),
          codeBlock(JSON.stringify(Object.fromEntries(exampleProperties.map((property) => [camelCase(property.name), exampleValue(property)])), null, 2)),
        ]),
        element("article", { class: "example-panel" }, [
          element("h3", {}, "Semantic trace"),
          element("div", { class: "example-trace" }, exampleProperties.map((property) =>
            element("button", {
              class: property.id === state.docsPropertyId ? "active" : "",
              type: "button",
              onclick: () => {
                state.docsPropertyId = property.id;
                renderDocsContent();
              },
            }, [
              element("strong", {}, property.name),
              element("span", {}, `${property.profileOf} · ${property.range}`),
            ])
          )),
        ]),
      ]),
    ])
  );
}

function renderDocsGraph(activeClass) {
  const model = buildGraphModel();
  if (!state.graphSelectedId || !model.nodes.some((node) => node.id === state.graphSelectedId)) {
    const preferredId = state.docsPropertyId ? `property:${state.docsPropertyId}` : `class:${activeClass.id}`;
    state.graphSelectedId = model.nodes.some((node) => node.id === preferredId) ? preferredId : model.nodes[0]?.id ?? null;
  }
  app.querySelector("#docsTabPanel").replaceChildren(
    element("section", { class: "docs-section docs-graph-tab" }, [
      element("div", { class: "docs-section-title" }, [
        element("h2", {}, "Graph"),
        element("span", { class: "count-badge" }, `${model.nodes.length} nodes`),
      ]),
      element("div", { class: "graph-canvas docs-graph-canvas" }, [
        svgEl("svg", { id: "graphSvg", class: "graph-svg", viewBox: "0 0 1000 650", preserveAspectRatio: "none", "aria-hidden": "true" }),
        element("div", { id: "graphNodeLayer", class: "graph-node-layer" }),
        element("div", { class: "graph-legend" }, [
          element("span", {}, [element("i", { class: "legend-dot class" }), "Class"]),
          element("span", {}, [element("i", { class: "legend-dot property" }), "Property"]),
          element("span", {}, [element("i", { class: "legend-dot profile" }), "profileOf"]),
        ]),
      ]),
    ])
  );
  renderGraphNodes(model.nodes);
  renderGraphEdges(model.nodes, model.edges);
}

function renderDocsCode(activeClass) {
  const generated = generateTypeScript(activeClass);
  app.querySelector("#docsTabPanel").replaceChildren(
    element("section", { class: "docs-section docs-code-tab" }, [
      element("div", { class: "docs-section-title" }, [
        element("h2", {}, "Code"),
        element("button", { class: "docs-copy-code", type: "button", onclick: () => copyText(generated.code) }, [icon("copy"), "Copy TypeScript"]),
      ]),
      element("div", { class: "code-window docs-code-window" }, [
        element("div", { class: "code-window-bar" }, [
          element("span", { class: "window-dot red" }),
          element("span", { class: "window-dot yellow" }),
          element("span", { class: "window-dot green" }),
          element("strong", {}, generated.filename),
        ]),
        codeBlock(generated.code),
        element("div", { class: "code-statusbar" }, [element("span", {}, generated.language), element("span", {}, "Generated from selected class profile"), element("span", {}, "UTF-8")]),
      ]),
    ])
  );
}

function codeBlock(code) {
  return element("pre", { class: "code-editor" }, code.split("\n").map((line, index) =>
    element("span", { class: "code-line" }, [element("span", { class: "line-number" }, String(index + 1).padStart(2, "0")), element("code", {}, line || " ")])
  ));
}

function exampleValue(property) {
  if (property.cardinality.endsWith("n")) return [`Example ${property.name}`];
  if (property.range.toLowerCase().includes("date")) return "2026-04-27";
  if (property.range.toLowerCase().includes("string")) return `Example ${property.name}`;
  return property.range;
}

function renderDocsInspector(activeClass, properties) {
  const inspector = app.querySelector("#docsInspector");
  const property = properties.find((item) => item.id === state.docsPropertyId) ?? activeClass.properties[0];

  inspector.replaceChildren(
    element("div", { class: "docs-inspector-head" }, [
      element("span", { class: "docs-inspector-icon" }, icon("link")),
      element("div", {}, [
        element("h2", {}, property?.name ?? activeClass.name),
        property ? element("p", {}, [element("span", { class: `req-badge ${property.requirement}` }, property.requirement), " ", property.cardinality]) : element("p", {}, "Class profile"),
      ]),
    ]),
    property
      ? element("div", { class: "docs-inspector-body" }, [
          block("Definition", [element("p", {}, property.definition)]),
          block("Semantic Metadata", [
            metaRow("IRI", property.iri, true),
            metaRow("profileOf", property.profileOf),
            metaRow("range", property.range),
            metaRow("cardinality", property.cardinality),
            metaRow("source", property.source),
          ]),
          // block("Next View", [
          //   actionButton("Show in Graph", "graph", openDocsSelectionInGraph),
          //   actionButton("Generate Developer Model", "code", openDocsSelectionInTypeScript),
          // ], "inspector-actions"),
        ])
      : element("div", { class: "docs-inspector-body" }, [block("Class Profile", [element("p", {}, activeClass.definition)])])
  );
}

function renderDocsEmpty(spec) {
  app.querySelector(".docs-main-scroll").replaceChildren(
    element("section", { class: "docs-empty" }, [
      element("h1", {}, `${spec.name} documentation`),
      element("p", {}, "No structured class profiles are present in the mock JSON for this specification yet."),
    ])
  );
  app.querySelector("#docsPrimerClasses").replaceChildren();
  app.querySelector("#docsClassList").replaceChildren();
  app.querySelector("#docsInspector").replaceChildren();
}

function docsFilterButton(value, label) {
  return element("button", {
    class: state.docsRequirement === value ? "active" : "",
    type: "button",
    "data-docs-requirement": value,
  }, label);
}

function docsTypeFilterButton(value, label) {
  return element("button", {
    class: state.docsPropertyType === value ? "active" : "",
    type: "button",
    "data-docs-type": value,
  }, label);
}

function docsClassMeta(profile) {
  const objectCount = profile.properties.filter((property) => propertyValueType(property) === "object").length;
  return `${profile.properties.length} properties - ${objectCount} object ${objectCount === 1 ? "link" : "links"}`;
}

function propertyValueType(property) {
  const range = property.range.toLowerCase();
  const literalTokens = ["literal", "string", "langstring", "boolean", "integer", "decimal", "date", "time", "number"];
  return literalTokens.some((token) => range.includes(token)) ? "literal" : "object";
}

function primerIcon(profile) {
  const name = profile.name.toLowerCase();
  if (name.includes("catalog")) return "book";
  if (name.includes("dataset")) return "stack";
  if (name.includes("distribution")) return "download";
  return "cube";
}

function openDocsSelectionInGraph() {
  state.graphSelectedId = state.docsPropertyId ? `property:${state.docsPropertyId}` : `class:${state.docsClassId}`;
  state.docsTab = "graph";
  renderDocsContent();
}

function openDocsSelectionInTypeScript() {
  state.devFormat = "typescript";
  state.docsTab = "code";
  renderDocsContent();
}

function getDocClasses(spec) {
  return spec.documentation?.classProfiles ?? [];
}

function filteredDocProperties(profile) {
  const query = state.query;
  return profile.properties.filter((property) => {
    const matchesRequirement = state.docsRequirement === "all" || property.requirement === state.docsRequirement;
    const matchesType = state.docsPropertyType === "all" || propertyValueType(property) === state.docsPropertyType;
    const haystack = [property.name, property.definition, property.range, property.source, property.profileOf].join(" ").toLowerCase();
    const matchesQuery = !query || haystack.includes(query) || profile.name.toLowerCase().includes(query);
    return matchesRequirement && matchesType && matchesQuery;
  });
}

function renderGraphPage() {
  app.replaceChildren(buildGraphPage());
  bindGraphEvents();
  renderGraphContent();
}

function buildGraphPage() {
  const selected = getSelectedSpec();
  return element("section", { class: "graph-layout" }, [
    element("aside", { class: "graph-sidebar" }, [
      element("div", { class: "graph-side-head" }, [
        element("span", { class: "graph-side-icon" }, icon("graph")),
        element("div", {}, [
          element("h2", {}, "Graph Explorer"),
          element("p", {}, selected.name),
        ]),
      ]),
      element("section", { class: "graph-control-group" }, [
        element("h3", {}, "Layers"),
        graphCheck("graphShowClasses", "Class Profiles", "cube"),
        graphCheck("graphShowProperties", "Property Profiles", "link"),
        graphCheck("graphShowProfileOf", "profileOf Lineage", "book"),
      ]),
      element("section", { class: "graph-control-group" }, [
        element("h3", {}, "Edges"),
        graphCheck("graphShowDomainRange", "domain / range", "graph"),
      ]),
      element("section", { class: "graph-control-group" }, [
        element("h3", {}, "Requirement"),
        element("div", { class: "docs-filter-pills" }, [
          graphRequirementButton("all", "All"),
          graphRequirementButton("mandatory", "Mandatory"),
          graphRequirementButton("recommended", "Recommended"),
          graphRequirementButton("optional", "Optional"),
        ]),
      ]),
      element("section", { class: "graph-control-group" }, [
        element("h3", {}, "Layout"),
        element("select", { id: "graphLayoutSelect", class: "graph-select" }, [
          element("option", { value: "semantic" }, "Semantic radial"),
          element("option", { value: "hierarchy" }, "Profile hierarchy"),
          element("option", { value: "compact" }, "Compact"),
        ]),
      ]),
    ]),
    element("section", { class: "graph-workspace" }, [
      element("div", { class: "graph-toolbar" }, [
        element("div", {}, [
          element("h1", {}, "Interactive Graph"),
          element("p", {}, "Explore classes, properties, profile lineage, and domain/range relationships."),
        ]),
        element("div", { class: "graph-toolbar-actions" }, [
          element("button", { type: "button", id: "graphFitView" }, [icon("fit"), "Fit view"]),
          element("button", { type: "button", id: "graphOpenDocs" }, [icon("book"), "Open docs"]),
        ]),
      ]),
      element("div", { class: "graph-canvas" }, [
        svgEl("svg", { id: "graphSvg", class: "graph-svg", viewBox: "0 0 1000 650", preserveAspectRatio: "none", "aria-hidden": "true" }),
        element("div", { id: "graphNodeLayer", class: "graph-node-layer" }),
        element("div", { class: "graph-zoom-controls" }, [
          element("button", { id: "graphZoomIn", type: "button", title: "Zoom in" }, "+"),
          element("button", { id: "graphZoomOut", type: "button", title: "Zoom out" }, "−"),
          element("button", { id: "graphReset", type: "button", title: "Reset view" }, icon("fit")),
        ]),
        element("div", { class: "graph-minimap" }, [
          element("span", {}),
          element("span", {}),
          element("span", {}),
          element("span", {}),
          element("span", {}),
        ]),
        element("div", { class: "graph-legend" }, [
          element("span", {}, [element("i", { class: "legend-dot class" }), "Class"]),
          element("span", {}, [element("i", { class: "legend-dot property" }), "Property"]),
          element("span", {}, [element("i", { class: "legend-line profile" }), "profileOf"]),
          element("span", {}, [element("i", { class: "legend-line domain" }), "domain/range"]),
        ]),
      ]),
    ]),
    element("aside", { id: "graphInspector", class: "graph-inspector" }),
  ]);
}

function bindGraphEvents() {
  ["graphShowClasses", "graphShowProperties", "graphShowProfileOf", "graphShowDomainRange"].forEach((key) => {
    app.querySelector(`#${key}`).addEventListener("change", (event) => {
      state[key] = event.target.checked;
      renderGraphContent();
    });
  });

  app.querySelectorAll("[data-graph-requirement]").forEach((button) => {
    button.addEventListener("click", () => {
      state.graphRequirement = button.dataset.graphRequirement;
      renderGraphContent();
    });
  });

  app.querySelector("#graphZoomIn").addEventListener("click", () => {
    state.zoom = Math.min(1.18, state.zoom + 0.08);
    updateGraphZoom();
  });

  app.querySelector("#graphZoomOut").addEventListener("click", () => {
    state.zoom = Math.max(0.82, state.zoom - 0.08);
    updateGraphZoom();
  });

  app.querySelector("#graphReset").addEventListener("click", () => {
    state.zoom = 1;
    updateGraphZoom();
  });

  app.querySelector("#graphFitView").addEventListener("click", () => {
    state.zoom = 1;
    updateGraphZoom();
    showToast("Graph fitted to view.");
  });

  app.querySelector("#graphOpenDocs").addEventListener("click", () => {
    location.hash = "#docs";
  });

  app.querySelector("#graphLayoutSelect").addEventListener("change", () => {
    showToast("Layout preset applied to the mock graph.");
  });
}

function renderGraphContent() {
  if (state.route !== "graph") return;
  const model = buildGraphModel();

  if (!state.graphSelectedId || !model.nodes.some((node) => node.id === state.graphSelectedId)) {
    state.graphSelectedId = model.nodes.find((node) => node.kind === "class")?.id ?? model.nodes[0]?.id ?? null;
  }

  app.querySelectorAll("[data-graph-requirement]").forEach((button) => {
    button.classList.toggle("active", button.dataset.graphRequirement === state.graphRequirement);
  });

  renderGraphNodes(model.nodes);
  renderGraphEdges(model.nodes, model.edges);
  renderGraphInspector(model);
}

function buildGraphModel() {
  const spec = getSelectedSpec();
  const classes = getDocClasses(spec);
  const query = state.query;
  const nodes = [];
  const edges = [];
  const activeClassId = state.docsClassId && classes.some((profile) => profile.id === state.docsClassId)
    ? state.docsClassId
    : classes[0]?.id;
  const activeClass = classes.find((profile) => profile.id === activeClassId) ?? classes[0];

  if (state.graphShowProfileOf) {
    nodes.push({
      id: "lineage-vocab",
      kind: "vocabulary",
      label: activeClass?.lineage?.[0] ?? "Vocabulary",
      subtitle: "Source vocabulary",
      x: 50,
      y: 15,
    });
  }

  if (state.graphShowClasses) {
    classes.forEach((profile, index) => {
      const positions = [
        { x: 50, y: 45 },
        { x: 23, y: 48 },
        { x: 77, y: 48 },
        { x: 50, y: 78 },
      ];
      const position = positions[index] ?? { x: 18 + index * 16, y: 76 };
      nodes.push({
        id: `class:${profile.id}`,
        kind: "class",
        label: profile.name,
        subtitle: `${profile.properties.length} properties`,
        source: profile,
        x: position.x,
        y: position.y,
      });
      if (state.graphShowProfileOf && index === 0) {
        edges.push({ id: `edge-profile-${profile.id}`, source: `class:${profile.id}`, target: "lineage-vocab", label: "profileOf", type: "profileOf" });
      }
    });
  }

  if (state.graphShowProperties && activeClass) {
    const properties = activeClass.properties.filter((property) => {
      const matchesRequirement = state.graphRequirement === "all" || property.requirement === state.graphRequirement;
      const haystack = [property.name, property.definition, property.range, property.source, property.profileOf].join(" ").toLowerCase();
      return matchesRequirement && (!query || haystack.includes(query) || activeClass.name.toLowerCase().includes(query));
    });
    const propertyPositions = [
      { x: 32, y: 27 },
      { x: 68, y: 27 },
      { x: 30, y: 70 },
      { x: 70, y: 70 },
      { x: 40, y: 84 },
      { x: 60, y: 84 },
    ];
    properties.forEach((property, index) => {
      const position = propertyPositions[index] ?? { x: 30 + (index % 4) * 14, y: 82 };
      nodes.push({
        id: `property:${property.id}`,
        kind: "property",
        label: property.name,
        subtitle: `${property.range} · ${property.cardinality}`,
        source: property,
        x: position.x,
        y: position.y,
      });
      if (state.graphShowDomainRange) {
        edges.push({ id: `edge-domain-${property.id}`, source: `class:${activeClass.id}`, target: `property:${property.id}`, label: property.requirement, type: property.requirement });
        const rangeClass = classes.find((profile) => profile.name.toLowerCase() === property.range.toLowerCase());
        if (rangeClass) {
          edges.push({ id: `edge-range-${property.id}`, source: `property:${property.id}`, target: `class:${rangeClass.id}`, label: "range", type: "range" });
        }
      }
    });
  }

  const visibleNodes = nodes.filter((node) => {
    if (!query) return true;
    const haystack = [node.label, node.subtitle, node.source?.definition, node.source?.profileOf].join(" ").toLowerCase();
    return haystack.includes(query);
  });
  const visibleIds = new Set(visibleNodes.map((node) => node.id));
  const visibleEdges = edges.filter((edge) => visibleIds.has(edge.source) && visibleIds.has(edge.target));
  return { spec, classes, activeClass, nodes: visibleNodes, edges: visibleEdges };
}

function renderGraphNodes(nodes) {
  const layer = app.querySelector("#graphNodeLayer");
  layer.style.transform = `scale(${state.zoom})`;
  layer.replaceChildren(
    ...nodes.map((node) =>
      element("button", {
        class: `graph-node ${node.kind} ${node.id === state.graphSelectedId ? "active" : ""}`,
        type: "button",
        style: `left:${node.x}%;top:${node.y}%;`,
        onclick: () => {
          state.graphSelectedId = node.id;
          if (node.kind === "class") state.docsClassId = node.source.id;
          if (node.kind === "property") state.docsPropertyId = node.source.id;
          if (state.route === "graph") {
            renderGraphContent();
          } else {
            renderDocsContent();
          }
        },
      }, [
        element("span", { class: "graph-node-icon" }, icon(node.kind === "property" ? "link" : node.kind === "vocabulary" ? "book" : "cube")),
        element("span", { class: "graph-node-copy" }, [
          element("strong", {}, node.label),
          element("small", {}, node.subtitle),
        ]),
      ])
    )
  );
}

function renderGraphEdges(nodes, edges) {
  const svg = app.querySelector("#graphSvg");
  svg.replaceChildren();
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  defs.innerHTML = `
    <marker id="graphArrow" markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto">
      <path d="M0,0 L8,3.5 L0,7 Z" fill="context-stroke"></path>
    </marker>
  `;
  svg.append(defs);

  edges.forEach((edge) => {
    const source = nodes.find((node) => node.id === edge.source);
    const target = nodes.find((node) => node.id === edge.target);
    if (!source || !target) return;
    const x1 = source.x * 10;
    const y1 = source.y * 6.5;
    const x2 = target.x * 10;
    const y2 = target.y * 6.5;
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    const color = graphEdgeColor(edge.type);
    svg.append(svgEl("line", {
      x1,
      y1,
      x2,
      y2,
      class: "graph-edge-line",
      stroke: color,
      "marker-end": "url(#graphArrow)",
      "stroke-dasharray": edge.type === "profileOf" || edge.type === "range" ? "6 6" : "",
    }));
    const label = svgEl("text", { x: midX, y: midY - 8, class: "graph-edge-label", fill: color });
    label.textContent = edge.label;
    svg.append(label);
  });
}

function renderGraphInspector(model) {
  const inspector = app.querySelector("#graphInspector");
  const selectedNode = model.nodes.find((node) => node.id === state.graphSelectedId) ?? model.nodes[0];
  if (!selectedNode) {
    inspector.replaceChildren(block("Graph", [element("p", {}, "No graph nodes match the current filters.")]));
    return;
  }

  const source = selectedNode.source;
  const isProperty = selectedNode.kind === "property";
  const relatedEdges = model.edges.filter((edge) => edge.source === selectedNode.id || edge.target === selectedNode.id);

  inspector.replaceChildren(
    element("div", { class: "graph-inspector-head" }, [
      element("span", { class: `graph-inspector-icon ${selectedNode.kind}` }, icon(selectedNode.kind === "property" ? "link" : selectedNode.kind === "vocabulary" ? "book" : "cube")),
      element("div", {}, [
        element("h2", {}, selectedNode.label),
        element("p", {}, selectedNode.subtitle),
      ]),
    ]),
    element("div", { class: "graph-inspector-body" }, [
      block("Definition", [element("p", {}, source?.definition ?? `${selectedNode.label} is part of ${model.spec.name}.`)]),
      block("Semantic Metadata", isProperty ? [
        metaRow("IRI", source.iri, true),
        metaRow("profileOf", source.profileOf),
        metaRow("range", source.range),
        metaRow("cardinality", source.cardinality),
        metaRow("requirement", source.requirement),
      ] : [
        metaRow("IRI", source?.iri ?? model.spec.iri, true),
        metaRow("profileOf", source?.profileOf ?? model.spec.name),
        metaRow("role", source?.role ?? "source"),
        metaRow("properties", source?.properties?.length?.toString() ?? model.spec.counts.properties.toString()),
      ]),
      block("Relationships", relatedEdges.length ? relatedEdges.map((edge) => {
        const otherId = edge.source === selectedNode.id ? edge.target : edge.source;
        const other = model.nodes.find((node) => node.id === otherId);
        return element("button", { class: "relationship-row", type: "button", onclick: () => {
          state.graphSelectedId = otherId;
          renderGraphContent();
        } }, [
          element("span", { class: "relationship-type" }, edge.label),
          element("strong", { class: "relationship-target" }, other?.label ?? otherId),
        ]);
      }) : [element("p", {}, "No visible relationships under current filters.")]),
      block("Suggested Next View", [
        actionButton("Open Documentation", "book", () => {
          location.hash = "#docs";
        }),
        actionButton("Generate Developer Model", "code", () => {
          location.hash = "#dev";
        }),
      ], "inspector-actions"),
    ])
  );
}

function updateGraphZoom() {
  const nodeLayer = app.querySelector("#graphNodeLayer");
  if (nodeLayer) nodeLayer.style.transform = `scale(${state.zoom})`;
}

function graphCheck(key, label, iconName) {
  const inputAttrs = { id: key, type: "checkbox" };
  if (state[key]) inputAttrs.checked = "";
  return element("label", { class: "graph-check" }, [
    element("span", {}, [icon(iconName), label]),
    element("input", inputAttrs),
  ]);
}

function graphRequirementButton(value, label) {
  return element("button", {
    class: state.graphRequirement === value ? "active" : "",
    type: "button",
    "data-graph-requirement": value,
  }, label);
}

function graphEdgeColor(type) {
  return {
    profileOf: "#087c70",
    range: "#16a34a",
    mandatory: "#d73d4a",
    recommended: "#c47a09",
    optional: "#667085",
  }[type] ?? "#2754d8";
}

function renderDevPage() {
  app.replaceChildren(buildDevPage());
  bindDevEvents();
  renderDevContent();
}

function buildDevPage() {
  const selected = getSelectedSpec();
  return element("section", { class: "dev-layout" }, [
    element("aside", { class: "dev-sidebar" }, [
      element("div", { class: "dev-side-head" }, [
        element("span", { class: "dev-side-icon" }, icon("code")),
        element("div", {}, [element("h2", {}, "Developer Tools"), element("p", {}, selected.name)]),
      ]),
      element("section", { class: "dev-side-section" }, [element("h3", {}, "Generated Modules"), element("div", { id: "devClassList", class: "dev-class-list" })]),
      element("section", { class: "dev-side-section" }, [
        element("h3", {}, "Jump To Property"),
        element("label", { class: "dev-property-search" }, [icon("search"), element("input", { id: "devSearch", type: "search", placeholder: "Search properties..." })]),
        element("div", { id: "devPropertyList", class: "dev-property-list" }),
      ]),
    ]),
    element("section", { class: "dev-main" }, [
      element("div", { class: "dev-toolbar" }, [
        element("div", {}, [element("h1", { id: "devTitle" }, "Developer View"), element("p", { id: "devSubtitle" }, "Generated implementation model from the selected application profile.")]),
        element("div", { class: "dev-actions" }, [
          element("button", { id: "devCopy", type: "button" }, [icon("copy"), "Copy"]),
          element("button", { id: "devDownload", type: "button" }, [icon("download"), "Download"]),
        ]),
      ]),
      element("div", { class: "dev-format-tabs" }, [
        devFormatButton("typescript", "TypeScript"),
        devFormatButton("jsonschema", "JSON Schema"),
        devFormatButton("shacl", "SHACL"),
        devFormatButton("rdf", "RDF / TTL"),
      ]),
      element("div", { class: "code-window" }, [
        element("div", { class: "code-window-bar" }, [
          element("span", { class: "window-dot red" }),
          element("span", { class: "window-dot yellow" }),
          element("span", { class: "window-dot green" }),
          element("strong", { id: "devFilename" }, "interfaces.ts"),
        ]),
        element("pre", { id: "devCode", class: "code-editor" }),
        element("div", { class: "code-statusbar" }, [element("span", { id: "devLanguage" }, "TypeScript"), element("span", {}, "Generated from mock dsv.ttl"), element("span", {}, "UTF-8")]),
      ]),
    ]),
    element("aside", { id: "devInspector", class: "dev-inspector" }),
  ]);
}

function bindDevEvents() {
  app.querySelector("#devSearch").value = state.query;
  app.querySelector("#devSearch").addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    searchInput.value = event.target.value;
    renderDevContent();
  });
  app.querySelectorAll("[data-dev-format]").forEach((button) => {
    button.addEventListener("click", () => {
      state.devFormat = button.dataset.devFormat;
      renderDevContent();
    });
  });
  app.querySelector("#devCopy").addEventListener("click", () => copyText(generateDevCode(getActiveDevClass()).code));
  app.querySelector("#devDownload").addEventListener("click", () => showToast(`${generateDevCode(getActiveDevClass()).filename} download simulated.`));
}

function renderDevContent() {
  if (state.route !== "dev") return;
  const spec = getSelectedSpec();
  const classes = getDocClasses(spec);
  if (!classes.length) {
    renderDevEmpty(spec);
    return;
  }
  if (!state.docsClassId || !classes.some((profile) => profile.id === state.docsClassId)) state.docsClassId = classes[0].id;
  const activeClass = getActiveDevClass();
  if (!state.docsPropertyId || !activeClass.properties.some((property) => property.id === state.docsPropertyId)) state.docsPropertyId = activeClass.properties[0]?.id ?? null;
  renderDevClassList(classes);
  renderDevPropertyList(activeClass);
  renderDevEditor(activeClass);
  renderDevInspector(activeClass);
  app.querySelectorAll("[data-dev-format]").forEach((button) => button.classList.toggle("active", button.dataset.devFormat === state.devFormat));
}

function renderDevClassList(classes) {
  app.querySelector("#devClassList").replaceChildren(...classes.map((profile) =>
    element("button", { class: `dev-class-item ${profile.id === state.docsClassId ? "active" : ""}`, type: "button", onclick: () => {
      state.docsClassId = profile.id;
      state.docsPropertyId = profile.properties[0]?.id ?? null;
      renderDevContent();
    } }, [
      element("span", { class: "dev-class-icon" }, icon("cube")),
      element("span", {}, [element("strong", {}, profile.name), element("small", {}, `${profile.properties.length} properties`)]),
    ])
  ));
}

function renderDevPropertyList(activeClass) {
  const query = state.query;
  const properties = activeClass.properties.filter((property) => {
    const haystack = [property.name, property.definition, property.range, property.requirement].join(" ").toLowerCase();
    return !query || haystack.includes(query);
  });
  app.querySelector("#devPropertyList").replaceChildren(...properties.map((property) =>
    element("button", { class: `dev-property-item ${property.id === state.docsPropertyId ? "active" : ""}`, type: "button", onclick: () => {
      state.docsPropertyId = property.id;
      renderDevContent();
    } }, [element("span", {}, property.name), element("span", { class: `req-dot ${property.requirement}` }, property.requirement.charAt(0).toUpperCase())])
  ));
}

function renderDevEditor(activeClass) {
  const generated = generateDevCode(activeClass);
  app.querySelector("#devTitle").textContent = activeClass.name;
  app.querySelector("#devSubtitle").textContent = `${getSelectedSpec().name} · ${activeClass.profileOf} · ${activeClass.properties.length} profiled properties`;
  app.querySelector("#devFilename").textContent = generated.filename;
  app.querySelector("#devLanguage").textContent = generated.language;
  app.querySelector("#devCode").replaceChildren(...generated.code.split("\n").map((line, index) =>
    element("span", { class: "code-line" }, [element("span", { class: "line-number" }, String(index + 1).padStart(2, "0")), element("code", {}, line || " ")])
  ));
}

function renderDevInspector(activeClass) {
  const property = activeClass.properties.find((item) => item.id === state.docsPropertyId) ?? activeClass.properties[0];
  app.querySelector("#devInspector").replaceChildren(
    element("div", { class: "dev-inspector-head" }, [
      element("span", { class: "dev-inspector-icon" }, icon("link")),
      element("div", {}, [element("h2", {}, property?.name ?? activeClass.name), property ? element("p", {}, [element("span", { class: `req-badge ${property.requirement}` }, property.requirement), " ", property.cardinality]) : element("p", {}, "Class profile")]),
    ]),
    element("div", { class: "dev-inspector-body" }, [
      block("Business Definition", [element("p", {}, property?.definition ?? activeClass.definition)]),
      block("Semantic Metadata", property ? [
        metaRow("IRI", property.iri, true),
        metaRow("profileOf", property.profileOf),
        metaRow("range", property.range),
        metaRow("cardinality", property.cardinality),
        metaRow("requirement", property.requirement),
      ] : [metaRow("IRI", activeClass.iri, true), metaRow("profileOf", activeClass.profileOf), metaRow("role", activeClass.role)]),
      block("Compliance Triggers", [
        element("div", { class: "dev-trigger" }, [icon("shield"), element("div", {}, [element("strong", {}, "Cardinality Policy"), element("span", {}, property ? `${property.cardinality} mapped into optionality and array shape.` : "Class constraints preserved.")])]),
        element("div", { class: "dev-trigger good" }, [icon("shield"), element("div", {}, [element("strong", {}, "Semantic Traceability"), element("span", {}, "Generated fields keep IRI and profileOf metadata.")])]),
      ]),
      block("Suggested Next View", [
        actionButton("Open Documentation", "book", () => { location.hash = "#docs"; }),
        actionButton("Show in Graph", "graph", () => { location.hash = "#graph"; }),
      ], "inspector-actions"),
    ])
  );
}

function renderDevEmpty(spec) {
  app.querySelector(".dev-main").replaceChildren(element("section", { class: "docs-empty" }, [element("h1", {}, `${spec.name} developer model`), element("p", {}, "No structured class profiles are present in the mock JSON for this specification yet.")]));
  app.querySelector("#devClassList").replaceChildren();
  app.querySelector("#devPropertyList").replaceChildren();
  app.querySelector("#devInspector").replaceChildren();
}

function devFormatButton(value, label) {
  return element("button", { class: state.devFormat === value ? "active" : "", type: "button", "data-dev-format": value }, label);
}

function getActiveDevClass() {
  const classes = getDocClasses(getSelectedSpec());
  return classes.find((profile) => profile.id === state.docsClassId) ?? classes[0];
}

function generateDevCode(activeClass) {
  if (!activeClass) return { filename: "empty.txt", language: "Text", code: "" };
  return { typescript: generateTypeScript, jsonschema: generateJsonSchema, shacl: generateShacl, rdf: generateRdf }[state.devFormat](activeClass);
}

function generateTypeScript(activeClass) {
  const lines = [`/**`, ` * ${activeClass.name}`, ` * ${activeClass.definition}`, ` * @iri ${activeClass.iri}`, ` * @profileOf ${activeClass.profileOf}`, ` */`, `export interface ${pascalCase(activeClass.name)} {`,
    ...activeClass.properties.map((property) => `  /** ${property.definition} */\n  ${camelCase(property.name)}${isOptional(property) ? "?" : ""}: ${tsType(property)};`), `}`];
  return { filename: `${kebabCase(activeClass.name)}.ts`, language: "TypeScript", code: lines.join("\n") };
}

function generateJsonSchema(activeClass) {
  const required = activeClass.properties.filter((property) => !isOptional(property)).map((property) => camelCase(property.name));
  const properties = Object.fromEntries(activeClass.properties.map((property) => [camelCase(property.name), { type: property.cardinality.endsWith("n") ? "array" : jsonType(property.range), description: property.definition, "x-iri": property.iri, "x-profileOf": property.profileOf }]));
  return { filename: `${kebabCase(activeClass.name)}.schema.json`, language: "JSON Schema", code: JSON.stringify({ $schema: "https://json-schema.org/draft/2020-12/schema", title: activeClass.name, type: "object", required, properties }, null, 2) };
}

function generateShacl(activeClass) {
  const lines = [`@prefix sh: <http://www.w3.org/ns/shacl#> .`, `@prefix dcat: <http://www.w3.org/ns/dcat#> .`, ``, `:${pascalCase(activeClass.name)}Shape a sh:NodeShape ;`, `  sh:targetClass ${activeClass.profileOf} ;`,
    ...activeClass.properties.map((property) => `  sh:property [\n    sh:path <${property.iri}> ;\n    sh:name "${property.name}" ;\n    sh:description "${property.definition}" ;\n    sh:minCount ${property.cardinality.startsWith("1") ? "1" : "0"} ;\n  ] ;`), `  .`];
  return { filename: `${kebabCase(activeClass.name)}.shacl.ttl`, language: "SHACL", code: lines.join("\n") };
}

function generateRdf(activeClass) {
  const lines = [`@prefix dsv: <https://w3id.org/dsv#> .`, `@prefix skos: <http://www.w3.org/2004/02/skos/core#> .`, ``, `<${activeClass.iri}> a dsv:ClassProfile ;`, `  skos:prefLabel "${activeClass.name}"@en ;`, `  skos:definition "${activeClass.definition}"@en ;`, `  dsv:profileOf ${activeClass.profileOf} .`, ``,
    ...activeClass.properties.map((property) => `<${property.iri}> a dsv:PropertyProfile ;\n  skos:prefLabel "${property.name}"@en ;\n  dsv:cardinality "${property.cardinality}" ;\n  dsv:requirementLevel "${property.requirement}" .`)];
  return { filename: `${kebabCase(activeClass.name)}.ttl`, language: "RDF / TTL", code: lines.join("\n") };
}

function tsType(property) {
  const map = { "rdf:langString": "LocalizedString[]", "rdfs:Literal": "string", "xsd:string": "string", "rdfs:Resource": "URI" };
  const base = map[property.range] ?? pascalCase(property.range.replace(/^[^:]+:/, ""));
  return property.cardinality.endsWith("n") && !base.endsWith("[]") ? `${base}[]` : base;
}

function jsonType(range) {
  if (range.includes("string") || range.includes("Literal")) return "string";
  if (range.includes("decimal") || range.includes("integer")) return "number";
  return "object";
}

function isOptional(property) {
  return property.cardinality.startsWith("0") || property.requirement === "optional" || property.requirement === "recommended";
}

function pascalCase(value) {
  return value.replace(/(^|[\s_-])(\w)/g, (_, __, char) => char.toUpperCase()).replace(/[^\w]/g, "");
}

function camelCase(value) {
  const pascal = pascalCase(value);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

function kebabCase(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function renderPlaceholder() {
  app.replaceChildren(placeholderTemplate.content.cloneNode(true));
  const details = routeLabels[state.route];
  app.querySelector("#placeholderTitle").textContent = details.title;
  app.querySelector("#placeholderText").textContent = details.text;
  app.querySelector("#placeholderIcon").textContent = details.icon;
}

function visibleSpecifications() {
  const query = state.query;
  return state.data.specifications.filter((spec) => {
    const matchesQuery = !query || [spec.name, spec.type, spec.description, spec.sourceUrl].join(" ").toLowerCase().includes(query);
    const matchesShape = state.showShapes || spec.type !== "Validation Shapes";
    const matchesClassProperty = (state.showClasses || spec.counts.classes === 0) && (state.showProperties || spec.counts.properties === 0);
    return matchesQuery && matchesShape && matchesClassProperty;
  });
}

function findSpecByUrl(url) {
  const normalized = url.trim().replace(/\/$/, "").toLowerCase();
  return (
    state.data.specifications.find((spec) => spec.sourceUrl.replace(/\/$/, "").toLowerCase() === normalized) ||
    state.data.specifications.find((spec) => normalized.includes(spec.id)) ||
    state.data.specifications.find((spec) => spec.id === "dcat-ap")
  );
}

function selectSpec(id) {
  const exists = state.data.specifications.some((spec) => spec.id === id);
  if (!exists) {
    showToast("This external specification is listed as a reference only.");
    return;
  }
  state.selectedId = id;
  state.inspectorTab = "overview";
  renderBrowseContent();
}

function getSelectedSpec() {
  return state.data.specifications.find((spec) => spec.id === state.selectedId) ?? state.data.specifications[0];
}

function updateZoom() {
  const nodeLayer = app.querySelector("#nodeLayer");
  if (nodeLayer) nodeLayer.style.transform = `scale(${state.zoom})`;
}

function showToast(message) {
  document.querySelector(".toast")?.remove();
  const toast = element("div", { class: "toast", role: "status" }, message);
  document.body.append(toast);
  window.setTimeout(() => toast.remove(), 2200);
}

function block(title, children, className = "") {
  return element("section", { class: `inspector-block ${className}` }, [
    element("h3", {}, title),
    ...(Array.isArray(children) ? children : [children]),
  ]);
}

function metaRow(label, value, copyable = false) {
  return element("div", { class: "meta-row" }, [
    element("span", {}, label),
    copyable
      ? element("span", { style: "display:flex;align-items:center;gap:8px;min-width:0;" }, [
          element("strong", { style: "overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:188px;" }, value),
          element("button", { class: "copy-button", type: "button", title: "Copy", onclick: () => copyText(value) }, icon("copy")),
        ])
      : element("strong", {}, value),
  ]);
}

function attachmentRow(attachment) {
  return element("div", { class: "attachment-row" }, [
    element("div", {}, [
      element("div", { class: "attachment-name" }, attachment.name),
      element("div", { class: "attachment-type" }, attachment.type),
    ]),
    element("span", { class: "attachment-type" }, attachment.size),
    element("button", { class: "download-button", type: "button", title: "Download attachment", onclick: () => showToast(`${attachment.name} download simulated.`) }, icon("download")),
  ]);
}

function actionButton(label, iconName, onClick) {
  return element("button", { class: `inspector-action ${label === "Open Documentation" ? "primary" : ""}`, type: "button", onclick: onClick }, [
    icon(iconName),
    element("span", {}, label),
  ]);
}

function stat(iconName, value) {
  return element("span", {}, [icon(iconName), String(value)]);
}

function copyText(value) {
  navigator.clipboard?.writeText(value);
  showToast("Copied to clipboard.");
}

function typeToClass(type) {
  if (type === "Vocabulary") return "vocabulary";
  if (type === "Validation Shapes") return "validation";
  if (type === "Ontology") return "ontology";
  return "application";
}

function iconForType(type) {
  if (type === "Vocabulary") return "book";
  if (type === "Validation Shapes") return "shield";
  if (type === "Ontology") return "graph";
  return "layers";
}

function edgeColor(type) {
  return {
    profileOf: "#087c70",
    specializes: "#6b46c1",
    reuses: "#c47a09",
    uses: "#667085",
  }[type] ?? "#667085";
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function element(tag, attrs = {}, children = []) {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === "class") el.className = value;
    else if (key === "style") el.setAttribute("style", value);
    else if (key.startsWith("on") && typeof value === "function") el.addEventListener(key.slice(2).toLowerCase(), value);
    else el.setAttribute(key, value);
  });
  const childList = Array.isArray(children) ? children : [children];
  childList.forEach((child) => {
    if (child === null || child === undefined) return;
    el.append(child.nodeType ? child : document.createTextNode(child));
  });
  return el;
}

function svgEl(tag, attrs = {}) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
  return el;
}

function icon(name) {
  const paths = {
    layers: "m12 3 9 5-9 5-9-5 9-5Zm5.85 12.02L12 18.27l-5.85-3.25L3 16.77l9 5 9-5-3.15-1.75Zm0-4L12 14.27l-5.85-3.25L3 12.77l9 5 9-5-3.15-1.75Z",
    stack: "m12 3 9 5-9 5-9-5 9-5Zm0 12.5 6.6-3.66L21 13.17l-9 5-9-5 2.4-1.33L12 15.5Zm0 4 6.6-3.66L21 17.17l-9 5-9-5 2.4-1.33L12 19.5Z",
    cube: "m12 2 9 5v10l-9 5-9-5V7l9-5Zm0 2.3L5.7 7.8 12 11.3l6.3-3.5L12 4.3ZM5 9.5v6.3l6 3.3v-6.3L5 9.5Zm8 9.6 6-3.3V9.5l-6 3.3v6.3Z",
    link: "M7.5 14a4.5 4.5 0 0 1 0-6.36l2.12-2.12A4.5 4.5 0 0 1 16 11.88l-1.05 1.05-1.41-1.41 1.05-1.06a2.5 2.5 0 0 0-3.54-3.53L8.93 9.05a2.5 2.5 0 0 0 0 3.54L10 13.64l-1.41 1.42L7.5 14Zm9-4a4.5 4.5 0 0 1 0 6.36l-2.12 2.12A4.5 4.5 0 0 1 8 12.12l1.05-1.05 1.41 1.41-1.05 1.06a2.5 2.5 0 0 0 3.54 3.53l2.12-2.12a2.5 2.5 0 0 0 0-3.54L14 10.36l1.41-1.42L16.5 10Z",
    shield: "M12 2 20 5v6c0 5-3.4 9.7-8 11-4.6-1.3-8-6-8-11V5l8-3Zm0 2.2L6 6.45V11c0 3.8 2.45 7.38 6 8.88 3.55-1.5 6-5.08 6-8.88V6.45l-6-2.25Z",
    book: "M5 4h6a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H5V4Zm8.5 0H19v13h-6a2 2 0 0 0-1 .27V7a1 1 0 0 1 1-1h.5V4ZM7 6v9h4a5 5 0 0 1 1 .1V7a1 1 0 0 0-1-1H7Z",
    search: "M10.5 4a6.5 6.5 0 0 1 5.16 10.45l4.45 4.44-1.42 1.42-4.44-4.45A6.5 6.5 0 1 1 10.5 4Zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z",
    graph: "M7 5a3 3 0 1 1 2.83 4H9.8l1.5 3h1.4l1.5-3h-.03A3 3 0 1 1 17 11a2.98 2.98 0 0 1-1.03-.18l-1.6 3.2A3 3 0 1 1 12 19a3 3 0 0 1 0-6h.13l-1.5-3H9.87A3 3 0 0 1 7 5Zm0 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fit: "M4 4h6v2H6v4H4V4Zm10 0h6v6h-2V6h-4V4ZM6 14v4h4v2H4v-6h2Zm12 4v-4h2v6h-6v-2h4Z",
    star: "m12 3 2.72 5.51 6.08.88-4.4 4.29 1.04 6.05L12 16.87l-5.44 2.86 1.04-6.05-4.4-4.29 6.08-.88L12 3Z",
    external: "M14 3h7v7h-2V6.41l-8.29 8.3-1.42-1.42 8.3-8.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z",
    download: "M11 4h2v8l3-3 1.42 1.42L12 15.83l-5.42-5.41L8 9l3 3V4ZM5 18h14v2H5v-2Z",
    copy: "M8 7h11v13H8V7Zm2 2v9h7V9h-7ZM5 4h11v2H7v9H5V4Z",
    code: "m8.7 16.3-5-4.3 5-4.3 1.3 1.5L6.75 12 10 14.8l-1.3 1.5Zm6.6 0-1.3-1.5 3.25-2.8L14 9.2l1.3-1.5 5 4.3-5 4.3Z",
    chevron: "m9.29 6.71 1.42-1.42L17.41 12l-6.7 6.71-1.42-1.42L14.59 12 9.29 6.71Z",
  };
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", paths[name] ?? paths.layers);
  svg.append(path);
  return svg;
}
