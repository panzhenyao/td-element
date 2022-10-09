var Components = require("../../components.json");
var fs = require("fs");
var render = require("json-templater/string");
var uppercamelcase = require("uppercamelcase");
var path = require("path");
var endOfLine = require("os").EOL;

var OUTPUT_PATH = path.join(__dirname, "../../src/index.js");

var IMPORT_TEMPLATE =
  "import {{name}} from '../packages/{{package}}/index.js';";
var INSTALL_COMPONENT_TEMPLATE = "  {{name}}";
var MAIN_TEMPLATE = `/* Automatically generated by './build/bin/build-entry.js' */

{{include}}

const components = [
{{install}},
];

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '{{version}}',
  install,
{{list}}
};
`;

var ComponentNames = Object.keys(Components);

var includeComponentTemplate = [];
var installTemplate = [];
var listTemplate = [];

ComponentNames.forEach((name) => {
  var componentName = uppercamelcase(name);
  // 将components.json 中的组件注入到队列中
  includeComponentTemplate.push(
    render(IMPORT_TEMPLATE, {
      name: componentName,
      package: name,
    })
  );

  installTemplate.push(
    render(INSTALL_COMPONENT_TEMPLATE, {
      name: componentName,
      component: name,
    })
  );

  listTemplate.push(`  ${componentName}`);
});

var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join(endOfLine),
  install: installTemplate.join("," + endOfLine),
  version: process.env.VERSION || require("../../package.json").version,
  list: listTemplate.join("," + endOfLine),
});

fs.writeFileSync(OUTPUT_PATH, template);
console.log("[build entry] DONE:", OUTPUT_PATH);
